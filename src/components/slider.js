import React from "react";

const Slider = () => {
  return (
    <>
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
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="3"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="4"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="5"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="6"
          ></button>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="slide-img-item">
              <div
                className="home-banner-img"
                style={{
                  backgroundImage: `url("/assets/slide1.jpg")`,
                }}
              ></div>
              <div class="carousel-caption">
                <p>AWESOME</p>
                <h1>WEBSITE TEMPLATE</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur nemo quas obcaecati perferendis nisi molestiae cum
                  fugit earum tempore dolor modi aspernatur at fugiat veritatis
                  harum porro, quam voluptatem? Nisi!
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="slide-img-item">
              <div
                className="home-banner-img"
                style={{
                  backgroundImage: `url("/assets/slide2.jpg")`,
                }}
              ></div>
              <div class="carousel-caption">
                <p>AWESOME</p>
                <h1>WEBSITE TEMPLATE</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur nemo quas obcaecati perferendis nisi molestiae cum
                  fugit earum tempore dolor modi aspernatur at fugiat veritatis
                  harum porro, quam voluptatem? Nisi!
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="slide-img-item">
              <div
                className="home-banner-img"
                style={{
                  backgroundImage: `url("/assets/slide3.jpg")`,
                }}
              ></div>
              <div class="carousel-caption">
                <p>AWESOME</p>
                <h1>WEBSITE TEMPLATE</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur nemo quas obcaecati perferendis nisi molestiae cum
                  fugit earum tempore dolor modi aspernatur at fugiat veritatis
                  harum porro, quam voluptatem? Nisi!
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="slide-img-item">
              <div
                className="home-banner-img"
                style={{
                  backgroundImage: `url("/assets/slide4.jpg")`,
                }}
              ></div>
              <div class="carousel-caption">
                <p>AWESOME</p>
                <h1>WEBSITE TEMPLATE</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur nemo quas obcaecati perferendis nisi molestiae cum
                  fugit earum tempore dolor modi aspernatur at fugiat veritatis
                  harum porro, quam voluptatem? Nisi!
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="slide-img-item">
              <div
                className="home-banner-img"
                style={{
                  backgroundImage: `url("/assets/slide5.jpg")`,
                }}
              ></div>
              <div class="carousel-caption">
                <p>AWESOME</p>
                <h1>WEBSITE TEMPLATE</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur nemo quas obcaecati perferendis nisi molestiae cum
                  fugit earum tempore dolor modi aspernatur at fugiat veritatis
                  harum porro, quam voluptatem? Nisi!
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="slide-img-item">
              <div
                className="home-banner-img"
                style={{
                  backgroundImage: `url("/assets/slide6.jpg")`,
                }}
              ></div>
              <div class="carousel-caption">
                <p>AWESOME</p>
                <h1>WEBSITE TEMPLATE</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur nemo quas obcaecati perferendis nisi molestiae cum
                  fugit earum tempore dolor modi aspernatur at fugiat veritatis
                  harum porro, quam voluptatem? Nisi!
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="slide-img-item">
              <div
                className="home-banner-img"
                style={{
                  backgroundImage: `url("/assets/slide7.jpg")`,
                }}
              ></div>
              <div class="carousel-caption">
                <p>AWESOME</p>
                <h1>WEBSITE TEMPLATE</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur nemo quas obcaecati perferendis nisi molestiae cum
                  fugit earum tempore dolor modi aspernatur at fugiat veritatis
                  harum porro, quam voluptatem? Nisi!
                </p>
              </div>
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
