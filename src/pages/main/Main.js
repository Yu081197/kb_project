import style from "./Main.scss";
import { Image } from "react-bootstrap";

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
