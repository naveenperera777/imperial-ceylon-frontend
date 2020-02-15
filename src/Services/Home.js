import React from 'react';
import background from '../images/car-inside.jpg';
import NavBar from '../Home/Nav'
export default function ServicesHome(){
    return(
        <div>
    <NavBar />
      <div class="ftco-blocks-cover-1">
      <div class="ftco-cover-1 overlay innerpage" style={{ backgroundImage : `url(${background})`}}>
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6 text-center">
              <h1>Our Services</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
    )
}