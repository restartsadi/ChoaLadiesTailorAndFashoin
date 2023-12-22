import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "New Arrivals Only",
            1000,
            "For Men, Women and Kids",
            1000,
            "Newest Collections....",
            1000,
          ]}
          speed={10}
          deletionSpeed={10}
          repeat={Infinity}
          className="h2"
        />
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="#" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
