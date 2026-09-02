import { useId } from "react";
import "./logo.scss";

const Logo = () => <LogoMark />;

const LogoMark = () => {
  const titleId = useId();
  return (
    <a className="personal-logo" href="#home" aria-label="Ali Almanea — home">
      <svg viewBox="0 0 84 42" role="img" aria-labelledby={titleId}>
        <title id={titleId}>Ali Almanea developer logo</title>
        <path className="logo-mark" d="M20 9 7 21l13 12M64 9l13 12-13 12M51 7 35 35" />
      </svg>
    </a>
  );
};

export default Logo;
