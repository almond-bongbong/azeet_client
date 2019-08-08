import { useState, useRef, useEffect, useCallback } from 'react';
import throttle from 'lodash/throttle';

const useDetectScrollEnd = (endPercent = 0.9) => {
  const scrollEnded = useRef(false);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const handleScroll = useCallback(throttle(() => {
    const { scrollY } = window;
    const { clientHeight, scrollHeight } = document.documentElement;
    const scrollPercent = (scrollY + clientHeight) / scrollHeight;

    if (scrollPercent >= endPercent && !scrollEnded.current) {
      scrollEnded.current = true;
      setIsScrollEnd(true);
    }
    if (scrollPercent < endPercent && scrollEnded.current) {
      scrollEnded.current = false;
      setIsScrollEnd(false);
    }
  }, 500), [endPercent]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return isScrollEnd;
};

export default useDetectScrollEnd;
