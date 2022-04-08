import { useQuery, useMutation } from '@apollo/client';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';
import Publication from '../home/Publication';
import { GET_PUBLICATION, GET_PUBLICATIONS } from '../../common/queries/publications';
import { formatImage } from '../../common/helpful_functions/formatImage';
import { FC, useEffect, useState } from 'react';
import { Button } from 'antd';
import { uploadIpfs } from '../../common/helpful_functions/ipfs';
import { CREATE_COMMENT_TYPED_DATA } from '../../common/queries/typed-data';
import { useEthersContext } from 'eth-hooks/context';
import { omit } from '../../common/helpful_functions/omit';
import { useAppContracts } from '~~/config/contractContext';
import { NETWORKS } from '~~/models/constants/networks';
import { splitSignature } from '@ethersproject/bytes';
import { useContext } from 'react';
import { EthComponentsSettingsContext } from 'eth-components/models';
import { useGasPrice } from 'eth-hooks';
import { transactor, TTransactorFunc } from 'eth-components/functions';
import { useNotification } from 'web3uikit';
import { IProfile } from '../../common/interfaces/interfaces';

interface Props {
  profile: IProfile | undefined;
  updateProfile(): any;
  isSignedIn: boolean;
  tx: TTransactorFunc | undefined;
}

const Comment: FC<Props> = ({ profile, updateProfile, isSignedIn, tx }) => {
  const params: any = useParams();
  const [content, setContent] = useState<string>();
  const [isSigning, setIsSigning] = useState<boolean>(false);
  const dispatch = useNotification();

  const [getCommentTypedData, { error: errorCommentTypedData }] = useMutation(CREATE_COMMENT_TYPED_DATA);

  const { data, error, loading } = useQuery(GET_PUBLICATION, {
    variables: {
      request: {
        publicationId: params.id,
      },
    },
  });
  const {
    data: comments,
    loading: loadingComments,
    error: commentsError,
  } = useQuery(GET_PUBLICATIONS, {
    variables: {
      request: {
        commentsOf: params.id,
      },
    },
    pollInterval: 2000,
  });

  useEffect(() => {
    console.log(data);
    console.log(errorCommentTypedData);
  }, [data, errorCommentTypedData]);

  const ethersContext = useEthersContext();
  const lensHub = useAppContracts('LensHub', NETWORKS.mumbai.chainId);

  const handleComment = async () => {
    if (!content) return;
    setIsSigning(true);
    const uploadedContent = await uploadIpfs({ content });
    try {
      const result = await getCommentTypedData({
        variables: {
          request: {
            profileId: profile?.id,
            publicationId: data.publication.id,
            contentURI: 'ipfs://' + uploadedContent.path,
            collectModule: {
              revertCollectModule: true,
            },
            referenceModule: {
              followerOnlyReferenceModule: false,
            },
          },
        },
      });

      const typedData = result.data.createCommentTypedData.typedData;
      const signer = ethersContext.provider?.getSigner();

      const signature = await signer?._signTypedData(
        omit(typedData.domain, '__typename'),
        omit(typedData.types, '__typename'),
        omit(typedData.value, '__typename')
      );

      if (signature) {
        const { v, r, s } = splitSignature(signature);

        const result = tx?.(
          lensHub?.commentWithSig({
            profileId: typedData.value.profileId,
            contentURI: typedData.value.contentURI,
            profileIdPointed: typedData.value.profileIdPointed,
            pubIdPointed: typedData.value.pubIdPointed,
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
          })
        );
        updateProfile();
        console.log(result);
      }
    } catch (error: any) {
      console.log('unable to get signature');
      console.log(error);

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
    <div className="m-auto pt-5 px-3 md:w-3/4 pb-20 ">
      {loading ? (
        <Spin />
      ) : (
        <Publication
          key={data.publication.id}
          id={data.publication.id}
          profileId={data.publication.profile.id}
          handle={data.publication.profile.handle}
          pfp={formatImage(data.publication.profile.picture?.original?.url) ?? '../assets/emptyPfp.png'}
          name={data.publication.profile.name}
          content={data.publication.metadata.content}
          totalAmountOfComments={data.publication.stats.totalAmountOfComments}
          totalAmountOfMirrors={data.publication.stats.totalAmountOfMirrors}
          totalAmountOfCollects={data.publication.stats.totalAmountOfCollects}
          tx={tx}
        />
      )}
      {isSignedIn && (
        <textarea
          className="w-full px-5 h-20 py-2 text-gray-700 border rounded-lg focus:outline-none"
          rows={4}
          placeholder="Say something nice ?"
          onChange={(e) => {
            setContent(e.target.value);
          }}></textarea>
      )}

      {isSignedIn && (
        <div className="flex justify-end pr-7">
          <Button className="mt-1" type="primary" onClick={handleComment}>
            Comment
          </Button>
        </div>
      )}

      {comments &&
        comments.publications?.items?.map((item: any) => (
          <Publication
            key={item.id}
            id={item.id}
            profileId={item.profile.id}
            handle={item.profile.handle}
            pfp={formatImage(item.profile.picture?.original?.url) ?? '../assets/emptyPfp.png'}
            name={item.profile.name}
            content={item.metadata.content}
            totalAmountOfComments={item.stats.totalAmountOfComments}
            totalAmountOfMirrors={item.stats.totalAmountOfMirrors}
            totalAmountOfCollects={item.stats.totalAmountOfCollects}
            tx={tx}
          />
        ))}
    </div>
  );
};

export default Comment;
