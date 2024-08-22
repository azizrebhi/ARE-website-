import React from 'react';
import Navbar from './Navbar';
import './App.css'
import FullWidthImage from './FullWidthImage';
import EventCards from './EventCards';
import BadgeCount from './BadgeCount';
function App() {
  
  return (
    <>
         <Navbar />
      <FullWidthImage />
      <EventCards />
      <BadgeCount/>
    </>
  )
}

export default App
