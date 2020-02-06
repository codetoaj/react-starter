import React from 'react';
import './styles/app.scss';
import reactimg from './assets/react.png';

class App extends React.Component {
  componentDidMount() {
    console.log("React running...")
  }
  render() {
    return (
      <div className="app">
        <h1>React Starter</h1>
        <img src={reactimg} alt="React Starter" />
      </div>
    )
  }
}

export default App;
