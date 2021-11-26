import React from 'react';

const Gallery = () => (
    <section className="my-5">
        <div className="container">
            <div className="section-title">
                <h2 className="text-center mb-4 display-3">Team</h2>
            </div>

            <div className="row">
                <div className="col-lg-6 ">
                    <div className="member d-flex align-items-start">
                        <div className="pic">
                            <img
                                src="https://bootstrapmade.com/demo/templates/Anyar/assets/img/team/team-1.jpg"
                                className="img-fluid rounded w-75 mx-auto"
                                alt=""
                            />
                        </div>
                        <div className="member-info">
                            <h4>Walter White</h4>
                            <span>Chief Executive Officer</span>
                            <div className="social fs-4 d-flex justify-content-between">
                                <a href="/">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="/">
                                    <i className="fab fa-facebook" />
                                </a>
                                <a href="/">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="/">
                                    <i className="fab fa-linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mt-4 mt-lg-0 ">
                    <div className="member d-flex align-items-start">
                        <div className="pic">
                            <img
                                src="https://bootstrapmade.com/demo/templates/Anyar/assets/img/team/team-2.jpg"
                                className="img-fluid rounded w-75 mx-auto"
                                alt=""
                            />
                        </div>
                        <div className="member-info">
                            <h4>Sarah Jhonson</h4>
                            <span>Product Manager</span>
                            <div className="social fs-4 d-flex justify-content-between">
                                <a href="/">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="/">
                                    <i className="fab fa-facebook" />
                                </a>
                                <a href="/">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="/">
                                    <i className="fab fa-linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="col-lg-6 mt-4 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div className="member d-flex align-items-start">
                        <div className="pic">
                            <img
                                src="https://bootstrapmade.com/demo/templates/Anyar/assets/img/team/team-3.jpg"
                                className="img-fluid rounded w-75 mx-auto"
                                alt=""
                            />
                        </div>
                        <div className="member-info">
                            <h4>William Anderson</h4>
                            <span>CTO</span>
                            <div className="social fs-4 d-flex justify-content-between">
                                <a href="/">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="/">
                                    <i className="fab fa-facebook" />
                                </a>
                                <a href="/">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="/">
                                    <i className="fab fa-linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mt-4">
                    <div className="member d-flex align-items-start">
                        <div className="pic">
                            <img
                                src="https://bootstrapmade.com/demo/templates/Anyar/assets/img/team/team-4.jpg"
                                className="img-fluid rounded w-75 mx-auto"
                                alt=""
                            />
                        </div>
                        <div className="member-info">
                            <h4>Amanda Jepson</h4>
                            <span>Accountant</span>
                            <div className="social fs-4 d-flex justify-content-between">
                                <a href="/">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="/">
                                    <i className="fab fa-facebook" />
                                </a>
                                <a href="/">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="/">
                                    <i className="fab fa-linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Gallery;
