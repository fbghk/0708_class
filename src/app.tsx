// // const add = require('./module/add.js');
// import add from "./module/add";
// const test = add(1,2);
// console.log(test)

import React from 'react';
import ReactDOM  from 'react-dom'; 
import "./test.css";


const App:React.FC = () => {
  return(
    <div>
      <h1>hello world</h1>
    </div>
  );
}


ReactDOM.render(<App />,
  document.getElementById('root')
)

