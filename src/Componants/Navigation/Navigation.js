import React from 'react';
import './Navigation.css'
const Navigation = () => {
    return (
        <div className="menu">
           <nav>
               <ul>
                   <li><a href="/home">Home</a></li>
                   <li><a href="/team">Team</a></li>
                   <li><a href="/contact">Contact</a></li>
               </ul>
           </nav>
        </div>
    );
};

export default Navigation;