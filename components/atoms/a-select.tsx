import { useEffect, useState } from 'react';
import ADropdown from './a-dropdown';

type Option = {
  key: string;
  value: string;
};

type ASelectProps = {
  className?: string;
  svg?: any;
  options: Option[];
  defautKey: number;
  onChange: (option: Option) => void;
};

export default function ASelect({
  className,
  svg,
  options,
  defautKey,
  onChange,
}: ASelectProps) {
  const [selectedOption, setSelectedOption] = useState<Option>();

  useEffect(() => {
    setSelectedOption(options[defautKey]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defautKey]);

  const handleClick = (option: Option) => {
    if (onChange instanceof Function) {
      onChange(option);
    }
  };

  const Svg = svg;
  return (
    <ADropdown
      options={options}
      onChange={handleClick}
      className={`a-dropdown ${className ?? ''}`}
    >
      <button
        type="button"
        className="flex w-full items-center rounded-md border border-black-20 bg-white px-3 py-2"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <div className="mr-5 text-sm font-medium text-black-100 ">
          {selectedOption?.value}
        </div>
        <Svg className="h-6 w-6 fill-black-100" />
      </button>
    </ADropdown>
  );
}
