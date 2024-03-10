import React from 'react';
import ReactDom from 'react-dom/client';
import Header from './components/Header';
import BodyContainer from './components/Body';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <BodyContainer />
    </div>
  )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>)