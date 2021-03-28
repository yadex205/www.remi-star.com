import React from 'react';
import { Link as RouterLink, GatsbyLinkProps as RouterLinkProps } from 'gatsby';

import { IconProps } from 'components/atoms/icon';

export interface NavListItemProps {
  children?: React.ReactNode;
  linkComponent?: React.ReactElement;
  iconComponent?: React.ReactElement<IconProps>;
}

interface NavListItemWithNativeLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  iconComponent?: React.ReactElement<IconProps>;
}

interface NavListItemWithRouterLinkProps extends Omit<RouterLinkProps<unknown>, 'ref'> {
  iconComponent?: React.ReactElement<IconProps>;
}

interface NavListItemComponent extends React.FC<NavListItemProps> {
  Native: React.FC<NavListItemWithNativeLinkProps>;
  Router: React.FC<NavListItemWithRouterLinkProps>;
}

export const NavListItem: NavListItemComponent = ({ children, linkComponent = <div />, iconComponent }) => {
  const modifiedLinkComponent = React.cloneElement(
    linkComponent,
    { ...linkComponent.props, className: 'm-nav-list__item' },
    <>
      <div className="m-nav-list__item-text">{children}</div>
      {iconComponent && <div className="m-nav-list__item-icon">{iconComponent}</div>}
    </>
  );

  return <li className="m-nav-list__item-wrapper">{modifiedLinkComponent}</li>;
};

const NavListItemWithNativeLink: NavListItemComponent['Native'] = ({ children, iconComponent, ...props }) => (
  <NavListItem linkComponent={<a {...props} />} iconComponent={iconComponent}>
    {children}
  </NavListItem>
);

NavListItem.Native = NavListItemWithNativeLink;

const NavListItemWithRouterLink: NavListItemComponent['Router'] = ({ children, iconComponent, ...props }) => (
  <NavListItem linkComponent={<RouterLink {...props} />} iconComponent={iconComponent}>
    {children}
  </NavListItem>
);

NavListItem.Router = NavListItemWithRouterLink;

export const NavList: React.FC = ({ children }) => (
  <nav className="m-nav-list">
    <ul className="m-nav-list__items-container">{children}</ul>
  </nav>
);
