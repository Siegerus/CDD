import { useState } from 'react';

type SortingListProps = {
  sortinbyScale: (property: 'price' | 'rating', direction: boolean) => void;
  popularFilterHandle: () => void;
};

enum OptionState {
  Popular = 'Popular',
  LowToHeight = 'Price: low to high',
  HightToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

const SortingList = ({
  sortinbyScale,
  popularFilterHandle,
}: SortingListProps): JSX.Element => {
  
  const [optionTitle, setOptionTitle] = useState(OptionState.Popular);

  const setOptionTitleHandle = (optionState: OptionState) => {
    setOptionTitle(optionState);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {optionTitle}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li
          className="places__option places__option--active"
          onClick={() => {
            popularFilterHandle();
            setOptionTitleHandle(OptionState.Popular);
          }}
          tabIndex={0}
        >
          Popular
        </li>
        <li
          className="places__option"
          onClick={() => {
            sortinbyScale('price', true);
            setOptionTitleHandle(OptionState.LowToHeight);
          }}
          tabIndex={0}
        >
          Price: low to high
        </li>
        <li
          className="places__option"
          onClick={() => {
            sortinbyScale('price', false);
            setOptionTitleHandle(OptionState.HightToLow);
          }}
          tabIndex={0}
        >
          Price: high to low
        </li>
        <li
          className="places__option"
          onClick={() => {
            sortinbyScale('rating', false);
            setOptionTitleHandle(OptionState.TopRated);
          }}
          tabIndex={0}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
};

export default SortingList;
