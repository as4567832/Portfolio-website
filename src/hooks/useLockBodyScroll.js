import { useEffect } from 'react';

// Locks body scroll while `locked` is true (used by modals/lightboxes)
const useLockBodyScroll = (locked) => {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
};

export default useLockBodyScroll;
