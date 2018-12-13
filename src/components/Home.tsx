import * as React from 'react';
import logo from '../logo.svg';
import './Home.css';

export const Home = (props: any) => {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Edit <code>src/Home.tsx</code> and save to reload.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.resolvedValue}
        </a>
      </header>
    </div>
  );
};
