import React from "react";
import "../assets/css/style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img01 from "../assets/images/team01.jpg";
import img02 from "../assets/images/team02.jpg";
import img03 from "../assets/images/team03.jpg";
import img04 from "../assets/images/team04.jpg";
import arrowright from "../assets/images/arrow-right.png";


const Team = () => {
  return (
    <>
      <section className="team-container">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="team-heading">
                <span className="c-red">m</span>
                <span className="c-yellow">e</span>
                <span className="c-blue">e</span>
                <span className="c-green">t</span>&nbsp;
                <span className="c-red">t</span>
                <span className="c-yellow">h</span>
                <span className="c-blue">e</span>&nbsp;
                <span className="c-green">T</span>
                <span className="c-red">e</span>
                <span className="c-yellow">a</span>
                <span className="c-blue">m</span>
                <span className="c-green">/</span>
                <span className="c-red">F</span>
                <span className="c-yellow">a</span>
                <span className="c-blue">m</span>
                <span className="c-green">i</span>
                <span className="c-red">l</span>
                <span className="c-yellow">y</span>
              </h2>
            </Col>
            <Col lg={3} md={6}>
              <div className="team-bl">
                <img src={img01} alt="" />
                <div className="team-info">
                    <h2>Kisha Nicole Stapp</h2>
                    <p>Our resident mother and CFO, graduated UCSB in 3 years with a degree in economics. She has worked for 10 years in accounting and audit work for a variety of public and private companies, most recently as the Senior Director of Global Accounting for a private company.</p>
                    <a href="!#" className="btn bg-green">CFO<i className="icon"><img src={arrowright} alt="icon" /></i></a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>           
              <div className="team-bl">
                <img src={img02} alt="" />
                <div className="team-info">
                    <h2>Adam Stapp</h2>
                    <p>Our resident father and COO graduated from San Jose State with a degree in finance and has worked for 7 years, most recently as the Senior Manager of Sales and Compensation.</p>
                    {/* <a href="!#" className="btn bg-purple">COO<i className="icon"><img src={arrowright} alt="icon" /></i></a> */}
                    <a href="!#" className="btn bg-rred">COO<i className="icon"><img src={arrowright} alt="icon" /></i></a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>             
              <div className="team-bl">
                <img src={img03} alt="" />
                <div className="team-info">
                    <h2>Gemini Kelly Andrews</h2>
                    <p>Our Uncle of the Year candidate, onesie enthusiast, and Creative Director has started or operated several businesses. He has been the creative force behind the DragonCamp concept, application design, and development.</p>
                    <a href="!#" className="btn bg-light-red">CREATIVE DIRECTOR<i className="icon"><img src={arrowright} alt="icon" /></i></a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>        
              <div className="team-bl">
                <img src={img04} alt="" />
                <div className="team-info">
                    <h2>Mark Muller</h2>
                    <p>Our resident Grandfather and Education Director with over 30 years of experience, most recently retired as the Assistant Superintendent of Instructional Services for Santa Maria-Bonita School District in Southern California.</p>
                    {/* <a href="!#" className="btn bg-light-blue">EDUCATION DIRECTOR<i className="icon"><img src={arrowright} alt="icon" /></i></a> */}
                    <a href="!#" className="btn bg-rred">EDUCATION DIRECTOR<i className="icon"><img src={arrowright} alt="icon" /></i></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Team;
