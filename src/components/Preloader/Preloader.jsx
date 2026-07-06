import { useEffect, useState } from "react";
// import logo from "../../assets/images/logos/logormv.png";
import logo from "../../assets/logo/logormv.png";
import "./Preloader.css";

export default function Preloader({ onFinish, duration = 2600 }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), duration);
    const removeTimer = setTimeout(() => {
      onFinish && onFinish();
    }, duration + 500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [duration, onFinish]);

  return (
    <div className={`preloader ${fading ? "preloader-hide" : ""}`}>
      <div className="preloader-inner">
        <div className="preloader-ring-wrap">
          <div className="preloader-ring" aria-hidden="true" />
          <img
            src={logo}
            alt="Ali Tech Solution"
            className="preloader-logo"
          />
        </div>

        <p className="preloader-text">
          Welcome to <span className="grad-text">Ali Tech Solution</span>
        </p>
        <span className="preloader-sub">Loading your experience...</span>
      </div>
    </div>
  );
}