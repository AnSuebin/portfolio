import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const menu = [
    {
      name: 'home',
      href: '/',
      //   icon: <HomeIcon />,
      //   clickedIcon: <HomeIcon isClicked />,
    },
    {
      name: 'search',
      href: '/search',
      //   icon: <SearchIcon />,
      //   clickedIcon: <SearchIcon isClicked />,
    },
    {
      name: 'new',
      href: '/new',
      // icon: <NewIcon />,
      // clickedIcon: <NewIcon isClicked />
    },
  ];

  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-ex font-bold">portfolio</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 item-center p-4">
          {menu.map((icon) => {
            return (
              <li key={icon.href}>
                <Link href={icon.href}>
                  {icon.name}
                  {/* {pathName === icon.href ? icon.clickedIcon : icon.icon} */}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
