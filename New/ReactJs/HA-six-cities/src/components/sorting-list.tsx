import { useEffect, useState } from 'react';

import { OPTION_ITEMS } from '../constants';
import { SortField, OptionItem } from '../types';

type SortingListProps = {
  onSortinbyScaleHandle: ({
    field: field,
    reverse: isReverse,
  }: SortField) => void;
};

const SortingList = ({
  onSortinbyScaleHandle,
}: SortingListProps): JSX.Element => {
  const [options, setOptions] = useState(OPTION_ITEMS);
  const [isListVisible, setIsListVisible] = useState(false);

  const getOptionTitle = () => {
    return options.find((option: OptionItem) => option.isActive)?.title;
  };

  const optionClickHandle = (
    id: string,
    { field: field, reverse: isReverse }: SortField
  ) => {
    setOptions(
      OPTION_ITEMS.map((item: OptionItem) => {
        return id === item.id
          ? { ...item, isActive: true }
          : { ...item, isActive: false };
      })
    );
    setIsListVisible(false);
    onSortinbyScaleHandle({ field: field, reverse: isReverse });
  };

  const sortTypeClickHandle = () => {
    setIsListVisible((prevState) => !prevState);
  };

  useEffect(() => {
    function setVisibility(e: MouseEvent) {
      if ((e.target as HTMLElement).closest('.places__sorting-type')) return;
      if (isListVisible) setIsListVisible(false);
    }
    document.addEventListener('click', setVisibility);

    return () => document.removeEventListener('click', setVisibility);
  }, [isListVisible]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={sortTypeClickHandle}>
        {`${getOptionTitle()}`}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isListVisible && (
        <ul className="places__options places__options--custom places__options--opened">
          {options.map((option) => {
            return (
              <li
                className={
                  option.isActive
                    ? 'places__option places__option--active'
                    : 'places__option'
                }
                onClick={() =>
                  optionClickHandle(option.id, {
                    field: option.sortField,
                    reverse: option.reverse,
                  })
                }
                key={option.id}
                tabIndex={0}>
                {option.title}
              </li>
            );
          })}
        </ul>
      )}
    </form>
  );
};

export default SortingList;
