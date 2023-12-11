const Feedback = ({ dark }) => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title">
            <h3>
              <span>
                Award Winning and
                <br />
                Achiements
              </span>
            </h3>
          </div>
          <div className="testimonials_in">
            <img src={`img/hero/welcome.jpg`} alt="" />
            <div className="info">
              <div className="text">
                <p>
                  “Received Lime Light Award from Bibin John CEO of Apps Team Technologies. This journey has been a collaborative masterpiece of code,
                  innovation and team work. from late-night debugging  session to 'aha' moments of breakthrough, every line of code tells a story of resilience and creativity.”
                </p>
              </div>
              <div className="details">
                <h3 className="name">
                  <span>LIME LIGHT AWARD</span>
                </h3>
                <span className="job">Apps Team Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
