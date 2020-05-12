import React, { useState } from 'react';
import Link from 'next/link';

import NavItem from './navItem';
import { NavBar, NavLinks, DismissX, Logo, MobileMoreDetails, MobileNavBar, SubBar } from './navigation-styles';

export default function Navigation() {
  const [mobileMenu, setmMobileMenu] = useState(false);

  function showMobileMenu() {
    setmMobileMenu(!mobileMenu);
  }

  function hideMobileMenu() {
    setmMobileMenu(false);
  }

  return (
    <div>
      <NavBar mobileMenuShown={mobileMenu}>
        <NavLinks>
          <DismissX onClick={hideMobileMenu}>
            <span>✕</span>
          </DismissX>
          <NavItem path="/menu" action={hideMobileMenu}>
            Menu
          </NavItem>
          <NavItem path="/aboutus" action={hideMobileMenu}>
            About Us
          </NavItem>
        </NavLinks>
        <Logo>
          <Link href="/">
            <img src="/static/navigation/logo.svg" alt="The Meatball Stoppe logo" />
          </Link>
        </Logo>
        <NavLinks>
          <li>
            <a rel="noopener noreferrer" target="_blank" href="https://www.ladifferenzabakery.com">
              Bakery
            </a>
          </li>
          <NavItem path="/media" action={hideMobileMenu}>
            Media
          </NavItem>
          <MobileMoreDetails />
        </NavLinks>
      </NavBar>
      <MobileNavBar>
        <span onClick={showMobileMenu}>
          <img src="/static/navigation/hamburger.svg" alt="Menu icon" />
        </span>
        <Link href="/">
          <img src="/static/navigation/minilogo.svg" alt="The Meatball Stoppe logo" />
        </Link>
        <div />
      </MobileNavBar>
      <SubBar />
    </div>
  );
}
