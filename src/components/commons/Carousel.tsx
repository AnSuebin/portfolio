'use client';

import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';

import { PortfolioIdType } from '@/apis/Home.type';

interface Props {
  type: PortfolioIdType;
  images: string[];
}

const Carousel: FC<Props> = ({ type, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3초마다 넘어감 (원하는 시간으로 조절)

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  const handlerImage = (imageIndex: number) => {
    setCurrentIndex(imageIndex);
  };

  return (
    <div id="default-carousel" data-carousel="slide" className="">
      <div className="absolute top-[-40px] z-30 flex mt-5 gap-x-2">
        {images.map((image, index) => {
          return (
            <button
              key={`carousel-image-button-${image}-${index}`}
              type="button"
              className={`w-full h-full rounded-full ${
                index === currentIndex ? 'bg-primary' : 'bg-lightGray'
              }`}
              aria-current="true"
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={`${index}`}
              onClick={() => handlerImage(index)}
            ></button>
          );
        })}
      </div>
      <div className="overflow-hidden md:h-[420px] mt-[20px] w-full">
        {images.map((image, index) => {
          return (
            <div
              className={`${index !== currentIndex && 'hidden'}`}
              data-carousel-item
            >
              <Image
                key={`portfolio-detail-image-${image}`}
                alt={`portfolio detail ${image}`}
                src={require(`public/images/portfolio/${type}/${image}`)}
                height={480}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
