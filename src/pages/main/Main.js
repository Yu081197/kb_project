import { Image } from "react-bootstrap";
import "react-slideshow-image/dist/styles.css";
import "./Main.scss";


function Main() {
  return (
    <div className="container">
      <div className="mainContainer">
        <div className="mainBox">
          <div className="mainContainerSwiper">
            <div className="innerSwiper">
              <div className="item"></div>
            </div>
          </div>
        </div>

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
