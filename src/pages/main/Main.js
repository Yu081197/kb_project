import { Image } from "react-bootstrap";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Main.scss";

const slideImages = [
  {
    url: "image/main_banner_1.png",
    caption: "Slide 1",
  },
  {
    url: "images/main_banner_2.jpg",
    caption: "Slide 2",
  },
];

function Main() {
  return (
    <div className="container">
      <div className="mainContainer">
        <Image className="mainBox" src="image/main_banner_1.png" />

        <div className="news">
          <div>news</div>
          <div>news</div>
          <div>news</div>
          <div>news</div>
          <div>news</div>
        </div>

        <div className="new">
          <div>new</div>
          <div>new</div>
          <div>new</div>
          <div>new</div>
          <div>new</div>
          <div>new</div>
        </div>

        <div className="event">
          <div>event</div>
          <div>event</div>
          <div>event</div>
          <div>event</div>
          <div>event</div>
          <div>event</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
