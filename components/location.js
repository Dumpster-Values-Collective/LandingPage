import React from 'react';

function Location(){
  return(
    <section id="location-container">
      <div className="text-container">
        <div>
          <h2>Location</h2>
          <p> 302 4th Ave. E <br/> Olympia, Washington 98501 </p>
        </div>

        <div>
          <h2> Call Us</h2>
          <p> (360) 705 - 3772</p>
        </div>
      </div>
      <div className="image-container">
        <img src="https://via.placeholder.com/700x900" alt="placeholder image" />
      </div> 
    </section>
  )
}

export default Location;