import { FixTypeLater } from 'types';

export const debounce = (func: FixTypeLater, wait: number, immediate = false) => {
  let timeout: FixTypeLater;
  return (...args: FixTypeLater) => {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};
