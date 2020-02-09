import React from 'react';
import background from '../Images/bg_1.jpg';
import NavBar from './Nav.js';

export default function Home(){
    return(
        <div>
         <NavBar />        
      <div class="hero-wrap" style={{backgroundImage : `url(${background})`}} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text justify-content-start align-items-center">
          <div class="col-lg-6 col-md-6 ftco-animate d-flex align-items-end">
          	<div class="text">
	            <h1 class="mb-4">Now <span>It's easy for you</span> <span>rent a car</span></h1>
	            <p style={{fontSize:"17px"}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
	            <a href="https://vimeo.com/45830194" class="icon-wrap popup-vimeo d-flex align-items-center mt-4">
	            	<div class="icon d-flex align-items-center justify-content-center">
	            		<span class="ion-ios-play"></span>
	            	</div>
	            	<div class="heading-title ml-5">
		            	<span>Easy steps for renting a car</span>
	            	</div>
	            </a>
            </div>
          </div>
          <div class="col-lg-2 col"></div>
          <div class="col-lg-4 col-md-6 mt-0 mt-md-5 d-flex">
          	<form action="#" class="request-form ftco-animate">
          		<h2>Make your trip</h2>
	    				<div class="form-group">
	    					<label for="" class="label">Pick-up location</label>
	    					<input type="text" class="form-control" placeholder="City, Airport, Station, etc" />
	    				</div>
	    				<div class="form-group">
	    					<label for="" class="label">Drop-off location</label>
	    					<input type="text" class="form-control" placeholder="City, Airport, Station, etc" />
	    				</div>
	    				<div class="d-flex">
	    					<div class="form-group mr-2">
	                <label for="" class="label">Pick-up date</label>
	                <input type="text" class="form-control" id="book_pick_date" placeholder="Date" />
	              </div>
	              <div class="form-group ml-2">
	                <label for="" class="label">Drop-off date</label>
	                <input type="text" class="form-control" id="book_off_date" placeholder="Date" />
	              </div>
              </div>
              <div class="form-group">
                <label for="" class="label">Pick-up time</label>
                <input type="text" class="form-control" id="time_pick" placeholder="Time"/>
              </div>
	            <div class="form-group">
	              <input type="submit" value="Search Vehicle" class="btn btn-primary py-3 px-4"/>
	            </div>
	    			</form>
          </div>
        </div>
      </div>
    </div>

        </div>
        );
    }