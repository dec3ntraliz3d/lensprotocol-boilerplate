/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

import { FC } from 'react';
import { useQuery } from '@apollo/client';
import Publication from './Publication';
import { EXPLORE_PUBLICATIONS } from '../../common/queries/publications';
import CreateProfile from './CreateProfile/CreateProfile';
import SignIn from './SignIn';
import Post from './Post';
import { TTransactorFunc } from 'eth-components/functions';
import { IProfile, IPublication } from '../../common/interfaces/interfaces';

interface Props {
  profile: IProfile | undefined;
  updateProfile(): any;
  isSignedIn: boolean;
  updateSignInStatus(status: boolean): any;
  tx: TTransactorFunc | undefined;
}

export const Lens: FC<Props> = ({ profile, updateProfile, isSignedIn, updateSignInStatus, tx }) => {
  const { loading, error, data } = useQuery(EXPLORE_PUBLICATIONS, {
    variables: {
      request: {
        sortCriteria: 'LATEST',
        limit: 20,
      },
    },
  });
  return (
    <div className="md:w-3/4 m-auto flex flex-col pt-12 space-y-3 pb-20">
      {isSignedIn ? (
        profile ? (
          <div>
            <Post profile={profile} tx={tx} />
          </div>
        ) : (
          <CreateProfile updateProfile={updateProfile} />
        )
      ) : (
        <SignIn updateSignInStatus={updateSignInStatus} updateProfile={updateProfile} />
      )}

      {data && data.explorePublications.items.map((item: IPublication) => <Publication publication={item} tx={tx} />)}
    </div>
  );
};
