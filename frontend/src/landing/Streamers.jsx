import React from 'react';

const Streamers = () => {
  // TODO: refactor to use data.map()
  const data = [
    {
      imgSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp',
      quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sint nesciunt ad itaque aperiam expedita officiis incidunt minus facere, molestias quisquam impedit inventore.',
      name: 'Streamer 1',
      streamLink: 'twitch.tv/streamer1',
    },
    {
      imgSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp',
      quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
      name: 'Streamer 2',
      streamLink: 'twitch.tv/streamer2',
    },
    {
      imgSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp',
      quote: 'At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint amet dolore.',
      name: 'Streamer 3',
      streamLink: 'twitch.tv/streamer3',
    }
  ];

  return (
    <>
      <section className="page-section" id="streamers">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Streamers</h2>
                <h3 className="section-subheading">What do your <span className="highlight">favourite</span> streamers say about Lost Ark Tools?</h3>
            </div>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                  <div className="card">
                    <div className="card-body py-5">

                      {/* <!-- Carousel wrapper --> */}
                      <div id="carouselDarkVariant" className="carousel slide carousel-dark" data-mdb-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <div className="carousel-indicators mb-0">
                          <button type="button" data-bs-target="#carouselDarkVariant" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselDarkVariant" data-bs-slide-to="1"
                            aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselDarkVariant" data-bs-slide-to="2"
                            aria-label="Slide 1"></button>
                        </div>

                        {/* <!-- Inner --> */}
                        <div className="carousel-inner pt-2 pb-5">
                          {/* <!-- Single item --> */}
                          <div className="carousel-item active">
                            <div className="row d-flex justify-content-center">
                              <div className="col-md-8 col-lg-9 col-xl-8">
                                <div className="d-flex">
                                  <div className="flex-shrink-0">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                      className="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="90"
                                      height="90"/>
                                  </div>
                                  <div className="flex-grow-1 ms-4 ps-3">
                                    <figure>
                                      <blockquote className="blockquote mb-4">
                                        <p>
                                          <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                          <span className="font-italic">Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit. Pariatur sint nesciunt ad itaque aperiam expedita officiis incidunt
                                            minus facere, molestias quisquam impedit inventore.</span>
                                        </p>
                                      </blockquote>
                                      <figcaption className="blockquote-footer">
                                      Streamer 1 @ <a href="twitch.tv/streamer1">twitch.tv/streamer1</a>
                                      </figcaption>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* <!-- Single item --> */}
                          <div className="carousel-item">
                            <div className="row d-flex justify-content-center">
                              <div className="col-md-8 col-lg-9 col-xl-8">
                                <div className="d-flex">
                                  <div className="flex-shrink-0">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                      className="rounded-circle mb-4 mb-lg-0 shadow-2" alt="avatar" width="90"
                                      height="90"/>
                                  </div>
                                  <div className="flex-grow-1 ms-4 ps-3">
                                    <figure>
                                      <blockquote className="blockquote mb-4">
                                        <p>
                                          <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                          <span className="font-italic">Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                            quae ab illo inventore veritatis.</span>
                                        </p>
                                      </blockquote>
                                      <figcaption className="blockquote-footer">
                                      Streamer 2 @ <a href="twitch.tv/streamer2">twitch.tv/streamer2</a>
                                      </figcaption>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* <!-- Single item --> */}
                          <div className="carousel-item">
                            <div className="row d-flex justify-content-center">
                              <div className="col-md-8 col-lg-9 col-xl-8">
                                <div className="d-flex">
                                  <div className="flex-shrink-0">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                      className="rounded-circle mb-4 mb-lg-0 shadow-2" alt="woman avatar" width="90"
                                      height="90"/>
                                  </div>
                                  <div className="flex-grow-1 ms-4 ps-3">
                                    <figure>
                                      <blockquote className="blockquote mb-4">
                                        <p>
                                          <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                                          <span className="font-italic">At vero eos et accusamus et iusto odio dignissimos
                                            qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                            et quas molestias excepturi sint amet dolore.</span>
                                        </p>
                                      </blockquote>
                                      <figcaption className="blockquote-footer">
                                        Streamer 3 @ <a href="twitch.tv/streamer3">twitch.tv/streamer3</a>
                                      </figcaption>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Inner --> */}

                        {/* <!-- Controls --> */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselDarkVariant"
                          data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselDarkVariant"
                          data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export { Streamers };