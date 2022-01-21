import './index.css';
import React, { useState, useEffect } from "react";

const Navbar = () => {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
     if(window.scrollY >= 620){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
    };
    window.addEventListener('scroll', changeNavbarColor);


    return ( 
        <nav className={colorChange ? 'navbarChange' : 'navbar'}>
            <div className="head1">
                <h1>
                    <span>NEP</span>SHIRTS
                </h1>
            </div>

            <div className="head2">
                <div className="links">
                    <a href="">HOME</a>
                    <a href="#tshirts">T-SHIRTS</a>
                    <a href="">SHIRTS</a>
                    <a href="">CONTACT US</a>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;