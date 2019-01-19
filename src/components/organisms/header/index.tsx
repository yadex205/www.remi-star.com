import React from 'react';
import { Link } from 'gatsby';
import { Location, LocationContext } from '@reach/router';

import LogoInlineSvg from 'assets/image/logo.svg';
import HamburgerButton from 'components/atoms/hamburger-button';
import SpMenu from 'components/organisms/sp-menu';

const navItems = [
  { label: 'top', to: '/', test: /^\/(index.html)?$/ },
  { label: 'news', to: '/news', test: /^\/news/ },
  { label: 'live', to: '/live', test: /^\/live/ },
  { label: 'works', to: '/works', test: /^\/works/ },
  { label: 'profile', to: '/profile', test: /^\/profile/ },
  { label: 'contact', to: '/contact', test: /^\/contact/ }
];

function HeaderNav(props: LocationContext) {
  const pathname = props.location.pathname;

  return (
    <ul>
      {navItems.map(item => {
         return (
           <li key={item.label} className={pathname.match(item.test) ? 'active' : ''}>
             <Link to={item.to}>{item.label}</Link>
           </li>
         );
      })}
    </ul>
  );
}

export default function Header() {
  return (
    <>
      <header className="o-header">
        <div className="o-header__inner">
          <div className="o-header__brand">
            <img alt="れーみ" src={LogoInlineSvg} />
            <span>official website</span>
          </div>
          <nav className="o-header__nav">
            <Location>
              {props => <HeaderNav {...props} />}
            </Location>
          </nav>
        </div>
      </header>
      <Location>
        { props => <SpMenu navItems={navItems} {...props} /> }
      </Location>
    </>
  );
}
