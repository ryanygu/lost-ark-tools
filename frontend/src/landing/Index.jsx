import React from 'react';
import landingImage1080 from '../assets/img/wallpaper1080.jpeg';
import { Link } from 'react-router-dom';

import { accountService } from '@/_services';

function Landing() {
    const user = accountService.userValue;
    
    return (
        <>

          <section className="page-section" id="banner">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-12 banner-heading">Lost Ark Tools</div>
              </div>
              <div className="row text-center banner-subheading">
                <div className="col-md-12">Join our community today!</div>
              </div>
              <div className="row text-center">
                <div className="col-md-12">
                  <Link className="btn btn-primary row" to="/account/login">Get started</Link>
                </div>
              </div>
            </div>
          </section>

              <section className="page-section" id="features">
                  <div className="container">
                      <div className="text-center">
                          <h2 className="section-heading text-uppercase">Features</h2>
                          <h3 className="section-subheading text-muted">See current and upcoming features below.</h3>
                      </div>
                      <div className="row text-center">
                          <div className="col-md-4">
                              <span className="fa-stack fa-4x">
                                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                  <i className="fa fa-gem fa-stack-1x fa-inverse"></i>
                              </span>
                              <h4 className="my-3">Faceting Practice</h4>
                              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                          </div>
                          <div className="col-md-4">
                              <span className="fa-stack fa-4x">
                                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                  <i className="fa fa-list fa-stack-1x fa-inverse"></i>
                              </span>
                              <h4 className="my-3">Leaderboards</h4>
                              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                          </div>
                          <div className="col-md-4">
                              <span className="fa-stack fa-4x">
                                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                  <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                              </span>
                              <h4 className="my-3">New Feature 1</h4>
                              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                          </div>
                      </div>
                  </div>
              </section>

              <section className="page-section bg-light" id="team">
                  <div className="container">
                      <div className="text-center">
                          <h2 className="section-heading text-uppercase">Meet the team</h2>
                          <h3 className="section-subheading text-muted">Founded by University of Toronto alumni.</h3>
                      </div>
                      <div className="row text-center">
                          <div className="col-lg-6">
                              <div className="team-member">
                                  <span className="fa-stack fa-4x profile-pic">
                                      <i className="fa fa-circle fa-stack-2x text-secondary"></i>
                                      <i className="fa fa-user fa-stack-1x fa-inverse"></i>
                                  </span>
                                  <h4>John Doe</h4>
                                  <p className="text-muted">Lead Developer</p>
                                  <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter Profile"><i className="fa-brands fa-twitter"></i></a>
                                  <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook Profile"><i className="fa-brands fa-facebook-f"></i></a>
                                  <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn Profile"><i className="fa-brands fa-linkedin-in"></i></a>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="team-member">
                                  <span className="fa-stack fa-4x profile-pic">
                                      <i className="fa fa-circle fa-stack-2x text-secondary"></i>
                                      <i className="fa fa-user fa-stack-1x fa-inverse"></i>
                                  </span>
                                  <h4>Jane Doe</h4>
                                  <p className="text-muted">Lead UI/UX Designer</p>
                                  <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter Profile"><i className="fa-brands fa-twitter"></i></a>
                                  <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook Profile"><i className="fa-brands fa-facebook-f"></i></a>
                                  <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn Profile"><i className="fa-brands fa-linkedin-in"></i></a>
                              </div>
                          </div>
                      </div>
                      
                  </div>
              </section>
              <section className="page-section" id="contact">
                  <div className="container">
                      <div className="text-center">
                          <h2 className="section-heading text-uppercase">Contact Us</h2>
                          <p className="large text-muted">For inquiries, send us an email at contact@lostarktools.com.</p>
                      </div>
                  </div>
              </section>

              <footer className="footer py-4">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-lg-4 text-lg-start">Copyright &copy; Lost Ark Tools 2022</div>
                          <div className="col-lg-4 my-3 my-lg-0">
                          </div>
                          <div className="col-lg-4 text-lg-end">
                              <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                              <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                          </div>
                      </div>
                  </div>
              </footer>
        </>
    );
}

export { Landing };