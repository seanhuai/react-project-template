import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

const App = () => {
  return (
    <React.Fragment>
      <h1>React-Project</h1>
      <p>一个自定义的 React 项目模板</p>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));