import { FC, useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { CommentOutlined, RetweetOutlined, DownloadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Mirror from './Mirror';
import { TTransactorFunc } from 'eth-components/functions';
export interface PublicationProps {
  id: string;
  profileId: string;
  handle: string;
  pfp?: string;
  name?: string;
  content?: string;
  totalAmountOfComments?: number;
  totalAmountOfMirrors?: number;
  totalAmountOfCollects?: number;
  tx: TTransactorFunc | undefined;
}

const Publication: FC<PublicationProps> = (props) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { currentTheme } = useThemeSwitcher();
  return (
    <div className="flex space-x-1 h-px-400 shadow-sm rounded-md my-3 py-2">
      <div className="w-1/6 flex items-start justify-end">
        <Link to={`/profile/${props.profileId}`}>
          <img src={props?.pfp} alt="avatar" className="shadow rounded-full w-12 h-12 align-middle border-none" />
        </Link>
      </div>
      <div className=" w-5/6 pr-5">
        <div className="text-left pl-3">
          <p>
            <span className="font-bold">{props.name}</span>
            <span className="font-light">{'@' + props.handle}</span>
          </p>
        </div>
        <div className={`rounded-md ${currentTheme == 'dark' ? 'text-gray-200' : 'text-gray-800 bg-green-50'} `}>
          <p className="text-left">
            {showMore ? props.content : props.content?.substring(0, 250)}

            {props.content && props.content.length > 250 && (
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
          <Link to={`/publication/${props.id}`}>
            <button className="flex space-x-1 justify-center items-center ">
              <CommentOutlined style={{ color: '#43A047', fontSize: 24 }} />
              <span>{props.totalAmountOfComments}</span>
            </button>
          </Link>
          <Mirror publicationId={props.id} totalAmountOfMirrors={props.totalAmountOfMirrors} tx={props.tx} />

          {/* <button className="flex space-x-1 justify-center items-center">
            <RetweetOutlined style={{ color: '#43A047', fontSize: 24 }} />
            <span>{props.totalAmountOfMirrors}</span>
          </button> */}
          <button className="flex space-x-1 justify-center items-center">
            <DownloadOutlined style={{ color: '#43A047', fontSize: 24 }} />
            <span>{props.totalAmountOfComments}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publication;
