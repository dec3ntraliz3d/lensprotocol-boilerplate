import React, { FC } from 'react';
import { Button } from 'antd';
import { useMutation } from '@apollo/client';
import { CREATE_FOLLOW_TYPED_DATA } from '../../common/queries/typed-data';
import { useEthersContext } from 'eth-hooks/context';
import { omit } from '../../common/helpful_functions/omit';
import { useAppContracts } from '~~/config/contractContext';
import { NETWORKS } from '~~/models/constants/networks';
import { TTransactorFunc } from 'eth-components/functions';
import { splitSignature } from '@ethersproject/bytes';

interface Props {
  profileId: string;
  followModule: any;
  tx: TTransactorFunc | undefined;
}

const Follow: FC<Props> = ({ profileId, followModule, tx }) => {
  const ethersContext = useEthersContext();
  const lensHub = useAppContracts('LensHub', NETWORKS.mumbai.chainId);
  const [follow] = useMutation(CREATE_FOLLOW_TYPED_DATA);

  const handleFollow = async () => {
    const result = await follow({
      variables: {
        request: {
          follow: {
            profile: profileId,
          },
        },
      },
    });

    const typedData = result.data.createFollowTypedData.typedData;
    const signer = ethersContext.provider?.getSigner();

    console.log(typedData);

    const signature = await signer?._signTypedData(
      omit(typedData.domain, '__typename'),
      omit(typedData.types, '__typename'),
      omit(typedData.value, '__typename')
    );
    if (signature) {
      const { v, r, s } = splitSignature(signature);
      tx?.(
        lensHub?.followWithSig({
          follower: ethersContext?.account!,
          profileIds: typedData.value.profileIds,
          datas: typedData.value.datas,
          sig: {
            v,
            r,
            s,
            deadline: typedData.value.deadline,
          },
        })
      );
    }

    // tx?.(lensHub?.followWithSig({
    //   follower:ethersContext.account!,
    //   profileIds:typedData.value.profileIds,
    //   datas:typedData.value.datas,
    //   sig{
    //     v,
    //     r,
    //     s,
    //     deadline:typedData.value.deadline,
    //   },

    // }))
  };

  return (
    <Button type="primary" onClick={handleFollow}>
      Follow
    </Button>
  );
};

export default Follow;
