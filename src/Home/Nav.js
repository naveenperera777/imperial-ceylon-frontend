import React from 'react';
import { Link } from "react-router-dom";
export default function NavBar(){
    return(
    <div>
<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
<div class="container">
  <a class="navbar-brand" href="index.html">Imperial<span>Ceylon</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="oi oi-menu"></span> Menu
  </button>

  <div class="collapse navbar-collapse" id="ftco-nav">
    <ul class="navbar-nav ml-auto">
      <Link className="nav-item" to="/"><a class="nav-link">Home</a></Link>
      <Link className="nav-item" to="/how-it-works"><a class="nav-link">How It Works</a></Link>
      <Link className="nav-item" to="/services"><a class="nav-link">Services</a></Link>
      <li class="nav-item"><a class="nav-link">Pricing</a></li>
      <li class="nav-item"><a class="nav-link">Our Vehicles</a></li>
      {/* <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li> */}
      <li class="nav-item"><a class="nav-link">Contact</a></li>
    </ul>
  </div>
    </div>
    </nav>
    </div>
    )
}