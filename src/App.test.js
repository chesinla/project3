import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, Switch } from 'react-router'


function App() {
  return (
    <div className="App"></div>
  )
}





const User =(props) => {
  
}


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
