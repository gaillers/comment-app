import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../core/store/index';

import MainComponent from '../shared/components/MainComponent';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;
