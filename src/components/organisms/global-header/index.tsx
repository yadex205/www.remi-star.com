import React from 'react';
import { Link } from 'gatsby';

import logoWebSiteImage from 'images/logo-website.svg';

export const GlobalHeader: React.FC = () => (
  <header className="o-global-header">
    <Link className="o-global-header__brand-wrapper" to="/">
      <img className="o-global-header__brand" alt="れーみ" src={logoWebSiteImage} width="96" height="32" />
    </Link>
  </header>
);
