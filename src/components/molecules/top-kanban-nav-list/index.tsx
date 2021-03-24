import React from 'react';
import { Link as RouterLink, GatsbyLinkProps as RouterLinkProps } from 'gatsby';

import { IconProps } from 'components/atoms/icon';

interface TopKanbanNavListItemProps {
  children?: React.ReactNode;
  linkComponent?: React.ReactElement;
  iconComponent?: React.ReactElement<IconProps>;
}

interface TopKanbanNavListItemWithNativeLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  iconComponent?: React.ReactElement<IconProps>;
}

interface TopKanbanNavListItemWithRouterLinkProps extends Omit<RouterLinkProps<unknown>, 'ref'> {
  iconComponent?: React.ReactElement<IconProps>;
}

interface TopKanbanNavListItemComponent extends React.FC<TopKanbanNavListItemProps> {
  Native: React.FC<TopKanbanNavListItemWithNativeLinkProps>;
  Router: React.FC<TopKanbanNavListItemWithRouterLinkProps>;
}

export const TopKanbanNavListItem: TopKanbanNavListItemComponent = ({
  children,
  linkComponent = <div />,
  iconComponent,
}) => {
  const modifiedLinkComponent = React.cloneElement(
    linkComponent,
    { ...linkComponent.props, className: 'm-top-kanban-nav-list__item' },
    <>
      <div className="m-top-kanban-nav-list__item-text">{children}</div>
      {iconComponent && <div className="m-top-kanban-nav-list__item-icon">{iconComponent}</div>}
    </>
  );

  return <li className="m-top-kanban-nav-list__item-wrapper">{modifiedLinkComponent}</li>;
};

const TopKanbanNavListItemWithNativeLink: TopKanbanNavListItemComponent['Native'] = ({
  children,
  iconComponent,
  ...props
}) => (
  <TopKanbanNavListItem linkComponent={<a {...props} />} iconComponent={iconComponent}>
    {children}
  </TopKanbanNavListItem>
);

TopKanbanNavListItem.Native = TopKanbanNavListItemWithNativeLink;

const TopKanbanNavListItemWithRouterLink: TopKanbanNavListItemComponent['Router'] = ({
  children,
  iconComponent,
  ...props
}) => (
  <TopKanbanNavListItem linkComponent={<RouterLink {...props} />} iconComponent={iconComponent}>
    {children}
  </TopKanbanNavListItem>
);

TopKanbanNavListItem.Router = TopKanbanNavListItemWithRouterLink;

export const TopKanbanNavList: React.FC = ({ children }) => (
  <nav className="m-top-kanban-nav-list">
    <ul className="m-top-kanban-nav-list__items-container">{children}</ul>
  </nav>
);
