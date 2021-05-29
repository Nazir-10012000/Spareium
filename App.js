import React from 'react';
import {Provider} from 'react-redux';
import Root from './src/root';
import store from './src/store';
const App =() =>{
  return(
    <Provider store={store}>
     <Root />
  </Provider>
  );

};
export default App;
