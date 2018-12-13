import * as React from 'react';
import { Transition } from '@uirouter/core';

export const User = ({ transition }: { transition: Transition }) => {
  const { userId } = transition.params();
  return (
    <div>
      user {userId}. typeof userId is {typeof userId}
    </div>
  );
};
