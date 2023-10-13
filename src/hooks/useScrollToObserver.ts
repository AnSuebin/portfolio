import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const useScrollToObserver = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { ref: viewRef, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (!scrollRef) {
      return;
    }

    if (scrollRef.current && inView) {
      scrollRef.current.scrollIntoView({
        block: 'start',
      });
    }
  }, [inView, scrollRef]);

  return {
    scrollRef,
    viewRef,
    inView,
  };
};

export default useScrollToObserver;
