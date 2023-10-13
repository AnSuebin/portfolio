'use client';

import { useState, useEffect, FC } from 'react';

interface Props {
  styles: string;
  typingText: string;
  intervalTime: number;
}
const TypingText: FC<Props> = ({ styles, typingText, intervalTime }) => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCount((prevCount) => {
        let nextCount = prevCount + 1;
        let result = typingText.slice(0, nextCount);

        if (nextCount > typingText.length) {
          nextCount = 0;
          clearInterval(typingInterval);
        }

        setText(result);
        return nextCount;
      });
    }, intervalTime);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return <div className={`${styles} w-fit`}>{text}</div>;
};

export default TypingText;
