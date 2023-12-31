import React, { useEffect, useState } from "react";
import { getFile, saveFile } from "../../utils/fileStorage";

const fileKey1 = "file1";
const fileKey2 = "file2";
const fileKey3 = "file3";
const fileKey4 = "file4";

const TheBest = () => {
  const [imageSrc1, setImageSrc1] = useState(null);
  const [imageSrc2, setImageSrc2] = useState(null);
  const [imageSrc3, setImageSrc3] = useState(null);
  const [imageSrc4, setImageSrc4] = useState(null);

  const handleUpload = (e, fileKey, setImageSrc) => {
    if (e.target.files) {
      const file = URL.createObjectURL(e.target.files[0]);
      saveFile(file, fileKey);
      setImageSrc(file);
    }
  };

  useEffect(() => {
    const file1 = getFile(fileKey1);
    const file2 = getFile(fileKey2);
    const file3 = getFile(fileKey3);
    const file4 = getFile(fileKey4);

    if (file1) setImageSrc1(file1);
    if (file2) setImageSrc2(file2);
    if (file3) setImageSrc3(file3);
    if (file4) setImageSrc4(file4);
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="the-best-main text-center">
            <h3>Let Them Know Why You're the Best</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <br />
            <div className="upload-area">
              <div className="row">
                <div className="col-lg-3 col-sm-12">
                  <div class="upload-img-main">
                    <div className="uploaded-img">
                      {imageSrc1 ? (
                        <img
                          className="demo-uploaded-img"
                          src={imageSrc1}
                          width={150}
                        />
                      ) : (
                        <div
                          className="demo-uploaded-img"
                          style={{
                            backgroundImage: `url("/assets/upload-images/demo.png")`,
                          }}
                        ></div>
                      )}
                      <div className="upload-btn-area">
                        {/* <button className="upload-btn">+</button> */}
                        <input
                          id="imageUpload"
                          className="file-upload-none"
                          type="file"
                          onChange={(e) =>
                            handleUpload(e, fileKey1, setImageSrc1)
                          }
                        />
                        <label htmlFor="imageUpload">
                          <i class="fas fa-plus"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div class="upload-img-main">
                    <div className="uploaded-img">
                      {imageSrc1 ? (
                        <img
                          className="demo-uploaded-img"
                          src={imageSrc1}
                          width={150}
                        />
                      ) : (
                        <div
                          className="demo-uploaded-img"
                          style={{
                            backgroundImage: `url("/assets/upload-images/demo.png")`,
                          }}
                        ></div>
                      )}
                      <div className="upload-btn-area">
                        {/* <button className="upload-btn">+</button> */}
                        <input
                          id="imageUpload"
                          className="file-upload-none"
                          type="file"
                          onChange={(e) =>
                            handleUpload(e, fileKey1, setImageSrc1)
                          }
                        />
                        <label htmlFor="imageUpload">
                          <i class="fas fa-plus"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div class="upload-img-main">
                    <div className="uploaded-img">
                      {imageSrc1 ? (
                        <img
                          className="demo-uploaded-img"
                          src={imageSrc1}
                          width={150}
                        />
                      ) : (
                        <div
                          className="demo-uploaded-img"
                          style={{
                            backgroundImage: `url("/assets/upload-images/demo.png")`,
                          }}
                        ></div>
                      )}
                      <div className="upload-btn-area">
                        {/* <button className="upload-btn">+</button> */}
                        <input
                          id="imageUpload"
                          className="file-upload-none"
                          type="file"
                          onChange={(e) =>
                            handleUpload(e, fileKey1, setImageSrc1)
                          }
                        />
                        <label htmlFor="imageUpload">
                          <i class="fas fa-plus"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div class="upload-img-main">
                    <div className="uploaded-img">
                      {imageSrc1 ? (
                        <img
                          className="demo-uploaded-img"
                          src={imageSrc1}
                          width={150}
                        />
                      ) : (
                        <div
                          className="demo-uploaded-img"
                          style={{
                            backgroundImage: `url("/assets/upload-images/demo.png")`,
                          }}
                        ></div>
                      )}
                      <div className="upload-btn-area">
                        {/* <button className="upload-btn">+</button> */}
                        <input
                          id="imageUpload"
                          className="file-upload-none"
                          type="file"
                          onChange={(e) =>
                            handleUpload(e, fileKey1, setImageSrc1)
                          }
                        />
                        <label htmlFor="imageUpload">
                          <i class="fas fa-plus"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <div className="cards-area-main">
                <div className="main-card-area text-center">
                  <div
                    className="cards-img-area"
                    style={{
                      backgroundImage: `url("/assets/upload-images/demo.png")`,
                    }}>
                  </div>
                  <div className="setting-icons">
                    <i class="fas fa-cog"></i>
                  </div>
                </div>
                <div className="heading-for-cards text-center">
                  <h3>Dexter Gilbert</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Id velit molestias sit ut nisi repellat itaque, nesciunt atque eligendi culpa</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12"><div className="cards-area-main">
              <div className="main-card-area text-center">
                <div
                  className="cards-img-area"
                  style={{
                    backgroundImage: `url("/assets/upload-images/demo.png")`,
                  }}>
                </div>
                <div className="setting-icons">
                  <i class="fas fa-laptop"></i>
                </div>
              </div>
              <div className="heading-for-cards text-center">
                <h3>My Collier</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Id velit molestias sit ut nisi repellat itaque, nesciunt atque eligendi culpa</p>
              </div>
            </div></div>
            <div className="col-lg-3 col-sm-12"><div className="cards-area-main">
              <div className="main-card-area text-center">
                <div
                  className="cards-img-area"
                  style={{
                    backgroundImage: `url("/assets/upload-images/demo.png")`,
                  }}>
                </div>
                <div className="setting-icons">
                  <i class="fas fa-user-circle"></i>
                </div>
              </div>
              <div className="heading-for-cards text-center">
                <h3>Stephen Morrison</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Id velit molestias sit ut nisi repellat itaque, nesciunt atque eligendi culpa</p>
              </div>
            </div></div>
            <div className="col-lg-3 col-sm-12"><div className="cards-area-main">
              <div className="main-card-area text-center">
                <div
                  className="cards-img-area"
                  style={{
                    backgroundImage: `url("/assets/upload-images/demo.png")`,
                  }}>
                </div>
                <div className="setting-icons">
                  <i class="fas fa-check-circle"></i>
                </div>
              </div>
              <div className="heading-for-cards text-center">
                <h3>Bill Smith</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Id velit molestias sit ut nisi repellat itaque, nesciunt atque eligendi culpa</p>
              </div>
            </div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheBest;
