import "./about.scss";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ThemeContext from "../../context";
import Particles from "../../components/particles";

const About = ({ id = "about" }) => {
  const { height } = useContext(ThemeContext);
  return (
    <section
      id={id}
      className="about"
      style={{ height}}
    >
      <Particles/>
      <Row>
        <Col md={6} className="content">
          <div className="content-text">
            <div className="line-text">
              <h4>About Me</h4>
            </div>
            <h3>Senior Full Stack Engineer building intelligent products.</h3>
            <div className="separator" />
            <p>
              I’m a Senior Full Stack Engineer with 4+ years of experience
              building high-performance web platforms, scalable SaaS products,
              and AI-driven applications.
              <br /><br />
              My work spans frontend architecture, backend systems, APIs,
              databases, distributed architectures, cloud infrastructure, and
              AI applications. I enjoy turning complex problems into reliable
              products with clean architecture and measurable business value.
            </p>
            <div className="social social_icons">
              <a href="https://github.com/zaabta" target="_blank" rel="noopener noreferrer" aria-label="Ali Almanea on GitHub"><FontAwesomeIcon icon={faGithub} className="social_icon" /></a>
              <a href="https://www.linkedin.com/in/ali-almanea/" target="_blank" rel="noopener noreferrer" aria-label="Ali Almanea on LinkedIn"><FontAwesomeIcon icon={faLinkedin} className="social_icon" /></a>
            </div>
          </div>
        </Col>
        <Col md={6} className="skills">
          <div className="line-text"><h4>Engineering Focus</h4></div>
          <div className="focus-list">
            <span>Frontend architecture</span><span>Backend systems</span><span>AI applications</span><span>Cloud infrastructure</span>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
