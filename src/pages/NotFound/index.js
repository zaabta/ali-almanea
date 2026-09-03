import FuzzyText from "../Hero/FuzzyText";
import { Link } from "react-router-dom";
import "./not-found.scss";

const NotFound = () => (
  <main className="not-found-page">
    <div className="not-found-content">
      <FuzzyText className="not-found-label" fontSize={14} fontWeight={600} baseIntensity={0.25} hoverIntensity={0.43} enableHover>Page not found</FuzzyText>
      <FuzzyText baseIntensity={0.43} hoverIntensity={0.5} enableHover fontSize={150} fontWeight={600}>404</FuzzyText>
      <h1><FuzzyText fontSize={40} fontWeight={600} baseIntensity={0.22} hoverIntensity={0.42} enableHover>This route does not exist.</FuzzyText></h1>
      <p><FuzzyText fontSize={16} fontWeight={400} baseIntensity={0.18} hoverIntensity={0.35} enableHover>The page may have moved, or the URL may be incorrect.</FuzzyText></p>
      <Link className="not-found-link" to="/">Return to portfolio</Link>
    </div>
  </main>
);

export default NotFound;
