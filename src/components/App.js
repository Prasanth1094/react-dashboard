
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import configureStore from '../store/configureStore'
import Sidebar from '../components/SideBar';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

export const store = configureStore

function App () {
  return (
    <Provider store={store}>
    <div>
      <Router history={createBrowserHistory()}>
        <Sidebar />          
      </Router>
    </div>
  </Provider>
  )
}

export default App




