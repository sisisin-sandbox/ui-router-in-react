import * as React from 'react';
import { UISref } from '@uirouter/react';

export const Menu = () => {
  return (
    <ul>
      <li>
        <UISref to="home">
          <a>home</a>
        </UISref>
      </li>
      <li>
        <UISref to="user" params={{ userId: 1 }}>
          <a>user</a>
        </UISref>
      </li>
    </ul>
  );
};
