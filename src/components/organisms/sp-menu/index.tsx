import React from 'react';
import { Link } from 'gatsby';
import { LocationContext } from '@reach/router';

import HamburgerButton from 'components/atoms/hamburger-button';

interface NavItem {
  label: string;
  to: string;
  test: RegExp;
}

interface Props extends LocationContext {
  navItems: Array<NavItem>;
}

interface States {
  opened: boolean;
}

export default class SpMenu extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = { opened: false };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  private buttonClickHandler() {
    this.setState({ opened: !this.state.opened });
  }

  render() {
    const { navItems, location: { pathname } } = this.props;
    const rootClassNames = ['o-sp-menu'];
    if (this.state.opened) { rootClassNames.push('o-sp-menu--opened'); }

    return (
      <nav className={rootClassNames.join(' ')}>
        <div className="o-sp-menu__whole-bg" />
        <div className="o-sp-menu__menu-items-bg" />
        <ul className="o-sp-menu__menu-items-container">
          {this.props.navItems.map(item => {
             const classNames = ['o-sp-menu__menu-item'];
             if (pathname.match(item.test)) { classNames.push('o-sp-menu__menu-item--active'); }

             return (
               <li key={item.label} className={classNames.join(' ')}>
                 <Link to={item.to}>{item.label}</Link>
               </li>
             );
          })}
        </ul>
        <HamburgerButton opened={this.state.opened} onClick={this.buttonClickHandler} />
      </nav>
    );
  }
}
