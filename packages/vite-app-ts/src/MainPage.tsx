import React, { FC, useEffect, useState, useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '~~/styles/main-page.css';
import { useEthersAdaptorFromProviderOrSigners } from 'eth-hooks';
import { useEthersContext } from 'eth-hooks/context';
import { useDexEthPrice } from 'eth-hooks/dapps';
import { asEthersAdaptor } from 'eth-hooks/functions';
import { MainPageMenu, MainPageContracts, MainPageFooter, MainPageHeader } from './components/main';
import { useBurnerFallback } from '~~/components/main/hooks/useBurnerFallback';
import { useScaffoldProviders as useScaffoldAppProviders } from '~~/components/main/hooks/useScaffoldAppProviders';
import { Lens } from './components/pages/home/Lens';
import { BURNER_FALLBACK_ENABLED, MAINNET_PROVIDER } from '~~/config/appConfig';
import { useAppContracts, useConnectAppContracts, useLoadAppContracts } from '~~/config/contractContext';
import { NETWORKS } from '~~/models/constants/networks';
import ProfileSettings from './components/pages/settings/ProfileSettings';
import Profile from './components/pages/profile/Profile';
import { useLazyQuery } from '@apollo/client';
import { GET_PROFILES } from './components/common/queries/profiles';
import { IProfile } from './components/common/interfaces/interfaces';
import { useLocalStorage } from './components/main/hooks/useLocalStorage';
import Comment from './components/pages/comment/Comment';
import { EthComponentsSettingsContext } from 'eth-components/models';
import { useGasPrice } from 'eth-hooks';
import { transactor } from 'eth-components/functions';

export const Main: FC = () => {
  /* Scaffold Eth boiler-plate code*/
  const scaffoldAppProviders = useScaffoldAppProviders();
  const ethersContext = useEthersContext();
  useLoadAppContracts();
  const [mainnetAdaptor] = useEthersAdaptorFromProviderOrSigners(MAINNET_PROVIDER);
  useConnectAppContracts(mainnetAdaptor);
  useConnectAppContracts(asEthersAdaptor(ethersContext));
  const [ethPrice] = useDexEthPrice(scaffoldAppProviders.mainnetAdaptor?.provider, scaffoldAppProviders.targetNetwork);

  // Lens protocol code

  const ethComponentsSettings = useContext(EthComponentsSettingsContext);
  const [gasPrice] = useGasPrice(ethersContext.chainId, 'fast');
  const tx = transactor(ethComponentsSettings, ethersContext?.signer, gasPrice);

  const [profile, setProfile] = useLocalStorage<IProfile | undefined>('profile', undefined);
  const [isSignedIn, setIsSignedIn] = useLocalStorage<boolean>('isSignedIn', false);
  const [getProfile, { loading, data, error, refetch }] = useLazyQuery(GET_PROFILES);
  const updateProfile = async () => {
    const result = await getProfile({ variables: { request: { ownedBy: [ethersContext?.account] } } });
    setProfile(result?.data?.profiles?.items[0]);
  };

  useEffect(() => {
    !ethersContext.active && setIsSignedIn(false);
  }, [ethersContext?.account]);

  const [route, setRoute] = useState<string>('');
  useEffect(() => {
    setRoute(window.location.pathname);
  }, [setRoute]);
  const updateSignInStatus = (status: boolean) => {
    setIsSignedIn(status);
  };

  return (
    <div className="App">
      <MainPageHeader scaffoldAppProviders={scaffoldAppProviders} price={ethPrice} />

      {/* Routes should be added between the <Switch> </Switch> as seen below */}
      <BrowserRouter>
        <MainPageMenu route={route} setRoute={setRoute} />
        <Switch>
          <Route exact path="/">
            <Lens
              updateProfile={updateProfile}
              profile={profile}
              isSignedIn={isSignedIn}
              updateSignInStatus={updateSignInStatus}
              tx={tx}
            />
          </Route>
          <Route path="/settings">
            <ProfileSettings profile={profile} updateProfile={updateProfile} isSignedIn={isSignedIn} tx={tx} />
          </Route>
          <Route path="/contracts">
            <MainPageContracts scaffoldAppProviders={scaffoldAppProviders} />
          </Route>
          <Route exact path="/profile/:profileId">
            <Profile tx={tx} />
          </Route>
          <Route exact path="/publication/:id">
            <Comment profile={profile} updateProfile={updateProfile} isSignedIn={isSignedIn} tx={tx} />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <MainPageFooter scaffoldAppProviders={scaffoldAppProviders} price={ethPrice} /> */}
    </div>
  );
};
