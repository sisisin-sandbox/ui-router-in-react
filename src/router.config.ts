import { pushStateLocationPlugin, ReactStateDeclaration, UIRouterReact } from '@uirouter/react';
import { Home } from './components/Home';
import { User } from './components/User';

// export const router = new UIRouterReact();

export const routerStates: ReactStateDeclaration[] = [
  {
    name: 'home',
    url: '/home',
    component: Home,
  },
  {
    name: 'user',
    url: '/user',
    component: User,
  },
];
export const routerPlugins = [pushStateLocationPlugin];
// router.plugin(hashLocationPlugin);
// routerStates.forEach(s => router.stateRegistry.register(s));
