import { Image } from "react-bootstrap";
import "./Nav.scss";

function Nav() {
  return (
    <div>
      <div className="header">
        <Image className="mainLogo" src="image/kbmain.png" />
        <div className="headerLogin">안녕하세요 도깨비님</div>
      </div>

      <div className="nav">
        <div className="navTab">계좌개설</div>
        <div className="navTab">계좌조회</div>
        <div className="navTab">이체</div>
        <div className="navTab">점포찾기</div>
        <div className="navTab">신용등급예측</div>
      </div>
    </div>
  );
}

export default Nav;
