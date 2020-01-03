// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



import React 			   from 'react';
import ReactDOM            from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker  from './serviceWorker';
import { Provider } 	from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer 			from './store/reducer';


const configureStore = () => {   
  return createStore( reducer, applyMiddleware(thunk)) ;
}

const store = configureStore();

ReactDOM.render( <Provider store={store}> <App /> </Provider>,  document.getElementById('root'));
serviceWorker.unregister();
