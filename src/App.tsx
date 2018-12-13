import { combineReducers, createStore, Store } from 'redux';
import { userReducer } from './components/UserModule';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Menu } from './components/Menu';
import {
  pushStateLocationPlugin,
  servicesPlugin,
  UIRouterReact,
  UIRouter,
  UIView,
} from '@uirouter/react';
import { Home } from './components/Home';
import { UserConatiner } from './components/UserModule';

export const router = new UIRouterReact();
const routerStates = [
  {
    name: 'home',
    url: '/home',
    component: Home,
  },
  {
    name: 'user',
    url: '/users/:userId',
    params: {
      userId: {
        type: 'int',
      },
    },
    component: UserConatiner,
  },
];
router.plugin(servicesPlugin);
router.plugin(pushStateLocationPlugin);
routerStates.forEach(s => router.stateRegistry.register(s));

export const store = createStore(
  combineReducers({
    users: userReducer,
  }),
);

export type AppState = typeof store extends Store<infer S, any> ? S : never;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UIRouter router={router}>
          <>
            <Menu />
            <UIView />
          </>
        </UIRouter>
      </Provider>
    );
  }
}

export default App;
