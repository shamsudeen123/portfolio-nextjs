const Home = ({ dark }) => {
  return (
    <div className="orido_tm_hero orido_tm_section" id="home">
      <div className="container">
        <div className="content">
          <div className="details">
            <div className="short margin-top-120">
              <h3>
                Samsudeen SM <img className="svg" src="img/svg/hi.svg" alt="" />
              </h3>
              <span className="job">Software Developer</span>
            </div>
            <div className="text">
              <p>
              Welcome to my portfolio, I am a software Developer based in UAE. I specialize in crafting cutting-edge solutions through code, transforming ideas into robust, user-centric software. With a passion for technology and a drive for excellence, I bring to life intuitive applications that solve real-world problems. Explore my portfolio to witness the seamless fusion of creativity and technical expertise, exemplifying my commitment to delivering high-quality, impactful software solutions. Join me on a journey through a collection of projects that showcase my dedication to building tomorrows technology today.
              </p>
            </div>
            <div className="buttons" style={{marhinTop: 20}}>
              <div className="orido_tm_boxed_button">
                <a className="anchor" href="#contact">
                  Say Hello{" "}
                  <img className="svg" src="img/svg/send.svg" alt="" />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <img className="svg" src="img/svg/top-arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
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
                <img className="svg" src="img/svg/social/github.svg" alt="" />
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
      {/* <div className="orido_tm_down" style={{display: 'flex', justifyContent: 'center'}}>
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`img/svg/${dark ? "down_button_light" : "down_button"}.svg`}
            alt=""
          />
        </a>
      </div> */}
      <div className="avatar large-screen-visible" style={{display: 'flex', justifyContent: 'center', marginBottom: 50}}>
        <div className="img">
          <img src={`img/hero/${dark ? 2 : 1}.jpg`} alt="" style={{height: "80vh"}} />
        </div>
      </div>
    </div>
  );
};
export default Home;
