import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FC } from 'react';
import { IProfile } from '../../common/interfaces/interfaces';

export interface IFormInput {
  profileId: string;
  handle: string;
  name: string;
  location: string;
  website: string;
  twitterHandle: string;
  bio: string;
  coverPicture: string;
  profilePicture: string;
}

interface Props {
  profile: IProfile | undefined;
  onSubmit: SubmitHandler<IFormInput>;
  isUpdating: boolean;
}

const UpdateForm: FC<Props> = ({ profile, onSubmit, isUpdating }) => {
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      profileId: profile?.id,
      handle: profile?.handle,
      name: profile?.name,
      location: profile?.location,
      website: profile?.website,
      twitterHandle: profile?.twitterUrl?.replace('https://twitter.com/', ''),
      bio: profile?.bio,
      profilePicture: profile?.picture?.original.url,
      coverPicture: profile?.coverPicture?.original.url,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 m-4 pb-32">
      <label className="text-left font-bold">Profile Id</label>
      <input {...register('profileId')} disabled className="border-2 rounded-md p-2 shadow-sm" />
      <label className="text-left font-bold">Handle</label>
      <input {...register('handle')} disabled className="border-2 rounded-md p-2 shadow-sm" />
      <label className="text-left font-bold">Name</label>
      <input {...register('name')} className="border-2 rounded-md p-2 shadow-sm" />
      <label className="text-left font-bold">Location</label>
      <input {...register('location')} className="border-2 rounded-md p-2 shadow-sm" />
      <label className="text-left font-bold">Website</label>
      <input {...register('website')} className="border-2 rounded-md p-2 shadow-sm" />
      <label className="text-left font-bold">Twitter Handle</label>
      <input {...register('twitterHandle')} className="border-2 rounded-md p-2 shadow-sm" />
      <label className="text-left font-bold">Bio</label>
      <input {...register('bio')} className="border-2 rounded-md p-2 shadow-sm" />
      <label className="text-left font-bold">Profile Pic Url</label>
      <input {...register('profilePicture')} className="border-2 rounded-md p-2 shadow-sm" />
      <label className="text-left font-bold">Cover Pic Url</label>
      <input {...register('coverPicture')} className="border-2 rounded-md p-2 shadow-sm" />

      <input
        type="submit"
        value="Update"
        disabled={isUpdating}
        className="border shadow-md rounded-md px-5 py-2 w-24 m-auto bg-blue-500 hover:bg-blue-400 text-white text-md font-semibold"
      />
    </form>
  );
};

export default UpdateForm;
