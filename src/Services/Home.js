import React from 'react';
import background from '../images/car-inside.jpg';
import NavBar from '../Home/Nav';
export default function ServicesHome(){
    return(
        <div>
    {/* <NavBar /> */}
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

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4 mb-lg-5">
            <div class="service-1 dark">
              <span class="service-1-icon">
                <span class="flaticon-car"></span>
                <span class="flaticon-airplane49"></span>
              </span>
              <div class="service-1-contents">
                <h3>Vehicle Import</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4 mb-lg-5">
            <div class="service-1 dark">
              <span class="service-1-icon">
                <span class="flaticon-valet-1"></span>
              </span>
              <div class="service-1-contents">
                <h3>Insurance</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4 mb-lg-5">
            <div class="service-1 dark">
              <span class="service-1-icon">
                <span class="flaticon-key"></span>
              </span>
              <div class="service-1-contents">
                <h3>Cargo</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4 mb-lg-5">
            <div class="service-1 dark">
              <span class="service-1-icon">
                <span class="flaticon-car-1"></span>
              </span>
              <div class="service-1-contents">
                <h3>Shipment</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4 mb-lg-5">
            <div class="service-1 dark">
              <span class="service-1-icon">
                <span class="flaticon-traffic"></span>
              </span>
              <div class="service-1-contents">
                <h3>Clearance</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4 mb-lg-5">
            <div class="service-1 dark">
              <span class="service-1-icon">
                <span class="flaticon-valet"></span>
              </span>
              <div class="service-1-contents">
                <h3>Delivery</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</div>
    )
}