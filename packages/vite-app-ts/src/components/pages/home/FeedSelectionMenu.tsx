import { FC, useState } from 'react';

interface Props {
  buttonLabels: string[];
  updateSortCriteria(criteria: string): void;
}

const sortCriterias = ['TOP_COMMENTED', 'LATEST', 'TOP_COLLECTED'];

const FeedSelectionMenu: FC<Props> = ({ buttonLabels, updateSortCriteria }) => {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (id: number) => {
    setClickedId(id);
    updateSortCriteria(sortCriterias[id]);
  };

  return (
    <div className="flex justify-center space-x-1">
      {buttonLabels.map((buttonLabel, i) => (
        <button
          key={i}
          name={buttonLabel}
          onClick={() => handleClick(i)}
          className={`border px-2 py-1 rounded-md ${i == clickedId ? 'border-1 border-green-400' : ''}`}>
          {buttonLabel}
        </button>
      ))}
    </div>
  );
};

export default FeedSelectionMenu;
