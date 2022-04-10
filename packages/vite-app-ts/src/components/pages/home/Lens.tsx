/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

import { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import Publication from './Publication';
import { EXPLORE_PUBLICATIONS } from '../../common/queries/publications';
import CreateProfile from './CreateProfile/CreateProfile';
import SignIn from './SignIn';
import Post from './Post';
import { TTransactorFunc } from 'eth-components/functions';
import { IProfile, IPublication } from '../../common/interfaces/interfaces';
import { Button, Spin } from 'antd';
import { useInView } from 'react-cool-inview';
import FeedMenu from './FeedMenu';
interface Props {
  profile: IProfile | undefined;
  updateProfile(): any;
  isSignedIn: boolean;
  updateSignInStatus(status: boolean): any;
  tx: TTransactorFunc | undefined;
}

export const Lens: FC<Props> = ({ profile, updateProfile, isSignedIn, updateSignInStatus, tx }) => {
  const [nextCursor, setNextCursor] = useState();
  const [publications, setPublications] = useState<IPublication[]>([]);
  const { loading, error, data, fetchMore } = useQuery(EXPLORE_PUBLICATIONS, {
    variables: {
      request: {
        sortCriteria: 'TOP_COMMENTED',
        limit: 10,
        noRandomize: true,
      },
    },
    onCompleted: (data) => {
      setPublications(data.explorePublications.items);
      setNextCursor(data.explorePublications.pageInfo.next);
    },
  });

  // Took hints from https://github.com/bigint/lenster
  // Give those guys a shoutout
  const { observe } = useInView({
    threshold: 1,
    onEnter: async () => {
      const result: any = await fetchMore({
        variables: {
          request: {
            sortCriteria: 'TOP_COMMENTED',
            limit: 10,
            cursor: nextCursor,
          },
        },
      });
      console.log(result);
      console.log(nextCursor);
      if (result.data) {
        setNextCursor(result.data.explorePublications.pageInfo.next);
        setPublications([...publications, ...result.data.explorePublications.items]);
      }
    },
  });

  if (loading) return <Spin size="large" />;
  if (error) return <div className="mt-10"> Error loading data </div>;

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
      {/* <FeedMenu /> */}

      {publications?.map((item: IPublication) => (
        <Publication publication={item} tx={tx} />
      ))}
      {nextCursor && (
        <span ref={observe} className="flex justify-center p-5">
          <Spin size="small" />
        </span>
      )}
    </div>
  );
};
