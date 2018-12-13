import { storiesOf } from '@storybook/react';
import { memoryLocationPlugin, ReactStateDeclaration, UIRouter } from '@uirouter/react';
import React from 'react';
import { Menu } from '../components/Menu';

const plugins = [memoryLocationPlugin];
const states: ReactStateDeclaration[] = [];
storiesOf('Menus', module).add('Menu', () => {
  return (
    <UIRouter states={states} plugins={plugins}>
      <Menu />
    </UIRouter>
  );
});
