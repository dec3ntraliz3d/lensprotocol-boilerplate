import { FC } from 'react';

interface Props {
  updateSortCriteria(sortCriteria: string): void;
}

const FeedMenu: FC<Props> = ({ updateSortCriteria }) => {
  return (
    <div className="flex justify-between m-auto space-x-1 " role="group">
      <button
        className="active:bg-blue-400 focus:bg-blue-400 focus:text-white border px-2 py-1 rounded-md"
        // autoFocus={true}
        onClick={() => updateSortCriteria('TOP_COMMENTED')}>
        Top Commented
      </button>
      <button
        className="active:bg-blue-400 focus:bg-blue-400 focus:text-white border px-2 py-1 rounded-md "
        onClick={() => updateSortCriteria('LATEST')}>
        Latest
      </button>
      <button
        className="active:bg-blue-400 focus:bg-blue-400 focus:text-white border px-2 py-1 rounded-md "
        onClick={() => updateSortCriteria('TOP_COLLECTED')}>
        Top Collected
      </button>
      {/* To do */}
      {/* <button className="active:bg-blue-400 focus:bg-blue-400 focus:text-white border px-2 py-1 rounded-md ">
        Following
      </button> */}
    </div>
  );
};

export default FeedMenu;
