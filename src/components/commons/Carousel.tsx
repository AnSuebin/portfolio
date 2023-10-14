'use client';

import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';

import { PortfolioIdType } from '@/apis/Home.type';

interface Props {
  type: PortfolioIdType;
  images: string[];
  isMobile?: boolean;
}

const Carousel: FC<Props> = ({ type, images, isMobile = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  const handlerImage = (imageIndex: number) => {
    setCurrentIndex(imageIndex);
  };

  if (isMobile) {
    return (
      <div
        id="default-carousel"
        data-carousel="slide"
        className="w-full gap-4 mt-5 "
      >
        <div className="w-full h-[400px] flex justify-center items-center bg-[lightGray]">
          {images.map((image, index) => {
            return (
              <div
                key={`portfolio-detail-image-${image}`}
                className={`${index !== currentIndex && 'hidden'} `}
                data-carousel-item
              >
                <Image
                  alt={`portfolio detail ${image}`}
                  src={require(`public/images/portfolio/${type}/${image}`)}
                  height={400}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center w-full mt-5 ">
          <div className="flex gap-2">
            {images.map((image, index) => {
              return (
                <div
                  key={`carousel-image-button-${image}-${index}`}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === currentIndex ? 'bg-primary' : 'bg-lightGray'
                  }`}
                  aria-current="true"
                  aria-label={`Slide ${index + 1}`}
                  data-carousel-slide-to={`${index}`}
                  onClick={() => handlerImage(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="default-carousel" data-carousel="slide" className="">
      <div className="absolute top-[-40px] z-30 flex mt-5 gap-x-2">
        {images.map((image, index) => {
          return (
            <div
              key={`carousel-image-button-${image}-${index}`}
              className={`w-3 h-3 cursor-pointer rounded-full ${
                index === currentIndex ? 'bg-primary' : 'bg-lightGray'
              }`}
              aria-current="true"
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={`${index}`}
              onClick={() => handlerImage(index)}
            />
          );
        })}
      </div>
      <div className="overflow-hidden h-[420px] mt-[20px] w-full bg-[lightGray] flex justify-center">
        {images.map((image, index) => {
          return (
            <div
              key={`portfolio-detail-image-${image}`}
              className={`${index !== currentIndex && 'hidden'}`}
              data-carousel-item
            >
              <Image
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
