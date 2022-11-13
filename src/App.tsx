import { Router} from '@solidjs/router';
import type { Component } from 'solid-js';
import { Routes } from './routes';
import "./css/shared/fonts.css";
import "./css/shared/main.css";
const App: Component = () => {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
};

export default App;
