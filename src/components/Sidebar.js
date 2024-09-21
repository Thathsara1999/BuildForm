// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Sidebar = () => {
   
  return (
   
    <div style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '20px', height: '100vh' }}>
     <Navbar></Navbar>
      <ul style={{ listStyle: 'none', padding: 0 }}>
       
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/page1">Welcome Screen</Link></li>
        <li><Link to="/page2">Multiple choice</Link></li>
        <li><Link to="/page3">Page 3</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
