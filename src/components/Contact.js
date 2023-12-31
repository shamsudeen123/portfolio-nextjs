const Contact = () => {
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">
            <div className="video_button">
              {/* <a
                className="popup-youtube"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
              > */}
                <img
                  className="anim_circle"
                  src="img/hero/1.jpg"
                  alt=""
                />
                {/* <img className="svg" src="img/svg/play.svg" alt="" /> */}
              {/* </a> */}
            </div>
            <div className="text">
              <h3>{`Let's`} work together</h3>
              <p>
              {`Let's`} embark on this journey together, where your objectives become our mission, and our collaborative efforts pave the way for your business triumph.
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href="#">
                Say Hello <img className="svg" src="img/svg/send.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="connect">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Call:</span>
                  <p>
                    <a className="line_effect" href="tel:+917025963669" target="_blank" rel="noopener noreferrer">
                     +91 702-596-3669
                    </a>
                  </p>
                </li>
                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a className="line_effect" href="mailto:chanchuthayal@gmail.com" target="_blank" rel="noopener noreferrer">
                      chanchuthayal@gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow">
                <span>Follow me:</span>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/samsudeen-sm-9b73a7183/" target="_blank" rel="noopener noreferrer">
                      <img className="svg" src="img/svg/social/linkedin.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/shamsudeen123" target="_blank" rel="noopener noreferrer">
                      <img
                        className="svg"
                        src="img/svg/social/github.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/c.h.a.n.c.h.u/" target="_blank" rel="noopener noreferrer">
                      <img
                        className="svg"
                        src="img/svg/social/instagarm.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;
