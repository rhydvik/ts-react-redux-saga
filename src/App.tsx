import React, { FC } from 'react';
import { ConnectedRouter } from 'connected-react-router';

import './App.css';
import Routes from './Routes';
import history from './common/utils/history';

const App: FC = () => {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </div>
  );
};

export default App;
