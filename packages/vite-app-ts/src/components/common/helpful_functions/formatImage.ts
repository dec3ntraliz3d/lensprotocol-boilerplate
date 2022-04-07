export const formatImage = (url: string | undefined): string | null => {
  if (!url) return null;

  if (isIpfsUrl(url)) return formatIpfsUrl(url);
  return url;
};

const isIpfsUrl = (uri: string): boolean => {
  return uri.startsWith('ipfs'.toLowerCase());
};

const formatIpfsUrl = (uri: string): string => {
  return uri.replace('ipfs://', 'https://ipfs.io/ipfs/');
};

// export interface Picture {
//     nftImage?: NFTImage;
//     mediaSet?: MediaSet;
// }

// export interface NFTImage {

//     contractAddres?: string;
//     tokenId?: string | number;
//     uri?: string;
//     verified?: boolean;
// }

// export interface MediaSet {
//     original?: Image
// }

// export interface Image {
//     url?: string;
//     mimeType?: string;
// }
