import React from 'react';
import './styles/app.scss';
import Routes from './routes';

class App extends React.Component {
  componentDidMount() {
    console.log("React running...")
  }
  render() {
    return (
      <Routes />
    )
  }
}

export default App;
