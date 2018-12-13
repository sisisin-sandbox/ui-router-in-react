import { UIRouter, UIView, UISref } from '@uirouter/react';
import React, { Component } from 'react';
import { routerPlugins, routerStates } from './router.config';

class App extends Component {
  render() {
    return (
      <UIRouter plugins={routerPlugins} states={routerStates}>
        <>
          <ul>
            <li>
              <UISref to="home">
                <a>home</a>
              </UISref>
            </li>
            <li>
              <UISref to="user">
                <a>user</a>
              </UISref>
            </li>
          </ul>

          <UIView />
        </>
      </UIRouter>
    );
  }
}

export default App;
