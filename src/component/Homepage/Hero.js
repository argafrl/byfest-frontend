// import React from "react";
// import { Parallax } from "react-parallax";
// import bgImage from "../../assets/image/Jumbotron-Byfest.jpg";
// import logoUtama from "../../assets/image/byfest_kuning.png";
// import "./Hero.scss";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <Parallax bgImage={bgImage} strength={800}>
//       <div className="hero">
//         <img src={logoUtama} alt="" />
//         <h1>BRAWIJAYA FILM FESTIVAL</h1>
//         <p>19 - 20 Oktober 2021</p>
//         <a target="_blank" href="https://forms.gle/pSu4boUPGVjWUR8S8">
//           <button>Get Ticket</button>
//         </a>
//       </div>
//     </Parallax>
//   );
// };

// export default Hero;

import React from "react";
import { Parallax } from "react-parallax";
import bgImage from "../../assets/image/Jumbotron-Byfest.jpg";
import bgVideo from "../../assets/video/stock-video.mp4";
import logoUtama from "../../assets/image/byfest_kuning.png";
import "./Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      {window.innerWidth < 768 ? (
        <img
          src={bgImage}
          alt=""
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      )}

      <img src={logoUtama} alt="" />
      <h1>BRAWIJAYA FILM FESTIVAL</h1>
      <p>19 - 20 Oktober 2021</p>
      <a target="_blank" href="https://forms.gle/pSu4boUPGVjWUR8S8">
        <button>Get Ticket</button>
      </a>
    </div>
  );
};

export default Hero;
