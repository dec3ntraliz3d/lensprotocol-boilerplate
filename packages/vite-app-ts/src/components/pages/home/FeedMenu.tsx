import { FC } from 'react';

const FeedMenu: FC = () => {
  return (
    <div className="flex justify-center space-x-2">
      <button>Top Commented</button>
      <button></button>
      <button>Latest</button>
      <button>Top Collected</button>
      <button>Following</button>
    </div>
  );
};

export default FeedMenu;
