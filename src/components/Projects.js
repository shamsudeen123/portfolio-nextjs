import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);
  const [detailsPopup, setDetailsPopup] = useState(false);

  return (
    <Fragment>
      <DetailsPopup close={() => setDetailsPopup(false)} open={detailsPopup} />
      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Look at my
                  <br />
                  recent projects
                </span>
              </h3>
            </div>
            <div className="portfolio_list">
              <Swiper
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/service/growthscape.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Web App</span>
                      <h3 className="title">
                        <span>Growthscape</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link popup-youtube"
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/service/growthscape.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Mobile App</span>
                      <h3 className="title">
                        <span>Growthscape</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link popup-youtube"
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="">
                      {/* <img src="img/thumbs/37-40.jpg" alt="" /> */}
                      <img
                        // className="main"
                        src="img/service/HF_logo.png"
                        style={{objectFit: "contain", height: 360, borderRadius: 12}}
                      />
                    </div>
                    <div className="details">
                      <span className="category">Web App</span>
                      <h3 className="title">
                        <span>Hunter Finance</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link popup-vimeo"
                      href="https://vimeo.com/337293658"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="" style={{objectFit: "fill"}}>
                      {/* <img src="img/thumbs/37-40.jpg" alt="" /> */}
                      <img
                        className="main"
                        src="img/service/GSP.jpg"
                        style={{objectFit: "fill", height: 360, borderRadius: 12}}
                      />
                    </div>
                    <div className="details">
                      <span className="category">Web App</span>
                      <h3 className="title">
                        <span>Gold Star Products</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="">
                    {/* <img src="img/thumbs/37-40.jpg" alt="" /> */}
                      <img
                        className="main"
                        src="img/service/logo.svg"
                        style={{objectFit: "fill", height: 360, borderRadius: 12}}
                      />
                    </div>
                    <div className="details">
                      <span className="category">Product</span>
                      <h3 className="title">
                        <span>AI Attendance System</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link c-pointer"
                      onClick={() => setDetailsPopup(true)}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/service/EBT.svg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Product</span>
                      <h3 className="title">
                        <span>Epic Bug Tracker</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link zoom"
                      href="img/portfolio/5.jpg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/service/EBT.svg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/5.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Web App</span>
                      <h3 className="title">
                        <span>Benesys</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link zoom"
                      href="img/portfolio/5.jpg"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="" />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
