import { useEffect } from 'react';

const useOutsideAlerter = (ref: any, onOutsideClick: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        ref.current
        && !ref.current.contains(event.target)
        && onOutsideClick instanceof Function
      ) {
        onOutsideClick();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
};

export default useOutsideAlerter;
