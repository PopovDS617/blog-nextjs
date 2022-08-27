import React from 'react';

import MainNav from './MainNav';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <MainNav />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
