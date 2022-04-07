import { RetweetOutlined } from '@ant-design/icons';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useEthersContext } from 'eth-hooks/context';
import { FC } from 'react';
import { IProfile } from '~~/components/common/interfaces/interfaces';
import { GET_PROFILES } from '~~/components/common/queries/profiles';
import { CREATE_MIRROR_TYPED_DATA } from '../../common/queries/typed-data';
import { omit } from '../../common/helpful_functions/omit';
import { splitSignature } from '@ethersproject/bytes';
import { TTransactorFunc } from 'eth-components/functions';
import { useAppContracts } from '~~/config/contractContext';
import { NETWORKS } from '~~/models/constants/networks';

interface Props {
  totalAmountOfMirrors: number | undefined;
  publicationId: string;
  tx: TTransactorFunc | undefined;
}

const Mirror: FC<Props> = ({ publicationId, totalAmountOfMirrors, tx }) => {
  const ethersContext = useEthersContext();
  const lensHub = useAppContracts('LensHub', NETWORKS.mumbai.chainId);
  const [mirror] = useMutation(CREATE_MIRROR_TYPED_DATA);
  const [getProfile] = useLazyQuery(GET_PROFILES);
  const handleMirror = async () => {
    const profileData = await getProfile({
      variables: {
        request: {
          ownedBy: ethersContext?.account,
        },
      },
    });

    console.log(profileData);
    const profile: IProfile = profileData.data.profiles.items[0];

    const result = await mirror({
      variables: {
        request: {
          profileId: profile.id,
          publicationId,
        },
      },
    });
    const typedData = result.data.createMirrorTypedData.typedData;
    console.log(typedData);
    // get user signature

    const signer = ethersContext.provider?.getSigner();

    const signature = await signer?._signTypedData(
      omit(typedData.domain, '__typename'),
      omit(typedData.types, '__typename'),
      omit(typedData.value, '__typename')
    );

    if (signature) {
      const { v, r, s } = splitSignature(signature);
      tx?.(
        lensHub?.mirrorWithSig({
          profileId: typedData.value.profileId,
          profileIdPointed: typedData.value.profileIdPointed,
          pubIdPointed: typedData.value.pubIdPointed,
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
    }
  };
  return (
    <button className="flex space-x-1 justify-center items-center" onClick={handleMirror}>
      <RetweetOutlined style={{ color: '#43A047', fontSize: 24 }} />
      <span>{totalAmountOfMirrors}</span>
    </button>
  );
};

export default Mirror;
