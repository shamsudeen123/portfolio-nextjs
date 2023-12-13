const Header = ({ dark }) => {
  return (
    <div className="orido_tm_header">
      <div className="header_in">
        <div className="logo">
          <a href="#">
            <img src={`img/logo/${dark ? "light" : "logo"}.png`} alt="" />
          </a>
        </div>
        <div className="menu">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            {/* <li>
              <a href="#service">Service</a>
            </li> */}
            <li>
              <a href="#portfolio">Projects</a>
            </li>
            {/* <li>
              <a href="#blog">Blog</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span className="ccc" />
        </div>
        <div className="button">
          <a
            href="https://www.linkedin.com/in/samsudeen-sm-9b73a7183/"
            target="_blank"
          >
            Linked In
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
