import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <section className="page-section" id="banner">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12 hero-header-text">A <span>community resource</span> for Lost Ark players</div>
          </div>
          <div className="row text-center hero-header-subtext">
            <div className="col-md-12">Join your favourite streamers and friends on our platform!</div>
          </div>
          <div className="row text-center">
            <div className="col-md-12">
              <Link className="btn btn-primary rounded-pill hero-header-button" to="/account/login"><span className="my-3 d-inline-block">Get started</span></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export { Hero };