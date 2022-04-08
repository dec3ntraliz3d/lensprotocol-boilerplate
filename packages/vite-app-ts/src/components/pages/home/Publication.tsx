import { FC, useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { CommentOutlined, RetweetOutlined, DownloadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Mirror from './Mirror';
import { TTransactorFunc } from 'eth-components/functions';
import { IPublication } from '~~/components/common/interfaces/interfaces';
import { formatImage } from '~~/components/common/helpful_functions/formatImage';
import { formatSecondsToDayHourMinute } from '~~/components/common/helpful_functions/formatSecondsToDayHourMinute';
export interface PublicationProps {
  publication: IPublication;
  tx: TTransactorFunc | undefined;
}

const Publication: FC<PublicationProps> = ({ publication, tx }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { currentTheme } = useThemeSwitcher();
  return (
    <div className="flex space-x-1 h-px-400 shadow-sm rounded-md my-3 py-2">
      <div className="w-1/6 flex items-start justify-end">
        <Link to={`/profile/${publication.profile.id}`}>
          <img
            src={formatImage(publication.profile.picture?.original?.url) ?? 'assets/emptyPfp.png'}
            alt="avatar"
            className="shadow rounded-full w-12 h-12 align-middle border-none"
          />
        </Link>
      </div>
      <div className=" w-5/6 pr-5">
        {/* <div className="text-left pl-3"> */}
        <div className="flex justify-between pt-2">
          <p className="pl-1">
            <span className="font-bold">{publication.profile?.name}</span>
            <span className="font-light">{'@' + publication.profile.handle}</span>
          </p>
          <p>{formatSecondsToDayHourMinute(Date.now() - Date.parse(publication.createdAt))}</p>
        </div>

        <div className={`rounded-md ${currentTheme == 'dark' ? 'text-gray-200' : 'text-gray-800 bg-green-50'} `}>
          <p className="text-left">
            {showMore ? publication.metadata.content : publication.metadata.content?.substring(0, 250)}

            {publication.metadata.content && publication.metadata.content?.length > 250 && (
              <button
                className={`ml-2 rounded px-2  
                                ${
                                  currentTheme == 'dark'
                                    ? 'bg-blue-500 hover:bg-blue-700 '
                                    : 'bg-blue-200 hover:bg-blue-300'
                                }`}
                onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Show Less' : 'Show more'}
              </button>
            )}
          </p>
        </div>
        <div className="flex justify-center space-x-10 md:space-x-14 mt-2">
          <Link to={`/publication/${publication.id}`}>
            <button className="flex space-x-1 justify-center items-center ">
              <CommentOutlined style={{ color: '#43A047', fontSize: 24 }} />
              <span>{publication.stats.totalAmountOfComments}</span>
            </button>
          </Link>
          <Mirror
            publicationId={publication.id}
            totalAmountOfMirrors={publication.stats.totalAmountOfMirrors}
            tx={tx}
          />
          <button className="flex space-x-1 justify-center items-center">
            <DownloadOutlined style={{ color: '#43A047', fontSize: 24 }} />
            <span>{publication.stats.totalAmountOfComments}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publication;
