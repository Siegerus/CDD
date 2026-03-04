import { useEffect, useState } from 'react';

import { OPTION_ITEMS } from '../constants';
import { SortField, OptionItem } from '../types/types';

type SortingListProps = {
  onSortinbyScaleHandle: ({
    sortField: field,
    reverse: isReverse,
  }: SortField) => void;
};

const SortingList = ({
  onSortinbyScaleHandle,
}: SortingListProps): JSX.Element => {
  const [options, setOptions] = useState<OptionItem[]>(OPTION_ITEMS);
  const [isListVisible, setIsListVisible] = useState<boolean>(false);

  const getOptionTitle = () => {
    return options.find((option: OptionItem) => option.isActive)?.title;
  };

  const optionClickHandle = (
    id: string,
    { sortField: field, reverse: isReverse, initial: isInitial }: SortField
  ) => {
    setOptions(
      OPTION_ITEMS.map((item: OptionItem) => {
        return id === item.id
          ? { ...item, isActive: true }
          : { ...item, isActive: false };
      })
    );
    setIsListVisible(false);
    onSortinbyScaleHandle({
      sortField: field,
      reverse: isReverse,
      initial: isInitial,
    });
  };

  const sortTypeClickHandle = () => {
    setIsListVisible((prevState) => !prevState);
  };

  useEffect(() => {
    let isComponentMounted = true;

    function setVisibility(e: MouseEvent) {
      if ((e.target as HTMLElement).closest('.places__sorting-type')) return;
      if (isListVisible) setIsListVisible(false);
    }
    if (isComponentMounted) document.addEventListener('click', setVisibility);

    return () => {
      document.removeEventListener('click', setVisibility);
      isComponentMounted = false;
    };
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
                    sortField: option.sortField,
                    reverse: option.reverse,
                    initial: option.initial,
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
