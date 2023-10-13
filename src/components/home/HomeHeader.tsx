import Link from 'next/link';
import React from 'react';

const HomeHeader = () => {
  return (
    <header className="fixed z-50 w-full max-w-screen-xl top-0 cursor-pointer flex border-b-[1.5px] border-lightGray bg-background">
      <Link href={'/'}>
        <div className="mx-5 mt-5 mb-3">
          <div className="text-lg font-extrabold">ANSOOBIN</div>
          <div className="text-sm font-semibold text-darkGray">
            Frontend Developer
          </div>
        </div>
      </Link>
    </header>
  );
};

export default HomeHeader;
