import { useMutation } from '@apollo/client';
import { splitSignature } from '@ethersproject/bytes';
import { TTransactorFunc } from 'eth-components/functions';
import { useEthersContext } from 'eth-hooks/context';
import { FC } from 'react';
import { Modal, useNotification } from 'web3uikit';
import { omit } from '~~/components/common/helpful_functions/omit';
import { CREATE_BURN_TYPED_DATA } from '~~/components/common/queries/typed-data';
import { useAppContracts } from '~~/config/contractContext';

interface Props {
  profileId: string | undefined;
  updateProfile(): any;
  showDeleteModal(isModalVisible: boolean): void;
  tx: TTransactorFunc | undefined;
}

const DeleteModal: FC<Props> = ({ showDeleteModal, profileId, tx, updateProfile }) => {
  const ethersContext = useEthersContext();
  const lensHub = useAppContracts('LensHub', ethersContext.chainId);
  const dispatch = useNotification();
  const [getBurnProfileTypedData, { error: errorBurnProfileTypedData }] = useMutation(CREATE_BURN_TYPED_DATA);
  const handleDelete = async () => {
    // getTypedData

    const result = await getBurnProfileTypedData({
      variables: {
        request: {
          profileId,
        },
      },
    });

    console.log(result);

    const typedData = result.data.createBurnProfileTypedData.typedData;

    const signer = ethersContext.provider?.getSigner();

    const signature = await signer?._signTypedData(
      omit(typedData.domain, '__typename'),
      omit(typedData.types, '__typename'),
      omit(typedData.value, '__typename')
    );
    if (signature) {
      const { v, r, s } = splitSignature(signature);
      const sig = {
        v,
        r,
        s,
        deadline: typedData.value.deadline,
      };

      const result = tx?.(lensHub?.burnWithSig(typedData.value.tokenId, sig));
      dispatch({
        type: 'info',
        position: 'topR',
        message: 'Deleting profile..',
      });

      console.log(await result);
      dispatch({
        type: 'success',
        position: 'topR',
        message: 'Profile deleted successfully',
      });
      updateProfile();
    }
  };
  return (
    <div
      style={{
        height: '90vh',
        transform: 'scale(1)',
      }}>
      <Modal
        okButtonColor="red"
        okText="Yes! I am 100% sure!"
        onCancel={() => showDeleteModal(false)}
        onCloseButtonPressed={() => showDeleteModal(false)}
        onOk={() => {
          showDeleteModal(false);
          handleDelete();
        }}
        title="Delete Profile">
        <p
          style={{
            fontWeight: 600,
            marginRight: '1em',
            textAlign: 'center',
          }}>
          Are you sure you want to delete your account?
        </p>
      </Modal>
    </div>
  );
};

export default DeleteModal;
