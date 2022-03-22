import { GenericContract } from 'eth-components/ant/generic-contract';
import { useEthersContext } from 'eth-hooks/context';
import React, { FC } from 'react';

import { IScaffoldAppProviders } from '~~/components/main/hooks/useScaffoldAppProviders';
import { useAppContracts } from '~~/config/contractContext';
import { NETWORKS } from '~~/models/constants/networks';
export interface IMainPageContractsProps {
  scaffoldAppProviders: IScaffoldAppProviders;
}

/**
 * 🎛 this scaffolding is full of commonly used components
    this <GenericContract/> component will automatically parse your ABI
    and give you a form to interact with it locally
 * @param props 
 * @returns 
 */
export const MainPageContracts: FC<IMainPageContractsProps> = (props) => {

  // const ethersContext = useEthersContext();
  // const lensHub = useAppContracts("LensHub", ethersContext.chainId)

  const lensHub = useAppContracts("LensHub", NETWORKS.mumbai.chainId)

  // if (ethersContext.account == null) {
  //   return <></>;
  // }

  return (
    <>
      <>
        {/* **********
          ❓ this scaffolding is full of commonly used components
          this <Contract/> component will automatically parse your ABI
          and give you a form to interact with it locally
        ********** */}
        <GenericContract
          contractName="LensHub"
          contract={lensHub}
          mainnetAdaptor={props.scaffoldAppProviders.targetNetwork}
          blockExplorer={props.scaffoldAppProviders.targetNetwork.blockExplorer}
        />
      </>
    </>
  );
};
