import React from 'react';
import Logo from './Logo';
import Link from '../../../node_modules/next/link';

const MainNav = () => {
  return (
    <header className="header">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">посты</Link>
          </li>
          <li>
            <Link href="/contact">контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
