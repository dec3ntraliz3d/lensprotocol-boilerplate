import { useQuery } from '@apollo/client';
import { HAS_TX_BEEN_INDEXED } from '../../../common/queries/tx-status';
import { FC, useEffect } from 'react';
import { Spin } from 'antd';

interface IPollingProps {
  handle: string | undefined;
  txHash: string;
  updateIndexed(indexed: boolean): any;
}

const Polling: FC<IPollingProps> = ({ handle, txHash, updateIndexed }) => {
  const { data, loading } = useQuery(HAS_TX_BEEN_INDEXED, {
    variables: {
      request: {
        txHash,
      },
    },
    pollInterval: 1000,
  });

  useEffect(() => {
    if (data?.hasTxHashBeenIndexed?.indexed) updateIndexed(true);
  }, [data]);

  return (
    <div>
      {loading || !data.hasTxHashBeenIndexed.indexed ? (
        <div>
          <p> Indexing data. Please wait </p>
          <Spin />
        </div>
      ) : (
        <div> Profile created for @{handle}</div>
      )}
    </div>
  );
};

export default Polling;
