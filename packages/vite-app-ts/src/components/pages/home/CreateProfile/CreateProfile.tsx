import { FC, useEffect, useState } from 'react';
import { CREATE_PROFILE, GET_PROFILES } from '../../../common/queries/profiles';
import { useLazyQuery, useMutation } from '@apollo/client';
import Polling from './Polling';
import { useNotification } from 'web3uikit';
import { Button, message } from 'antd';

interface Props {
  updateProfile(): any;
}

const CreateProfile: FC<Props> = ({ updateProfile }) => {
  const [handle, setHandle] = useState<string>();
  const [profilePictureUri, setProfilePictureUri] = useState<string>();
  const [createProfile, { error: errorCreateProfile }] = useMutation(CREATE_PROFILE);
  const [getProfiles, { error: errorProfiles }] = useLazyQuery(GET_PROFILES);
  const [txHash, setTxHash] = useState<string>();
  const [indexed, setIndexed] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const dispatch = useNotification();

  const updateIndexed = (indexed: boolean) => setIndexed(indexed);

  useEffect(() => {
    if (indexed) {
      updateProfile();
    }
  }, [indexed]);

  const handleCreateProfile = async () => {
    console.log('Creating Profile');

    // check if handle exists
    const profiles = await getProfiles({
      variables: {
        request: {
          handles: [handle],
        },
      },
    });

    if (profiles.data.profiles.items.length !== 0) {
      console.log('handle already exist');
      dispatch({
        type: 'error',
        message: 'Handle exists. Please chose another handle.',
        position: 'topR',
      });
      setIsCreating(() => {
        return false;
      });
      return;
    }

    const result = await createProfile({
      variables: {
        request: {
          handle,
          profilePictureUri,
          followModule: {
            emptyFollowModule: true,
          },
        },
      },
    });

    console.log(result);

    if (result) setTxHash(result.data.createProfile.txHash);
    setIsCreating(() => {
      return false;
    });

    dispatch({
      type: 'info',
      message: 'Indexing data. Please wait ..',
      position: 'topR',
      title: '',
    });
  };
  const createProfileForm = (
    <div className="flex flex-col items-center">
      <label className="text-left text-lg font-bold">Create Profile</label>
      <div className="flex flex-col items-start space-y-2">
        <label className="font-bold"> Handle</label>
        <input
          type="text"
          className="border w-80 md:w-96 rounded-md shadow-sm py-2 px-2"
          onChange={(e) => setHandle(e.target.value)}
        />
        <label className="font-bold"> Profile Image Url</label>
        <input
          type="text"
          className="border w-80 md:w-96 rounded-md shadow-sm py-2 px-2"
          onChange={(e) => setProfilePictureUri(e.target.value)}
        />
        <div className="flex justify-center w-full">
          <Button
            type="primary"
            onClick={() => {
              setIsCreating(true);
              dispatch({
                type: 'info',
                message: 'Creating Profile please wait ..',
                position: 'topR',
                title: '',
              });
              handleCreateProfile();
            }}
            loading={isCreating}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {txHash && !indexed ? (
        <Polling handle={handle} txHash={txHash} updateIndexed={updateIndexed} />
      ) : (
        createProfileForm
      )}
    </>
  );
};

export default CreateProfile;
