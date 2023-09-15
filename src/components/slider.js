import React from "react";

const Slider = () => {
  return (
    <>
      {/* <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="home-banne-img"
              style={{
                backgroundImage: `url("/assets/wcs.jpg")`,
              }}
            ></div>
            <div className="carousel-caption"></div>
          </div>
          <div className="carousel-item">
            <div
              className="home-banne-img"
              style={{
                backgroundImage: `url("/assets/tpi.jpg")`,
              }}
            ></div>
            <div className="carousel-caption"></div>
          </div>
          <div className="carousel-item">
            <div
              className="home-banne-img"
              style={{
                backgroundImage: `url("/assets/nos.jpg")`,
              }}
            ></div>
            <div className="carousel-caption"></div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div> */}

      {/* <!-- Carousel --> */}
      <div id="demo" class="carousel slide" data-bs-ride="carousel">
        {/* <!-- Indicators/dots --> */}
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              className="home-banne-img"
              style={{
                backgroundImage: `url("/assets/wcs.jpg")`,
              }}
            ></div>
            <div class="carousel-caption">
              <h3>Los Angeles</h3>
              <p>We had such a great time in LA!</p>
            </div>
          </div>
          <div class="carousel-item">
            <div
              className="home-banne-img"
              style={{
                backgroundImage: `url("/assets/wcs.jpg")`,
              }}
            ></div>
            <div class="carousel-caption">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div>
          </div>
          <div class="carousel-item">
            <div
              className="home-banne-img"
              style={{
                backgroundImage: `url("/assets/wcs.jpg")`,
              }}
            ></div>
            <div class="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
            </div>
          </div>
        </div>

        {/* <!-- Left and right controls/icons --> */}
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
};

export default Slider;
