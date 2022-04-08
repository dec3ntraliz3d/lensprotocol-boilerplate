import { FC, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROFILES, ProfileQueryRequest } from '../../common/queries/profiles';
import { Spin } from 'antd';
import { formatImage } from '../../common/helpful_functions/formatImage';
import { useParams } from 'react-router-dom';
import { GET_PUBLICATIONS } from '../../common/queries/publications';
import Publication from '../home/Publication';
import { IProfile } from '../../common/interfaces/interfaces';
import Follow from './Follow';
import { TTransactorFunc } from 'eth-components/functions';

interface Props {
  tx: TTransactorFunc | undefined;
}

const Profile: FC<Props> = ({ tx }) => {
  const params: any = useParams();

  const { data, error, loading } = useQuery(GET_PROFILES, {
    variables: { request: { profileIds: [params.profileId] } },
  });
  const publications = useQuery(GET_PUBLICATIONS, {
    variables: {
      request: {
        profileId: params.profileId,
        publicationTypes: ['POST', 'COMMENT', 'MIRROR'],
      },
    },
    pollInterval: 2000,
  });

  if (loading || publications.loading) return <Spin />;

  if (error || publications?.error) {
    console.log(error);
    console.log(publications.error);
    return <div>Error Fetching data ! Check console.log</div>;
  }

  const profile: IProfile = data.profiles.items[0];
  return (
    <div className="m-auto pt-5 px-3 md:w-3/4 pb-20 ">
      <div className="m-auto pb-5">
        <img
          src={formatImage(profile.coverPicture?.original?.url) ?? '../assets/default-cover-image.jpg'}
          alt="cover image"
          className="max-w-full h-36 w-full rounded-lg"
        />
      </div>
      <div className="flex-col pl-4 -mt-14 border-b-2">
        <img
          src={formatImage(profile.picture?.original?.url) ?? '../assets/emptyPfp.png'}
          className="shadow rounded-full w-20 h-20 align-middle border-none"
        />
        <p className="text-left mt-3">
          <span className="font-bold">{profile.name} </span>
          <span className="font-light"> @{profile?.handle}</span>
          <br />
          {profile?.bio}
          <br />
          Twitter: {profile?.twitterUrl}
          <br />
          Website: {profile?.website}
          <br />
          Location: {profile?.location}
        </p>
        <li className="list-none flex space-x-2">
          <ul>{profile?.stats?.totalFollowers} Follower</ul>
          <ul>{profile?.stats?.totalFollowing} Following </ul>
        </li>
        <div className="flex flex-col items-start mb-3">
          {/* <p>Follow Module:{JSON.stringify(profile.followModule)}</p> */}
          <p> {profile.followModule ?? `Anyone can follow @${profile.handle}`}</p>
          <Follow profileId={profile.id} followModule={profile?.followModule} tx={tx} />
        </div>
      </div>

      <div>
        {publications.data?.publications?.items?.map((item: any) => (
          <Publication
            key={item.id}
            id={item.id}
            profileId={item.profile.id}
            handle={item.profile.handle}
            pfp={formatImage(item.profile?.picture?.original?.url) ?? '../assets/emptyPfp.png'}
            name={item.profile.name}
            content={item.metadata.content}
            totalAmountOfComments={item.stats.totalAmountOfComments}
            totalAmountOfMirrors={item.stats.totalAmountOfMirrors}
            totalAmountOfCollects={item.stats.totalAmountOfCollects}
            tx={tx}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
