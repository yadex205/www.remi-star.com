import React, { ReactNode } from 'react';
import { createStore, Action } from 'redux';
import { Provider } from 'react-redux';

export interface SiteState {
  menuOpened: boolean;
}

export interface OpenMenuAction extends Action {
  type: 'OPEN_MENU';
}

export interface CloseMenuAction extends Action {
  type: 'CLOSE_MENU';
}

export type SiteAction = OpenMenuAction | CloseMenuAction;

const initialState = {
  menuOpened: false
};

function reducer(state: SiteState, action: SiteAction) {
  switch (action.type) {
    case 'OPEN_MENU':
      return {
        ...state,
        menuOpened: true
      };
    case 'CLOSE_MENU':
      return {
        ...state,
        menuOpened: false
      };
  }
  return state;
}

export function wrapWithProvider({ element }: { element: ReactNode }) {
  return (
    <Provider store={createStore(reducer, initialState)}>
      {element}
    </Provider>
  );
}
