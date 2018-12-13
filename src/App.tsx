import { pushStateLocationPlugin, UIRouter, UIView } from '@uirouter/react';
import React, { Component } from 'react';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { User } from './components/User';

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
    component: User,
  },
];

class App extends Component {
  render() {
    return (
      <UIRouter states={routerStates} plugins={[pushStateLocationPlugin]}>
        <>
          <Menu />
          <UIView />
        </>
      </UIRouter>
    );
  }
}

export default App;
