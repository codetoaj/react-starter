import React from 'react';
import "../styles/home.scss";
import reactimg from '../assets/react.png';

const Home = () => {
  return (
    <div className="home">
      <h1>React Starter</h1>
      <img src={reactimg} alt="React Starter" />
    </div>
  )
}

export default Home;