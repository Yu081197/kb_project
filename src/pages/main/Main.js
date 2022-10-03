import style from "./Main.scss";
import { Image } from "react-bootstrap";

function Main() {
  return (
    <div className="main">
      <Image className="mainBox" src="image/kbmain.png" />

      <div className="news">
        <div>news</div>
        <div>news</div>
        <div>news</div>
        <div>news</div>
        <div>news</div>
      </div>

      <div className="new">
        새소식
        <div>new</div>
      </div>

      <div className="event">
        이벤트
        <div>event</div>
      </div>
    </div>
  );
}

export default Main;
