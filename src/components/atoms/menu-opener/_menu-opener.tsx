import React from 'react';
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { SiteState, SiteAction } from 'lib/store';

function mapStateToProps(state: SiteState) {
  return {
    menuOpened: state.menuOpened
  };
}

function mapDispatchToProps(dispatch: Dispatch<SiteAction>) {
  return {
    openMenu: () => dispatch({ type: 'OPEN_MENU' }),
    closeMenu: () => dispatch({ type: 'CLOSE_MENU' })
  };
}

interface Props {
  menuOpened: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

class MenuOpener extends React.Component<Props, null> {
  private handleClick() {
    const { menuOpened, openMenu, closeMenu } = this.props;
    menuOpened ? closeMenu() : openMenu();
  }

  private get className() {
    let name = 'a-menu-opener';
    if (this.props.menuOpened) {
      name += ' a-menu-opener--opened';
    }
    return name;
  }

  render() {
    return (
      <div className={this.className} onClick={this.handleClick.bind(this)}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuOpener);
