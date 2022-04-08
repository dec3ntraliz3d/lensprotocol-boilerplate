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

export interface IPublication {
  id: string;
  profile: IProfile;
  stats: IMetadataStats;
  metadata: IMetadata;
  createdAt: string;
  collectModule: ICollectModule;
}

export interface IMetadataStats {
  totalAmountOfComments?: number;
  totalAmountOfMirrors?: number;
  totalAmountOfCollects?: number;
}

export interface IMetadata {
  name?: string;
  description?: string;
  content?: string;
}

export interface ICollectModule {
  __typename: string;
  type: string;
}
