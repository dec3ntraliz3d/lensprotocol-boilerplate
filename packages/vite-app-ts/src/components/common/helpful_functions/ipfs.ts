import { create } from 'ipfs-http-client';
import { v4 as uuidv4 } from 'uuid';

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
});

interface Metadata {
  content: string;
  description?: string;
  external_url?: string;
  image?: string;
  imageMimeType?: string;
  name?: string;
  media?: [Media];
}

interface Media {
  item: string;
  type: string;
}

export const uploadIpfs = async (metadata: Metadata) => {
  const result = await client.add(
    JSON.stringify({
      version: '1.0.0',
      metadata_id: uuidv4(),
      description: metadata.description,
      content: metadata.content,
      external_url: metadata.external_url,
      image: metadata.image,
      imageMimeType: metadata.imageMimeType,
      name: 'Name',
      attributes: [],
      media: [
        // {
        //   item: 'https://scx2.b-cdn.net/gfx/news/hires/2018/lion.jpg',
        //   // item: 'https://assets-global.website-files.com/5c38aa850637d1e7198ea850/5f4e173f16b537984687e39e_AAVE%20ARTICLE%20website%20main%201600x800.png',
        //   type: 'image/jpeg',
        // },
      ],
      appId: 'buidlguidl',
    })
  );

  console.log('upload result ipfs', result);
  return result;
};
