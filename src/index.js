import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Form from 'react-bootstrap/Form';
// import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import { legacy_createStore as createStore} from 'redux';
import reducer from './components/reducer';
//import * as actions from './components/actionCreators';
import { Provider } from 'react-redux';


const store = createStore(reducer);
// const { dispatch } = store;
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

);


