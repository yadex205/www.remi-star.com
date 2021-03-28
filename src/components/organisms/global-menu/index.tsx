import React from 'react';
import { Link } from 'gatsby';
import { mapModifiers } from 'libs/component';

import { Icon } from 'components/atoms/icon';
import { NavList, NavListItem } from 'components/molecules/nav-list';

interface GlobalMenuPrimaryListProps {
  children?: React.ReactNode;
}

interface GlobalMenuSecondaryListProps {
  children?: React.ReactNode;
}

interface GlobalMenuPrimaryItemProps {
  linkComponent?: React.ReactElement;
  iconComponent?: React.ReactElement;
  children?: React.ReactNode;
}

interface GlobalMenuSecondaryItemProps {
  linkComponent?: React.ReactElement;
  iconComponent?: React.ReactElement;
  children?: React.ReactNode;
}

export interface GlobalMenuProps {
  opened?: boolean;
  onCloseRequested?: () => void;
}

export const GlobalMenuPrimaryList: React.FC<GlobalMenuPrimaryListProps> = ({ children }) => (
  <ul className="o-global-menu__primary-list">{children}</ul>
);

export const GlobalMenuSecondaryList: React.FC<GlobalMenuSecondaryListProps> = ({ children }) => (
  <ul className="o-global-menu__secondary-list">{children}</ul>
);

export const GlobalMenuPrimaryItem: React.FC<GlobalMenuPrimaryItemProps> = ({
  linkComponent = <div />,
  iconComponent,
  children,
}) => {
  const itemEl = React.cloneElement(
    linkComponent,
    { ...linkComponent.props, className: 'o-global-menu__primary-item' },
    <>
      {iconComponent && <div className="o-global-menu__primary-item-icon">{iconComponent}</div>}
      <div className="o-global-menu__primary-item-label">{children}</div>
    </>
  );

  return <li className="o-global-menu__primary-item-wrapper">{itemEl}</li>;
};

export const GlobalMenuSecondaryItem: React.FC<GlobalMenuSecondaryItemProps> = ({
  linkComponent = <div />,
  iconComponent,
  children,
}) => {
  const itemEl = React.cloneElement(
    linkComponent,
    { ...linkComponent.props, className: 'o-global-menu__secondary-item' },
    <>
      {iconComponent && <div className="o-global-menu__secondary-item-icon">{iconComponent}</div>}
      <div className="o-global-menu__secondary-item-label">{children}</div>
    </>
  );

  return <li className="o-global-menu__secondary-item-wrapper">{itemEl}</li>;
};

export const GlobalMenu: React.FC<GlobalMenuProps> = ({ opened, onCloseRequested }) => (
  <nav className={mapModifiers('o-global-menu', opened && 'opened')}>
    <div className="o-global-menu__entire-area">
      <div className="o-global-menu__container">
        <header className="o-global-menu__header">
          <button className="o-global-menu__close-button" type="button" onClick={onCloseRequested}>
            <Icon name="times" />
          </button>
        </header>

        <main className="o-global-menu__body">
          <GlobalMenuPrimaryList>
            <GlobalMenuPrimaryItem
              linkComponent={
                <a
                  href="https://community.camp-fire.jp/projects/view/364547"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              iconComponent={<Icon name="heart" />}
            >
              FAN COMMUNITY
            </GlobalMenuPrimaryItem>
            <GlobalMenuPrimaryItem
              linkComponent={<a href="https://tffshop.official.ec/" target="_blank" rel="noopener noreferrer" />}
              iconComponent={<Icon name="shopping-bag" />}
            >
              ONLINE SHOP
            </GlobalMenuPrimaryItem>
          </GlobalMenuPrimaryList>

          <GlobalMenuSecondaryList>
            <GlobalMenuSecondaryItem linkComponent={<Link to="/" />} iconComponent={<Icon name="home" />}>
              TOP
            </GlobalMenuSecondaryItem>
            <GlobalMenuSecondaryItem linkComponent={<Link to="/live" />} iconComponent={<Icon name="musical-note" />}>
              LIVE
            </GlobalMenuSecondaryItem>
            <GlobalMenuSecondaryItem linkComponent={<Link to="/profile" />} iconComponent={<Icon name="star" />}>
              PROFILE
            </GlobalMenuSecondaryItem>
            <GlobalMenuSecondaryItem linkComponent={<Link to="/contact" />} iconComponent={<Icon name="mail" />}>
              CONTACT
            </GlobalMenuSecondaryItem>
          </GlobalMenuSecondaryList>

          <NavList>
            <NavListItem.Router to="/website" iconComponent={<Icon name="caret-right" />}>
              Webサイトについて
            </NavListItem.Router>
          </NavList>

          <ul className="o-global-menu__social-links-container">
            <li className="o-global-menu__social-link-wrapper">
              <a
                className="o-global-menu__soclai-link"
                href="https://twitter.com/remiriya27"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li className="o-global-menu__social-link-wrapper">
              <a
                className="o-global-menu__soclai-link"
                href="https://www.instagram.com/remi_tff/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="o-global-menu__social-link-wrapper">
              <a
                className="o-global-menu__soclai-link"
                href="https://www.youtube.com/channel/UC0R8jHmD1ZpzvoS-jrfYK3Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </li>
            <li className="o-global-menu__social-link-wrapper">
              <a
                className="o-global-menu__soclai-link"
                href="https://lin.ee/rqvWnEh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Line@
              </a>
            </li>
          </ul>
        </main>
      </div>
    </div>
  </nav>
);
