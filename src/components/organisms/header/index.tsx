import React from 'react';
import { Link } from 'gatsby';

import LogoInlineSvg from '../../../assets/image/logo.svg';

export default function Header() {
  return (
    <header className="o-header">
      <div className="o-header__inner">
        <div className="o-header__brand">
          <img alt="れーみ" src={LogoInlineSvg} />
          <span>official website</span>
        </div>
        <nav className="o-header__nav">
          <ul>
            <li className="active"><Link to="">top</Link></li>
            <li><Link to="/news">news</Link></li>
            <li><Link to="">live</Link></li>
            <li><Link to="">works</Link></li>
            <li><Link to="">profile</Link></li>
            <li><Link to="">contact</Link></li>
            <li><a href="">blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
