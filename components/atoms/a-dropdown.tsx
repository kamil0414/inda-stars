import useOutsideAlerter from 'components/utils/hooks';
import { ReactNode, useRef, useState } from 'react';

type Option = {
  key: string;
  value: string;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
};

type ASelectProps = {
  className?: string;
  options: Option[];
  children: ReactNode;
  onChange?: (option: Option) => void;
};

export default function ADropdown({
  className,
  options,
  children,
  onChange,
}: ASelectProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>();
  const wrapperRef = useRef(null);

  const handleClick = (option: Option) => {
    if (selectedOption?.key !== option.key) {
      setSelectedOption(option);

      if (onChange instanceof Function) {
        onChange(option);
      }
    }
    if (!option.disabled && option.children == null) {
      setIsVisible(false);
    }
  };

  const onOutsideClick = () => {
    setIsVisible(false);
  };

  useOutsideAlerter(wrapperRef, onOutsideClick);

  return (
    <div
      ref={wrapperRef}
      className={`relative inline-block text-left ${className ?? ''}`}
    >
      <div aria-hidden="true" onClick={() => setIsVisible((prevState) => !prevState)}>
        {children}
      </div>
      <div
        className={`focus:outline-none' absolute left-0 sm:left-auto right-0 z-10 mt-2 flex min-w-[160px]  flex-col rounded bg-white shadow-xl ${
          !isVisible && 'hidden'
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        {options.map((option) => (
          <div
            aria-hidden="true"
            onClick={() => handleClick(option)}
            className={`flex items-center justify-between whitespace-nowrap px-4 py-3 text-sm ${
              option.disabled
                ? 'text-black-40'
                : 'cursor-pointer text-black-100 hover:bg-black-10'
            } ${option.className ?? ''}`}
            role="menuitem"
            tabIndex={-1}
          >
            {option.value}
            {option.children}
          </div>
        ))}
      </div>
    </div>
  );
}
