/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

import { FC } from 'react';
import { useQuery } from '@apollo/client';
import Publication from './Publication';
import { EXPLORE_PUBLICATIONS } from '../../common/queries/publications';
import CreateProfile from './CreateProfile/CreateProfile';
import SignIn from './SignIn';
import Post from './Post';
import { formatImage } from '../../common/helpful_functions/formatImage';
import { TTransactorFunc } from 'eth-components/functions';
import { IProfile } from '../../common/interfaces/interfaces';

export const topCommentVariables = {
  request: {
    sortCriteria: 'LATEST',
    limit: 20,
  },
};

interface Props {
  profile: IProfile;
  updateProfile(): any;
  isSignedIn: boolean;
  updateSignInStatus(status: boolean): any;
  tx: TTransactorFunc | undefined;
}

export const Lens: FC<Props> = ({ profile, updateProfile, isSignedIn, updateSignInStatus, tx }) => {
  const { loading, error, data } = useQuery(EXPLORE_PUBLICATIONS, { variables: topCommentVariables });
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

      {data &&
        data.explorePublications.items.map((item: any) => (
          <Publication
            key={item.id}
            id={item.id}
            profileId={item.profile.id}
            handle={item.profile.handle}
            pfp={formatImage(item.profile.picture?.original?.url) ?? 'assets/emptyPfp.png'}
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
