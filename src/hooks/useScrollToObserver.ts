import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const useScrollToObserver = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [viewRef, inView] = useInView();

  useEffect(() => {
    if (!!scrollRef.current && inView) {
      scrollRef.current.scrollIntoView({
        block: 'start',
      });
    }
  }, [inView, scrollRef]);

  return {
    scrollRef,
    viewRef,
  };
};

export default useScrollToObserver;
