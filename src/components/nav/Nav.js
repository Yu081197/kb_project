import { Image } from "react-bootstrap";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <Image className="mainLogo" src="image/kbmain.png" />
        </Link>
        <div className="headerLogin">
          <div>안녕하세요 도깨비님</div>
        </div>
      </div>

      <div className="nav">
        <NavLink
          exact
          to="/account_create"
          style={{ textDecoration: "none", color: "black" }}
          className="navTab"
        >
          계좌개설
        </NavLink>
        <NavLink
          to="/account_lookup"
          style={{ textDecoration: "none", color: "black" }}
          activeClassName="active"
          className="navTab"
        >
          계좌조회
        </NavLink>
        <NavLink
          to="/transfer"
          style={{ textDecoration: "none", color: "black" }}
          className="navTab"
          activeClassName="active"
        >
          이체
        </NavLink>
        <NavLink
          to="/find"
          style={{ textDecoration: "none", color: "black" }}
          className="navTab"
          activeClassName="active"
        >
          점포찾기
        </NavLink>
        <NavLink
          to="/predict"
          style={{ textDecoration: "none", color: "black" }}
          className="navTab"
          activeClassName="active"
        >
          신용등급예측
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
