import { useState } from 'react';

type AToggleProps = {
  id: string;
  isActive: boolean;
  className?: string;
  onChange?: (id: string, isActive: boolean) => void;
};

export default function AToggle({
  id,
  isActive,
  className,
  onChange,
}: AToggleProps) {
  const [enabled, setEnabled] = useState(isActive);

  const handleClick = () => {
    if (onChange instanceof Function) {
      onChange(id, !isActive);
    }
    setEnabled((prev) => !prev);
  };

  return (
    <div
      onClick={() => handleClick()}
      aria-hidden="true"
      className={`a-svg ${
        className ?? ''
      } pointer-events-auto h-6 w-12 cursor-pointer rounded-full p-1 transition duration-200 ease-in-out ${
        enabled
          ? 'bg-gradient-to-b from-pink-400 to-rose-400'
          : 'bg-black-20'
      }`}
    >
      <div
        className={`h-[15px] w-[15px] rounded-full bg-white transition duration-200 ease-in-out ${
          enabled ? 'translate-x-6' : 'bg-black-20'
        }`}
      />
    </div>
  );
}
