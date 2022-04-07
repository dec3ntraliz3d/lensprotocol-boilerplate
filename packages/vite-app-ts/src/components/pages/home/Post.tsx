import { FC, useState } from 'react';
import { Avatar, useNotification } from 'web3uikit';
import { Button } from 'antd';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { useEthersContext } from 'eth-hooks/context';
import { GET_PROFILES } from '../../common/queries/profiles';
import { omit } from '../../common/helpful_functions/omit';
import { useAppContracts } from '~~/config/contractContext';
import { NETWORKS } from '~~/models/constants/networks';
import { splitSignature } from '@ethersproject/bytes';
import { CREATE_POST_TYPED_DATA } from '../../common/queries/typed-data';
import { uploadIpfs } from '../../common/helpful_functions/ipfs';
import { DocumentNode } from 'graphql';
import { GET_PUBLICATIONS } from '../../common/queries/publications';
import { Link } from 'react-router-dom';
import { IProfile } from '../../common/interfaces/interfaces';
import { formatImage } from '../../common/helpful_functions/formatImage';
import { TTransactorFunc } from 'eth-components/functions';

interface Props {
  profile: IProfile;
  tx: TTransactorFunc | undefined;
}

const Post: FC<Props> = ({ profile, tx }) => {
  const [content, setContent] = useState<string>();
  const [getPostTypedData, { error: errorPostTypedData }] = useMutation(CREATE_POST_TYPED_DATA);
  const [isSigning, setIsSigning] = useState<boolean>(false);
  const ethersContext = useEthersContext();
  const lensHub = useAppContracts('LensHub', NETWORKS.mumbai.chainId);
  const dispatch = useNotification();

  const handlePost = async () => {
    if (!content) return;
    setIsSigning(true);
    // upload to IPFS and get
    const uploadedContent = await uploadIpfs({ content });
    // Get typeddata via API.
    try {
      const result = await getPostTypedData({
        variables: {
          request: {
            profileId: profile.id,
            contentURI: 'ipfs://' + uploadedContent.path,
            collectModule: {
              revertCollectModule: true,
            },
          },
        },
      });

      const typedData = result.data.createPostTypedData.typedData;

      const signer = ethersContext.provider?.getSigner();

      const signature = await signer?._signTypedData(
        omit(typedData.domain, '__typename'),
        omit(typedData.types, '__typename'),
        omit(typedData.value, '__typename')
      );

      console.log({ signature });
      if (signature) {
        const { v, r, s } = splitSignature(signature);

        tx?.(
          lensHub?.postWithSig({
            profileId: typedData.value.profileId,
            contentURI: typedData.value.contentURI,
            collectModule: typedData.value.collectModule,
            collectModuleData: typedData.value.collectModuleData,
            referenceModule: typedData.value.referenceModule,
            referenceModuleData: typedData.value.referenceModuleData,
            sig: {
              v,
              r,
              s,
              deadline: typedData.value.deadline,
            },
          }),
          () => {
            setIsSigning(() => {
              return false;
            });
          }
        );
      }
    } catch (error: any) {
      console.log('unable to get signature');

      setIsSigning(() => {
        return false;
      });
      dispatch({
        type: 'error',
        message: error.message,
        position: 'topR',
      });
    }
  };

  return (
    <>
      <div className="flex space-x-3 pr-5">
        <Link to={`/profile/${profile.id}`}>
          <img
            src={formatImage(profile?.picture?.original?.url) ?? '../assets/emptyPfp.png'}
            alt="profile picture"
            className="shadow rounded-full w-14 h-14 ml-2 md:w-18 md:h-18 align-middle border-none hover:cursor-pointer"
          />
        </Link>

        <textarea
          className="w-full px-5 h-20 py-2 text-gray-700 border rounded-lg focus:outline-none"
          rows={4}
          placeholder="what is happening today?"
          onChange={(e) => {
            setContent(e.target.value);
          }}></textarea>
      </div>
      <div className="flex justify-end pr-7">
        <Button className="mt-1" type="primary" onClick={handlePost} loading={isSigning}>
          Post
        </Button>
      </div>
    </>
  );
};
export default Post;
