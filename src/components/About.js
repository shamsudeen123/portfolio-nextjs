const About = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            <div className="box">
              <h3 className="year">3</h3>
              <span className="experience">Years of Experience</span>
              <h3 className="name">SAMSU</h3>
            </div>
          </div>
          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>About Me</span>
              </h3>
            </div>
            <div className="text">
              <p>
                Software developer with 3 years of experience in corporate software applications.Expertise in React JS, Next JS, React Native, Node JS.
                With a passion for crafting seamless digital experiences, I'm dedicated to translating innovative ideas into efficient, user-friendly software solutions.
                I'm always excited to collaborate with fellow developers, designers, or tech enthusiasts. Whether it's brainstorming innovative solutions or diving deep into tech discussions, I'm here for it!

              </p>
            </div>
            <div className="short">
              <div className="orido_tm_boxed_button">
                <a href="img/cv/Samsudeen_SM_Resume.pdf" download>
                  Download CV{" "}
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div>
              {/* <img src="img/signature.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
