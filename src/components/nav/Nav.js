import { Image } from "react-bootstrap";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="header">
        <NavLink to="/">
          <Image className="mainLogo" src="image/kbmain.png" />
        </NavLink>
        <div className="headerLogin">
          <div>안녕하세요 도깨비님</div>
        </div>
      </div>

      <div className="nav">
        <Link
          to="/account_create"
          style={{ textDecoration: "none" }}
          className="navTab"
        >
          <div>계좌개설</div>
        </Link>
        <Link
          to="/account_lookup"
          style={{ textDecoration: "none" }}
          className="navTab"
        >
          <div>계좌조회</div>
        </Link>
        <Link
          to="/transfer"
          style={{ textDecoration: "none" }}
          className="navTab"
        >
          <div>이체</div>
        </Link>
        <Link to="/find" style={{ textDecoration: "none" }} className="navTab">
          <div>점포찾기</div>
        </Link>
        <Link
          to="/predict"
          style={{ textDecoration: "none" }}
          className="navTab"
        >
          <div>신용등급예측</div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
