import "./hero.scss";
import { useContext } from "react";
import ThemeContext from "../../context";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import Typewriter from 'typewriter-effect'
import FuzzyText from './FuzzyText';

const Hero = ({ id = "home" }) => {
  const { height } = useContext(ThemeContext);
  const shapes = [
    "https://retro-show-r3tr0.vercel.app/static/a7bb949e6d0d488a85cb39612f19aecb/f1913/1.png",
    "https://retro-show-r3tr0.vercel.app/static/64163140e3dc3c1aad4243465e50acd4/b6970/10.png",
    "https://retro-show-r3tr0.vercel.app/static/556c1746a1f0e3ede5b29ce5282a8410/6f0bd/2.png",
    "https://retro-show-r3tr0.vercel.app/static/f297f859f749ae544e59a4914ceeefd9/f1913/3.png",
    "https://retro-show-r3tr0.vercel.app/static/ad8cd4b553efa809d197aadf994cff55/f1913/4.png",
    "https://retro-show-r3tr0.vercel.app/static/ee0f2ee1da7023a95bdaec5dcc8fb4fc/f1913/5.png",
    "https://retro-show-r3tr0.vercel.app/static/85e073d211cb9af83ccc592733d9b264/f1913/6.png",
    "https://retro-show-r3tr0.vercel.app/static/cb8939dde0a808f387fea7be78a1c8b2/f1913/7..png",
    "https://retro-show-r3tr0.vercel.app/static/78893cb2b3ed4a16e83c80c7b1539bcc/8752b/8.png",
    "https://retro-show-r3tr0.vercel.app/static/f4ec350feb3583c8a1c09fc6d8d878ba/a079b/9.png",
  ]
  const icons = () => {
    return shapes.map((value, index) => {
      return (
        <img
          src={value}
          className="float-image"
          style={{
            left: `${index * 10}%`,
            bottom: `${Math.random() *
              (+(index % 2 === 0 ? 80 : 20) - +(index % 2 === 0 ? 70 : 10)) +
              +(index % 2 === 0 ? 70 : 10)}%`,
          }}
          alt=""
          key={index}
        />
      )
    })
  }
  return (
    <section id={id} className="hero" style={{ height }}>
      <Row>
        <Col md={6} className="content">
          <div className="content-text">
            <div className="line-text">
              <h4>Hello, I'm</h4>
            </div>
            <h1>
              <FuzzyText fontSize={84} fontWeight={600} fontFamily="Poppins, sans-serif" color="#fff" baseIntensity={0.27} hoverIntensity={0.58} fuzzRange={24} enableHover glitchMode glitchInterval={2200} glitchDuration={180}>Ali Almanea</FuzzyText>
            </h1>
            <Typewriter
              options={{
                strings: [
                  "Senior Full Stack Engineer",
                  "Scalable Systems Builder",
                  "AI Product Engineer",
                ],
                autoStart: true,
                loop: true
              }}
            />
            <p className="hero-description">
              I build scalable web platforms, backend systems, and AI-powered
              products from idea to production.
            </p>
            <div className="hero-actions">
              <a className="hover-button" href="#projects"><span>View My Work</span></a>
              <a className="cv-button" href={`${process.env.PUBLIC_URL}/full%20stack%20ai.pdf`} download="Ali-Almanea-CV.pdf"><FontAwesomeIcon icon={faFileArrowDown} aria-hidden="true" /> Download CV</a>
              <a className="hero-link" href="#contact">Let’s Connect</a>
            </div>
          </div>
          {icons()}
        </Col>
        <Col md={6} className="img">
          <img
            src={process.env.PUBLIC_URL + "/assets/hero-avatar.png"}
            alt="Ali Almanea, Senior Full Stack Engineer"
          />
        </Col>
      </Row>
    </section>
  );
};

export default Hero;
