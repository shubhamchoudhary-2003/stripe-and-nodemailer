"use client"

import React from 'react';
import { shubham } from './checkout/page';

const Home = () => {
  return (
    <div className="w-full h-screen justify-center align-middle">
      <h1>Home</h1>
      <button 
     onClick={(()=>{
      shubham(
        {
          lineItems:[{price:"price_1Q0bqGDYRIaEAoSw3OBoU2G2",quantity:1}]
        }
      )
     })}
    >Kafila yaraka</button>
    </div>
  );
};

export default Home;
