import React from "react";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.png" />
        <meta name="description" content="" />
        <meta name="keywords" content="bootstrap, bootstrap5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="fonts/icomoon/style.css" />
        <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css" />
        <link rel="stylesheet" href="css/tiny-slider.css" />
        <link rel="stylesheet" href="css/aos.css" />
        <link rel="stylesheet" href="css/style.css" />
        <title>Real Estates</title>
      </Head>
      {/*====Floating WhatsApp====*/}
      <div className="wa-float" target="_blank">
        <a href="https://wa.me/923177779844">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={45}
            height={45}
            viewBox="0 0 256 258">
            <defs>
              <linearGradient
                id="logosWhatsappIcon0"
                x1="50%"
                x2="50%"
                y1="100%"
                y2="0%">
                <stop offset="0%" stopColor="#1FAF38" />
                <stop offset="100%" stopColor="#60D669" />
              </linearGradient>
              <linearGradient
                id="logosWhatsappIcon1"
                x1="50%"
                x2="50%"
                y1="100%"
                y2="0%">
                <stop offset="0%" stopColor="#F9F9F9" />
                <stop offset="100%" stopColor="#FFF" />
              </linearGradient>
            </defs>
            <path
              fill="url(#logosWhatsappIcon0)"
              d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
            />
            <path
              fill="url(#logosWhatsappIcon1)"
              d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416Zm40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513l10.706-39.082Z"
            />
            <path
              fill="#FFF"
              d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
            />
          </svg>
        </a>
      </div>
      {/*===Floating WhatsApp End====*/}
      {/*====NavBar====*/}
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
      <nav className="site-nav">
        <div className="container">
          <div className="menu-bg-wrap">
            <div className="site-navigation">
              <img
                src="images/logo.png"
                alt="Logo"
                className="logo float-start"
              />
              <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li className="has-children">
                  <a href="#">Societies</a>
                  <ul className="dropdown">
                    <li>
                      <a href="faisal-town.html">Faisal Town-I &amp; II</a>
                    </li>
                    <li>
                      <a href="faisal-hills.html">Faisal Hills</a>
                    </li>
                    <li>
                      <a href="capital-smart-city.html">Capital Smart City</a>
                    </li>
                    <li>
                      <a href="lahore-smart-city.html">Lahore Smart City</a>
                    </li>
                    <li>
                      <a href="mpchs.html">MPCHS</a>
                    </li>
                    <li>
                      <a href="park-view-city.html">Park View City Islamabad</a>
                    </li>
                    <li>
                      <a href="new-metro-city-gujjar-khan.html">
                        New Metro City Gujjar Khan
                      </a>
                    </li>
                    <li>
                      <a href="nova-city.html">Nova City</a>
                    </li>
                    <li>
                      <a href="taj-residencia.html">Taj Residencia </a>
                    </li>
                    <li>
                      <a href="blue-world-city-islamabad.html">
                        Blue World City Islamabad
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#">High Rise</a>
                  <ul className="dropdown">
                    <li>
                      <a href="j7-global.html">
                        J-7 Global (Radisson Blu) Islamabad
                      </a>
                    </li>
                    <li>
                      <a href="j7-icon.html">J7 Icon</a>
                    </li>
                    <li>
                      <a href="zarkoon-heights-islamabad.html">
                        Zarkon Heights Islamabad
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="listings.html">Listings</a>
                </li>
                <li>
                  <a href="blogs.html">Blogs</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
              <a
                href="#"
                className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
                data-toggle="collapse"
                data-target="#main-navbar">
                <span />
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/*====NavBar End====*/}
      {/*====Hero Section====*/}
      <div className="hero">
        <div className="hero-slide">
          <div
            className="img overlay"
            style={{ backgroundImage: 'url("images/j7-global-hero.jpg")' }}
          />
          <div
            className="img overlay"
            style={{ backgroundImage: 'url("images/j7-const.jpg")' }}
          />
          <div
            className="img overlay"
            style={{
              backgroundImage: 'url("images/Zarkon-Heights-Apartments.webp")',
            }}
          />
        </div>
        {/* <div class="container">
  <div class="row justify-content-center align-items-center">
    <div class="col-lg-9 text-center">
      <h1 class="heading" data-aos="fade-up">
        Easiest way to find your dream home
      </h1>
      <form
        action="#"
        class="narrow-w form-search d-flex align-items-stretch mb-3"
        data-aos="fade-up"
        data-aos-delay="200">
        <input
          type="text"
          class="form-control px-4"
          placeholder="Your ZIP code or City. e.g. New York" />
        <button type="submit" class="btn btn-primary">Search</button>
      </form>
    </div>
  </div>
</div> */}
      </div>
      {/*====Hero Section End====*/}
      {/*====The Executives====*/}
      <section>
        <div className="container py-5">
          <h2 className="font-weight-bold mb-2">The Executives</h2>
          <p className="font-italic text-muted mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="row pb-5 mb-4">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              {/* Card*/}
              <div className="card shadow-sm border-0 rounded">
                <div className="card-body p-0">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg"
                    alt=""
                    className="w-100 card-img-top"
                  />
                  <div className="p-4">
                    <h5 className="mb-0">Junaid Akbar Khan</h5>
                    <p className="small text-muted">Chairman</p>
                    <ul className="social list-unstyled list-inline dark-hover">
                      <li className="list-inline-item">
                        <a href="tel://923022566633">
                          <span className="icon-phone" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://wa.me/923022566633" target="_blank">
                          <span className="icon-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" target="_blank">
                          <span className="icon-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              {/* Card*/}
              <div className="card shadow-sm border-0 rounded">
                <div className="card-body p-0">
                  <img
                    src="images/amir-hussain.jpeg"
                    alt=""
                    className="w-100 card-img-top"
                  />
                  <div className="p-4">
                    <h5 className="mb-0">Amir Hussain</h5>
                    <p className="small text-muted">Managing Partner</p>
                    <ul className="social list-unstyled list-inline dark-hover">
                      <li className="list-inline-item">
                        <a href="tel://923119470056">
                          <span className="icon-phone" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://wa.me/923119470056" target="_blank">
                          <span className="icon-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/in/amir-hussain-9a83149b"
                          target="_blank">
                          <span className="icon-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              {/* Card*/}
              <div className="card shadow-sm border-0 rounded">
                <div className="card-body p-0">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-cards/profile-2_ujssbj.jpg"
                    alt=""
                    className="w-100 card-img-top"
                  />
                  <div className="p-4">
                    <h5 className="mb-0">Syed Zulfiqar Ali Shah</h5>
                    <p className="small text-muted">
                      Fonder/ Chief Executive Officer (CEO)
                    </p>
                    <ul className="social list-unstyled list-inline dark-hover">
                      <li className="list-inline-item">
                        <a href="tel://923173331244">
                          <span className="icon-phone" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://wa.me/923173331244" target="_blank">
                          <span className="icon-whatsapp" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/in/syed-zulfiqar-ali-shah-74195a34"
                          target="_blank">
                          <span className="icon-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====About====*/}
      <div className="container">
        <h2>About Us</h2>
        <h6>
          Glorious Real Estates Pvt. Ltd. is a leading real estate company based
          in Islamabad, Pakistan. With a commitment to excellence and a wealth
          of experience in the industry, we offer a comprehensive range of
          services in the real estate market. Our expertise lies in trading
          files, plots, commercial and residential units, as well as managing
          large-scale investments.
          <a href="about.html" className="learn-more">
            Read More
          </a>
        </h6>
      </div>
      {/*====Societies====*/}
      <div className="section">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="font-weight-bold text-primary heading">
                Societies
              </h2>
            </div>
            <div className="col-lg-6 text-lg-end">
              <p>
                <a
                  href="#"
                  target="_blank"
                  className="btn btn-primary text-white py-3 px-4">
                  View all properties
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="property-slider-wrap">
                <div className="property-slider">
                  <div className="property-item">
                    <a href="property-single" className="img">
                      <img
                        src="images/img_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <div className="property-content">
                      <div className="price mb-2">
                        <span>$1,291,000</span>
                      </div>
                      <div>
                        <span className="d-block mb-2 text-black-50">
                          5232 California Fake, Ave. 21BC
                        </span>
                        <span className="city d-block mb-3">
                          California, USA
                        </span>
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2" />
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2" />
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
                        <a
                          href="property-single"
                          className="btn btn-primary py-2 px-3">
                          See details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* .item */}
                  <div className="property-item">
                    <a href="property-single" className="img">
                      <img
                        src="images/img_2.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <div className="property-content">
                      <div className="price mb-2">
                        <span>$1,291,000</span>
                      </div>
                      <div>
                        <span className="d-block mb-2 text-black-50">
                          5232 California Fake, Ave. 21BC
                        </span>
                        <span className="city d-block mb-3">
                          California, USA
                        </span>
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2" />
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2" />
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
                        <a
                          href="property-single"
                          className="btn btn-primary py-2 px-3">
                          See details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* .item */}
                  <div className="property-item">
                    <a href="property-single" className="img">
                      <img
                        src="images/img_3.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <div className="property-content">
                      <div className="price mb-2">
                        <span>$1,291,000</span>
                      </div>
                      <div>
                        <span className="d-block mb-2 text-black-50">
                          5232 California Fake, Ave. 21BC
                        </span>
                        <span className="city d-block mb-3">
                          California, USA
                        </span>
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2" />
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2" />
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
                        <a
                          href="property-single"
                          className="btn btn-primary py-2 px-3">
                          See details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* .item */}
                  <div className="property-item">
                    <a href="property-single" className="img">
                      <img
                        src="images/img_4.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <div className="property-content">
                      <div className="price mb-2">
                        <span>$1,291,000</span>
                      </div>
                      <div>
                        <span className="d-block mb-2 text-black-50">
                          5232 California Fake, Ave. 21BC
                        </span>
                        <span className="city d-block mb-3">
                          California, USA
                        </span>
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2" />
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2" />
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
                        <a
                          href="property-single"
                          className="btn btn-primary py-2 px-3">
                          See details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* .item */}
                  <div className="property-item">
                    <a href="property-single" className="img">
                      <img
                        src="images/img_5.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <div className="property-content">
                      <div className="price mb-2">
                        <span>$1,291,000</span>
                      </div>
                      <div>
                        <span className="d-block mb-2 text-black-50">
                          5232 California Fake, Ave. 21BC
                        </span>
                        <span className="city d-block mb-3">
                          California, USA
                        </span>
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2" />
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2" />
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
                        <a
                          href="property-single"
                          className="btn btn-primary py-2 px-3">
                          See details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* .item */}
                  <div className="property-item">
                    <a href="property-single" className="img">
                      <img
                        src="images/img_6.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <div className="property-content">
                      <div className="price mb-2">
                        <span>$1,291,000</span>
                      </div>
                      <div>
                        <span className="d-block mb-2 text-black-50">
                          5232 California Fake, Ave. 21BC
                        </span>
                        <span className="city d-block mb-3">
                          California, USA
                        </span>
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2" />
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2" />
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
                        <a
                          href="property-single"
                          className="btn btn-primary py-2 px-3">
                          See details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* .item */}
                  <div className="property-item">
                    <a href="property-single" className="img">
                      <img
                        src="images/img_7.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <div className="property-content">
                      <div className="price mb-2">
                        <span>$1,291,000</span>
                      </div>
                      <div>
                        <span className="d-block mb-2 text-black-50">
                          5232 California Fake, Ave. 21BC
                        </span>
                        <span className="city d-block mb-3">
                          California, USA
                        </span>
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2" />
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2" />
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
                        <a
                          href="property-single"
                          className="btn btn-primary py-2 px-3">
                          See details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* .item */}
                  <div className="property-item">
                    <a href="property-single" className="img">
                      <img
                        src="images/img_8.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <div className="property-content">
                      <div className="price mb-2">
                        <span>$1,291,000</span>
                      </div>
                      <div>
                        <span className="d-block mb-2 text-black-50">
                          5232 California Fake, Ave. 21BC
                        </span>
                        <span className="city d-block mb-3">
                          California, USA
                        </span>
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2" />
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2" />
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
                        <a
                          href="property-single"
                          className="btn btn-primary py-2 px-3">
                          See details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* .item */}
                  <div className="property-item">
                    <a href="property-single" className="img">
                      <img
                        src="images/img_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <div className="property-content">
                      <div className="price mb-2">
                        <span>$1,291,000</span>
                      </div>
                      <div>
                        <span className="d-block mb-2 text-black-50">
                          5232 California Fake, Ave. 21BC
                        </span>
                        <span className="city d-block mb-3">
                          California, USA
                        </span>
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2" />
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2" />
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
                        <a
                          href="property-single"
                          className="btn btn-primary py-2 px-3">
                          See details
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* .item */}
                </div>
                <div
                  id="property-nav"
                  className="controls"
                  tabIndex={0}
                  aria-label="Carousel Navigation">
                  <span
                    className="prev"
                    data-controls="prev"
                    aria-controls="property"
                    tabIndex={-1}>
                    Prev
                  </span>
                  <span
                    className="next"
                    data-controls="next"
                    aria-controls="property"
                    tabIndex={-1}>
                    Next
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====Features====*/}
      <section className="features-1">
        <div className="container">
          <div className="row">
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={300}>
              <div className="box-feature">
                <span className="flaticon-house" />
                <h3 className="mb-3">Our Properties</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, accusamus.
                </p>
                <p>
                  <a href="#" className="learn-more">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={500}>
              <div className="box-feature">
                <span className="flaticon-building" />
                <h3 className="mb-3">Property for Sale</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, accusamus.
                </p>
                <p>
                  <a href="#" className="learn-more">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={400}>
              <div className="box-feature">
                <span className="flaticon-house-3" />
                <h3 className="mb-3">Real Estate Agent</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, accusamus.
                </p>
                <p>
                  <a href="#" className="learn-more">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
            <div
              className="col-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={600}>
              <div className="box-feature">
                <span className="flaticon-house-1" />
                <h3 className="mb-3">House for Sale</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, accusamus.
                </p>
                <p>
                  <a href="#" className="learn-more">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section sec-testimonials">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-md-6">
              <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">
                Client Reviews
              </h2>
            </div>
            <div className="col-md-6 text-md-end">
              <div id="testimonial-nav">
                <span className="prev" data-controls="prev">
                  Prev
                </span>
                <span className="next" data-controls="next">
                  Next
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4" />
          </div>
          <div className="testimonial-slider-wrap">
            <div className="testimonial-slider">
              <div className="item">
                <div className="testimonial">
                  <img
                    src="images/person_1-min.jpg"
                    alt="Image"
                    className="img-fluid rounded-circle w-25 mb-4"
                  />
                  <div className="rate">
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                  </div>
                  <h3 className="h5 text-primary mb-4">James Smith</h3>
                  <blockquote>
                    <p>
                      “Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.”
                    </p>
                  </blockquote>
                  <p className="text-black-50">Designer, Co-founder</p>
                </div>
              </div>
              <div className="item">
                <div className="testimonial">
                  <img
                    src="images/person_2-min.jpg"
                    alt="Image"
                    className="img-fluid rounded-circle w-25 mb-4"
                  />
                  <div className="rate">
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                  </div>
                  <h3 className="h5 text-primary mb-4">Mike Houston</h3>
                  <blockquote>
                    <p>
                      “Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.”
                    </p>
                  </blockquote>
                  <p className="text-black-50">Designer, Co-founder</p>
                </div>
              </div>
              <div className="item">
                <div className="testimonial">
                  <img
                    src="images/person_3-min.jpg"
                    alt="Image"
                    className="img-fluid rounded-circle w-25 mb-4"
                  />
                  <div className="rate">
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                  </div>
                  <h3 className="h5 text-primary mb-4">Cameron Webster</h3>
                  <blockquote>
                    <p>
                      “Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.”
                    </p>
                  </blockquote>
                  <p className="text-black-50">Designer, Co-founder</p>
                </div>
              </div>
              <div className="item">
                <div className="testimonial">
                  <img
                    src="images/person_4-min.jpg"
                    alt="Image"
                    className="img-fluid rounded-circle w-25 mb-4"
                  />
                  <div className="rate">
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                    <span className="icon-star text-warning" />
                  </div>
                  <h3 className="h5 text-primary mb-4">Dave Smith</h3>
                  <blockquote>
                    <p>
                      “Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.”
                    </p>
                  </blockquote>
                  <p className="text-black-50">Designer, Co-founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-4 bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-5">
              <h2 className="font-weight-bold heading text-primary mb-4">
                Let's find home that's perfect for you
              </h2>
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                enim pariatur similique debitis vel nisi qui reprehenderit.
              </p>
            </div>
          </div>
          <div className="row justify-content-between mb-5">
            <div className="col-lg-7 mb-5 mb-lg-0 order-lg-2">
              <div className="img-about dots">
                <img
                  src="images/hero_bg_3.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-home2" />
                </span>
                <div className="feature-text">
                  <h3 className="heading">2M Properties</h3>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
                  </p>
                </div>
              </div>
              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-person" />
                </span>
                <div className="feature-text">
                  <h3 className="heading">Top Rated Agents</h3>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
                  </p>
                </div>
              </div>
              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-security" />
                </span>
                <div className="feature-text">
                  <h3 className="heading">Legit Properties</h3>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row section-counter mt-5">
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={300}>
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-primary">3298</span>
                </span>
                <span className="caption text-black-50">
                  # of Buy Properties
                </span>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={400}>
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-primary">2181</span>
                </span>
                <span className="caption text-black-50">
                  # of Sell Properties
                </span>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={500}>
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-primary">9316</span>
                </span>
                <span className="caption text-black-50">
                  # of All Properties
                </span>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={600}>
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-primary">7191</span>
                </span>
                <span className="caption text-black-50"># of Agents</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div
          className="row justify-content-center footer-cta"
          data-aos="fade-up">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="mb-4">Be a part of our growing real state agents</h2>
            <p>
              <a
                href="#"
                target="_blank"
                className="btn btn-primary text-white py-3 px-4">
                Apply for Real Estate agent
              </a>
            </p>
          </div>
          {/* /.col-lg-7 */}
        </div>
        {/* /.row */}
      </div>
      <div className="section section-5 bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-6 mb-5">
              <h2 className="font-weight-bold heading text-primary mb-4">
                Our Agents
              </h2>
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                enim pariatur similique debitis vel nisi qui reprehenderit
                totam? Quod maiores.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="h-100 person">
                <img
                  src="images/person_1-min.jpg"
                  alt="Image"
                  className="img-fluid"
                />
                <div className="person-contents">
                  <h2 className="mb-0">
                    <a href="#">James Doe</a>
                  </h2>
                  <span className="meta d-block mb-3">Real Estate Agent</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere officiis inventore cumque tenetur laboriosam, minus
                    culpa doloremque odio, neque molestias?
                  </p>
                  <ul className="social list-unstyled list-inline dark-hover">
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="icon-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="icon-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="icon-linkedin" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="icon-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="h-100 person">
                <img
                  src="images/person_2-min.jpg"
                  alt="Image"
                  className="img-fluid"
                />
                <div className="person-contents">
                  <h2 className="mb-0">
                    <a href="#">Jean Smith</a>
                  </h2>
                  <span className="meta d-block mb-3">Real Estate Agent</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere officiis inventore cumque tenetur laboriosam, minus
                    culpa doloremque odio, neque molestias?
                  </p>
                  <ul className="social list-unstyled list-inline dark-hover">
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="icon-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="icon-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="icon-linkedin" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="icon-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="h-100 person">
                <img
                  src="images/person_3-min.jpg"
                  alt="Image"
                  className="img-fluid"
                />
                <div className="person-contents">
                  <h2 className="mb-0">
                    <a href="#">Alicia Huston</a>
                  </h2>
                  <span className="meta d-block mb-3">Real Estate Agent</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere officiis inventore cumque tenetur laboriosam, minus
                    culpa doloremque odio, neque molestias?
                  </p>
                  <ul className="social list-unstyled list-inline dark-hover">
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="icon-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="icon-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="icon-linkedin" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="icon-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====Footer====*/}
      <div className="site-footer">
        {/*====Footer Contact Form====*/}
        <div className="section">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-4 mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-delay={100}>
                <div className="contact-info">
                  <div className="address mt-2">
                    <i className="icon-room" />
                    <h4 className="mb-2">Mardan Office Location:</h4>
                    <p>
                      House No: 377, Street No: 08, Sector R, Sheikh Maltoon
                      Town Mardan.
                    </p>
                  </div>
                  <div className="address mt-2">
                    <i className="icon-room" />
                    <h4 className="mb-2">Islamabad Office Location:</h4>
                    <p>Tower 3, G-15.</p>
                  </div>
                  <div className="open-hours mt-4">
                    <i className="icon-clock-o" />
                    <h4 className="mb-2">Open Hours:</h4>
                    <p>
                      Monday - Saturday:
                      <br />
                      10:00 AM - 06:00 PM
                    </p>
                  </div>
                  <div className="email mt-4">
                    <i className="icon-envelope" />
                    <h4 className="mb-2">Email:</h4>
                    <p>
                      <a href="mailto:info@mydomain.com">info@domain.com</a>
                    </p>
                  </div>
                  <div className="phone mt-4">
                    <i className="icon-phone" />
                    <h4 className="mb-2">Call:</h4>
                    <p>
                      <a href="tel://923177779844">+92 317 777 98 44</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8" data-aos="fade-up" data-aos-delay={200}>
                <form action="#">
                  <div className="row">
                    <div className="col-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-6 mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={7}
                        className="form-control"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="submit"
                        defaultValue="Send Message"
                        className="btn btn-primary"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*====Footer Contact Form End*/}
        <div className="container">
          <div className="row">
            {/*====Usefuls====*/}
            <div className="col-lg-6">
              <div className="widget">
                <h3>Usefuls</h3>
                <ul className="list-unstyled links">
                  <li className="px-2">
                    <a href="about.html">About us</a>
                  </li>
                  <li className="px-2">
                    <a href="contact.html">Contact us</a>
                  </li>
                  <li className="px-2">
                    <a href="services.html">Services</a>
                  </li>
                  <li className="px-2">
                    <a href="#">Terms</a>
                  </li>
                  <li className="px-2">
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
            {/*====UseFuls End====*/}
            <div className="col-lg-6">
              {/*====Social Icons====*/}
              <div className="widget">
                <ul className="list-unstyled social">
                  <li className="px-2">
                    <a href="https://www.instagram.com/gloriousrealestates.pk/">
                      <span className="icon-instagram" />
                    </a>
                  </li>
                  <li className="px-2">
                    <a href="#">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                  <li className="px-2">
                    <a href="https://www.facebook.com/gloriousrealestates.pk">
                      <span className="icon-facebook" />
                    </a>
                  </li>
                  <li className="px-2">
                    <a href="#">
                      <span className="icon-linkedin" />
                    </a>
                  </li>
                  <li className="px-2">
                    <a href="#">
                      <span className="icon-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*===Social Icons End===*/}
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-center">
              <p>
                Copyright © . All Rights Reserved. — Designed &amp; Develop with
                ♥ by
                <a href="https://beacontechh.com" target="_blank">
                  Beacontechh
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*====Footer End====*/}
      {/* Preloader */}
      <div id="overlayer" />
      <div className="loader">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <Script src="js/bootstrap.bundle.min.js"></Script>
      <Script src="js/tiny-slider.js"></Script>
      <Script src="js/aos.js"></Script>
      <Script src="js/navbar.js"></Script>
      <Script src="js/counter.js"></Script>
      <Script src="js/custom.js"></Script>
    </>
  );
}
