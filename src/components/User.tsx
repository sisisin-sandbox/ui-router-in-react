import * as React from 'react';
import { UserProps } from './UserModule';

export class User extends React.Component<UserProps> {
  componentDidMount() {
    this.props.init();
  }
  render() {
    const { userId } = this.props;
    return (
      <div>
        user {userId}. typeof userId is {typeof userId}
      </div>
    );
  }
}
