import { useEffect, useState } from 'react';
import ASelect from '../atoms/a-select';
import MCard from '../molecules/m-card';
import ArrowIcon from '../../public/svg/arrow.svg';

type Option = {
  key: string;
  value: string;
};

type OCardsProps = {
  className?: string;
  cards?: any[];
  totalCount?: number;
  totalLabel?: string;
  sortByLabel?: string;
  sortOptions: Option[];
};

export default function OCards({
  className,
  cards,
  totalCount,
  totalLabel,
  sortByLabel,
  sortOptions,
}: OCardsProps) {
  const [selectedKey, setSelectedKey] = useState('');

  const sort = (a: any, b: any) => {
    if (!selectedKey || selectedKey === '') {
      return 1;
    }
    if (
      new Date(a[selectedKey]) instanceof Date
      && !Number.isNaN(new Date(a[selectedKey]).valueOf())
    ) {
      return (
        new Date(b[selectedKey]).getTime() - new Date(a[selectedKey]).getTime()
      );
    }
    return a[selectedKey].localeCompare(b[selectedKey]);
  };

  useEffect(() => {
    cards?.sort(sort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedKey]);

  const onChange = (selectedOption: any) => {
    setSelectedKey(selectedOption.key);
  };

  return (
    <section className={`o-cards ${className ?? ''}`}>
      <div className="container mx-auto">
        <div className="px-[88px]">
          <div className="mb-5 flex flex-col sm:flex-row sm:items-center gap-y-5 justify-between">
            <div className="flex items-center">
              <div className="mr-2 text-xs font-medium uppercase leading-5 text-black-40">
                {totalLabel}
              </div>
              <div className="text font-bold leading-5 text-black-100">
                {totalCount}
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4 text-xs font-medium leading-[18px] text-black-100">
                {sortByLabel}
              </div>
              <ASelect
                className="flex-1"
                svg={ArrowIcon}
                options={sortOptions}
                defautKey={0}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="flex justify-center flex-col flex-wrap md:flex-row gap-[23px] gap-y-12 pt-5">
            {cards
              ?.sort(sort)
              .map((card) => (
                <MCard
                  id={card.id}
                  key={card.id}
                  no={card.no}
                  count={card.count}
                  image={card.image}
                  name={card.name}
                  collectionName={card.collectionName}
                  properties={card.properties}
                  poweredBy={card.poweredBy}
                  isOnSwap={card.isOnSwap}
                  isOnSale={card.isOnSale}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
