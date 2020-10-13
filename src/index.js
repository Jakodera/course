import React from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
  console.log('hello first component')
  return (
  <div>
    <p>Hello React</p>
  </div>
  )
}


ReactDOM.render(<App />,document.getElementById('root'));
