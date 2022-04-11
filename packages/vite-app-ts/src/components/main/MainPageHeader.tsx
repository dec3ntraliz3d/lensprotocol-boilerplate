import { getNetwork } from '@ethersproject/networks';
import { Alert, PageHeader } from 'antd';
import { Account } from 'eth-components/ant';
import { useGasPrice } from 'eth-hooks';
import { useEthersContext } from 'eth-hooks/context';
import React, { FC, ReactElement } from 'react';

import { FaucetHintButton } from '~~/components/common/FaucetHintButton';
import { IScaffoldAppProviders } from '~~/components/main/hooks/useScaffoldAppProviders';
import { getNetworkInfo } from '~~/functions';
import Connect from '../common/Connect';

// displays a page header
export interface IMainPageHeaderProps {
  scaffoldAppProviders: IScaffoldAppProviders;
  price: number;
  updateSignInStatus(status: boolean): void;
}

/**
 * ✏ Header: Edit the header and change the title to your project name.  Your account is on the right *
 * @param props
 * @returns
 */
export const MainPageHeader: FC<IMainPageHeaderProps> = (props) => {
  const ethersContext = useEthersContext();
  const selectedChainId = ethersContext.chainId;

  // 🔥 This hook will get the price of Gas from ⛽️ EtherGasStation
  const [gasPrice] = useGasPrice(ethersContext.chainId, 'fast', getNetworkInfo(ethersContext.chainId));

  /**
   * this shows the page header and other informaiton
   */

  const left = (
    <div>
      <div>
        <PageHeader
          title="🏭 BuidlGuidl Lens"
          subTitle={
            <span>
              <a href="https://github.com/dec3ntraliz3d/lensprotocol-boilerplate" target="_blank" rel="noreferrer">
                <span>-</span> by @dec3ntraliz3d
              </a>
            </span>
          }
          style={{ cursor: 'pointer' }}
        />
      </div>
      {props.children}
    </div>
  );
  /**
   * 👨‍💼 Your account is in the top right with a wallet at connect options
   */
  const right = (
    // <div style={{ position: 'fixed', textAlign: 'right', right: 0, top: 0, padding: 10, zIndex: 1 }}>

    <div className="m-auto mb-3 md:mr-4 ">
      <Connect
        createLoginConnector={props.scaffoldAppProviders.createLoginConnector}
        hasContextConnect={true}
        updateSignInStatus={props.updateSignInStatus}
      />
      <FaucetHintButton scaffoldAppProviders={props.scaffoldAppProviders} gasPrice={gasPrice} />
      {props.children}
    </div>
  );

  /**
   * display the current network on the top right
   */
  let networkDisplay: ReactElement | undefined;
  if (selectedChainId && selectedChainId !== props.scaffoldAppProviders.targetNetwork.chainId) {
    const description = (
      <div>
        You have <b>{getNetwork(selectedChainId)?.name}</b> selected and you need to be on{' '}
        <b>{getNetwork(props.scaffoldAppProviders.targetNetwork)?.name ?? 'UNKNOWN'}</b>.
      </div>
    );
    networkDisplay = (
      <div style={{ zIndex: 2, position: 'absolute', right: 0, top: 90, padding: 16 }}>
        <Alert message="⚠️ Wrong Network" description={description} type="error" closable={false} />
      </div>
    );
  } else {
    networkDisplay = (
      <div
        style={{
          position: 'absolute',
          right: 16,
          top: 84,
          padding: 10,
          color: props.scaffoldAppProviders.targetNetwork.color,
        }}>
        {props.scaffoldAppProviders.targetNetwork.name}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center">
      {left}
      {networkDisplay}
      {right}
    </div>
  );
};
