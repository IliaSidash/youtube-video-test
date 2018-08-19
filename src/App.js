import React from 'react';
import { Provider } from 'mobx-react';

import Store from './store';
import Main from './Main';

const App = () => (
  <Provider store={new Store()}>
    <Main />
  </Provider>
);

export default App;
