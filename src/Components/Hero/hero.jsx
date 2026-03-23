import React from "react";
import hero_main from "../../assets/hero_main.png";
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero() {
  return (
    <div className='row'> 
            <div className='col-6'>
                <h3>Apply for</h3>
                <h2>Scholarships</h2>
                <p>Empowering students through financial support</p>
                <button className='primary'>Apply</button>
            </div>
             <div className='col-6'>
                 <img src={hero_main} alt="Hero Image" />
             </div>
         </div>
  );
}

export default Hero;