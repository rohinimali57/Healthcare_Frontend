import React from "react";
import { Link } from "react-router-dom";
import HomeSingleFooterBlog from "../HomeSingleFooterBlog/HomeSingleFooterBlog";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top primary-bg footer-map pos-rel pt-120 pb-80">
          <div className="container">
            <div
              className="row align-items-center"
              style={{ position: "relative", zIndex: "9999" }}
            >
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="footer-contact-info footer-contact-info-3 mb-40">
                  <div className="footer-logo mb-35">
                    <Link to="/">
                      <img src="img/logo/footer-logo-3.png" alt="" />
                    </Link>
                  </div>
                  <div className="footer-contact-content mb-25">
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                 incididunt ut labore et dolore magna
                                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p> */}
                  </div>
                  <div className="footer-emailing">
                    <ul>
                      <li>
                        <i className="far fa-envelope"></i>
                        info@TreatSmart.com
                      </li>
                      <li>
                        <i className="far fa-clone"></i>TreatSmart.com
                      </li>
                      <li>
                        <i className="far fa-flag"></i>Bavdhan, Pune, India.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="footer-widget mb-40">
                  <div className="footer-title">
                    <h3>Departments</h3>
                  </div>
                  <div className="footer-menu footer-menu-2">
                    <ul>
                      <li>
                        <Link to="">Surgery and Radiology</Link>
                      </li>
                      <li>
                        <Link to="">Departments</Link>
                      </li>
                      <li>
                        <Link to="">Family Medicine</Link>
                      </li>
                      <li>
                        <Link to="">Our Doctors</Link>
                      </li>
                      <li>
                        <Link to="">Women’s Health</Link>
                      </li>
                      <li>
                        <Link to="">News</Link>
                      </li>
                      <li>
                        <Link to="">Optician</Link>
                      </li>
                      <li>
                        <Link to="">Shop</Link>
                      </li>
                      <li>
                        <Link to="">Pediatrics</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="">Dermatology</Link>
                      </li>
                      <li>
                        <Link to="">Book an Appointment</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="footer-widget mb-40">
                  <div className="footer-title">
                    <h3>News Feeds</h3>
                  </div>
                  <div className="blog-feeds pe-15">
                    <HomeSingleFooterBlog image="1" />
                    <HomeSingleFooterBlog image="1" />
                    {/* <HomeSingleFooterBlog image="1" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-25 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-copyright footer-copyright-3 text-center">
                  <p>Copyright by@ BasicTheme - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
