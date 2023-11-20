import { ReactNode } from 'react';

type AButtonProps = {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

export default function AButton({
  className,
  children,
  onClick,
}: AButtonProps) {
  const handleClick = () => {
    if (onClick instanceof Function) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={`a-button flex rounded border border-black-10 px-1.5 py-1 ${
        className ?? ''
      }`}
      onClick={handleClick}
      tabIndex={0}
    >
      {children}
    </button>
  );
}
