import { useQuery, useLazyQuery, gql, useMutation } from '@apollo/client';
import { Button, Spin } from 'antd';
import { useEthersContext } from 'eth-hooks/context';
import { GET_PROFILES } from '../../common/queries/profiles';
import { SubmitHandler } from 'react-hook-form';
import UpdateForm from './UpdateForm';
import { IFormInput } from './UpdateForm';
import { ProfileDetails } from './ProfileDetails';
import { useState } from 'react';
import { useNotification } from 'web3uikit';
import { CREATE_SET_PROFILE_IMAGE_URI_TYPED_DATA } from '../../common/queries/typed-data';
import { splitSignature } from '@ethersproject/bytes';
import { useContext } from 'react';
import { EthComponentsSettingsContext } from 'eth-components/models';
import { useGasPrice } from 'eth-hooks';
import { transactor, TTransactorFunc } from 'eth-components/functions';
import { useAppContracts } from '~~/config/contractContext';
import { NETWORKS } from '~~/models/constants/networks';
import { IProfile } from '../../common/interfaces/interfaces';
import { omit } from '../../common/helpful_functions/omit';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const UPDATE_PROFILE = gql`
  mutation ($request: UpdateProfileRequest!) {
    updateProfile(request: $request) {
      id
    }
  }
`;

interface Props {
  profile: IProfile | undefined;
  updateProfile(): any;
  isSignedIn: boolean;
  tx: TTransactorFunc | undefined;
}

const ProfileSettings: FC<Props> = ({ profile, updateProfile, isSignedIn, tx }) => {
  const ethersContext = useEthersContext();
  const dispatch = useNotification();
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const lensHub = useAppContracts('LensHub', NETWORKS.mumbai.chainId);
  const { loading, error, data } = useQuery(GET_PROFILES, {
    variables: { request: { ownedBy: [ethersContext.account] } },
  });

  const [updateUserProfile] = useMutation(UPDATE_PROFILE);
  const [getProfileImageTypedData] = useMutation(CREATE_SET_PROFILE_IMAGE_URI_TYPED_DATA);

  if (loading) return <Spin />;
  if (error)
    return (
      <div className="mt-20">
        <p className="text-xl text-red-700">Error fetching Profile data </p>
        {!ethersContext?.account && <p className="text-lg">Please connect via metamask or other web3 provider</p>}
      </div>
    );

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsUpdating(true);
    if (data.profilePicture != profile?.picture?.original.url) {
      // get typed data
      dispatch({
        type: 'info',
        message: 'Updating Profile Picture',
        position: 'topR',
      });

      try {
        const result = await getProfileImageTypedData({
          variables: {
            request: {
              profileId: data.profileId,
              url: data.profilePicture,
            },
          },
        });

        const typedData = result.data.createSetProfileImageURITypedData.typedData;
        const signer = ethersContext.provider?.getSigner();
        const signature = await signer?._signTypedData(
          omit(typedData.domain, '__typename'),
          omit(typedData.types, '__typename'),
          omit(typedData.value, '__typename')
        );

        if (signature) {
          const { v, r, s } = splitSignature(signature);

          tx?.(
            lensHub?.setProfileImageURIWithSig({
              profileId: typedData.value.profileId,
              imageURI: typedData.value.imageURI,
              sig: {
                v,
                r,
                s,
                deadline: typedData.value.deadline,
              },
            })
          );
        }
      } catch (error: any) {
        console.log(error);
        dispatch({
          type: 'error',
          message: error.message,
          position: 'topR',
        });
        return;
      }
    }

    try {
      const result = await updateUserProfile({
        variables: {
          request: {
            profileId: data.profileId,
            name: data.name,
            bio: data.bio,
            location: data.location,
            website: data.website,
            twitterUrl: data.twitterHandle,
            coverPicture: data.coverPicture,
          },
        },
      });

      setIsUpdating(() => {
        return false;
      });
      dispatch({
        type: 'success',
        message: 'Profile Successfully updated',
        position: 'topR',
      });

      // update rest of the profile
      console.log(data);
      updateProfile();
    } catch (error: any) {
      dispatch({
        type: 'error',
        message: error.message,
        position: 'topR',
      });
    }
  };

  if (!isSignedIn)
    return (
      <div className="mt-14">
        <p className="text-lg">Please Sign-in</p>
        <Link to="/">
          <Button type="primary">Back to Home</Button>
        </Link>
      </div>
    );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:w-2/3 m-auto">
      <ProfileDetails profile={profile} />

      <div className=" col-span-1 md:col-span-2 ">
        <UpdateForm profile={profile} onSubmit={onSubmit} isUpdating={isUpdating} />
      </div>
    </div>
  );
};

export default ProfileSettings;
