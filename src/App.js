
import './index.css';
import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import { Parallax } from 'react-parallax'; 
import SectionA from './SectionA';
import SectionB from './SectionB';


const App = () => {


  return ( 
  <div className='home'>
    <Navbar />
    <SectionA />
    <SectionB />
    

  </div>
   );
}
 
export default App;
