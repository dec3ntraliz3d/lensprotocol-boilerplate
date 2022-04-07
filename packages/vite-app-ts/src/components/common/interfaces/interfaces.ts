export interface IProfile {
  id: string;
  handle: string;
  name: string;
  bio: string;
  location: string;
  website: string;
  twitterUrl: string;
  picture: { original: { url: string } };
  coverPicture: { original: { url: string } };
  stats: {
    totalFollowers: number;
    totalFollowing: number;
    totalComments: number;
  };
  followModule: any;
}
