import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Routes from './routes';
import { useSelector } from "react-redux";


export default function App() {
  const hoverState = useSelector(state => state.isHovered)
  return (
    <div className={`main-container ${hoverState}`}>
      <Nav />
      <Routes/>
      <footer style={{height: '50vh'}}> hello</footer>
    </div>
  );
}

