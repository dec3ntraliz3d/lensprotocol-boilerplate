import { Button } from 'antd';
import { useEthersContext, useBlockNumberContext } from 'eth-hooks/context';
import { TCreateEthersModalConnector } from 'eth-hooks/models';
import { FC, useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { invariant } from 'ts-invariant';
import { useDebounce } from 'use-debounce';
import { useIsMounted } from 'usehooks-ts';

export interface IConnectProps {
  createLoginConnector?: TCreateEthersModalConnector;
  hasContextConnect: boolean;
  updateSignInStatus(status: boolean): void;
}
/*

This is extracted from Account Component in Scaffold Eth-Components.

*/
const Connect: FC<IConnectProps> = (props: IConnectProps) => {
  const ethersContext = useEthersContext();
  const showLoadModal = !ethersContext.active;
  const [connecting, setConnecting] = useState(false);

  const isMounted = useIsMounted();
  const [loadingButton, loadingButtonDebounce] = useDebounce(connecting, 1000, {
    maxWait: 1500,
  });

  if (loadingButton && connecting) {
    setConnecting(false);
  }

  const handleLoginClick = (): void => {
    if (props.createLoginConnector != null) {
      const connector = props.createLoginConnector?.();
      if (!isMounted()) {
        invariant.log('openModal: no longer mounted');
      } else if (connector) {
        setConnecting(true);
        ethersContext.openModal(connector);
      } else {
        invariant.warn('openModal: A valid EthersModalConnector was not provided');
      }
    }
  };

  const loadModalButton = (
    <>
      {showLoadModal && props.createLoginConnector && (
        <button
          className="border text-lg px-2 py-1 rounded-lg border-blue-600 hover:text-white hover:bg-blue-600 "
          //loading={loadingButtonDebounce.isPending()}
          key="loginbutton"
          //   shape="round"
          //   size="large"
          onClick={handleLoginClick}>
          connect
        </button>
      )}
    </>
  );

  const logoutButton = (
    <>
      {!showLoadModal && props.createLoginConnector && (
        <button
          className="border text-lg px-2 py-1 rounded-lg border-blue-600 hover:text-white hover:bg-blue-600 "
          key="logoutbutton"
          onClick={() => {
            ethersContext.disconnectModal();
            props.updateSignInStatus(false);
          }}>
          logout
        </button>
      )}
    </>
  );

  const { currentTheme } = useThemeSwitcher();
  return (
    <div>
      {/* {display} */}
      {props.hasContextConnect && (
        <>
          {loadModalButton}
          {logoutButton}
        </>
      )}
    </div>
  );
};
export default Connect;
