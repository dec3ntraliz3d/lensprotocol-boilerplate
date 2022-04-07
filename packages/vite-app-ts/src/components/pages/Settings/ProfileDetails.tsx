import { FC } from 'react';
import { formatImage } from '../../common/helpful_functions/formatImage';
import { IProfile } from '../../common/interfaces/interfaces';

interface Props {
  profile: IProfile | undefined;
}

export const ProfileDetails: FC<Props> = ({ profile }) => {
  return (
    <div className="col-span-1 py-3">
      <div className="flex flex-col items-center md:items-start ">
        <img
          src={formatImage(profile?.picture?.original?.url) ?? 'assets/emptyPfp.png'}
          className="shadow rounded-full w-20 h-20 align-middle border-none"
        />
        <p className="text-center md:text-left mt-3">
          <span className="font-bold">{profile?.name}</span>
          <span className="font-light">@{profile?.handle}</span>
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
          <ul>{profile?.stats.totalFollowers} Follower</ul>
          <ul>{profile?.stats.totalFollowing} Following </ul>
        </li>
      </div>
    </div>
  );
};
