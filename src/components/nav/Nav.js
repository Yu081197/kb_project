import { useState } from "react";
import { Image } from "react-bootstrap";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
import LoginModal from "../Modal/LoginModal";

function Nav() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <div>
      <div className="header">
        <Link to="/">
          <Image className="mainLogo" src="image/kbmain.png" />
        </Link>
        <div className="navHeader">
          <div className="nav">
            <NavLink
              exact
              to="/account_create"
              style={{ textDecoration: "none" }}
              className="navTab"
            >
              계좌개설
            </NavLink>
            <NavLink
              to="/account_lookup"
              style={{ textDecoration: "none" }}
              activeClassName="active"
              className="navTab"
            >
              계좌조회
            </NavLink>
            <NavLink
              to="/transfer"
              style={{ textDecoration: "none" }}
              className="navTab"
              activeClassName="active"
            >
              이체
            </NavLink>
            <NavLink
              to="/find"
              style={{ textDecoration: "none" }}
              className="navTab"
              activeClassName="active"
            >
              점포찾기
            </NavLink>
            <NavLink
              to="/predict"
              style={{ textDecoration: "none" }}
              className="navTab"
              activeClassName="active"
            >
              신용등급예측
            </NavLink>
          </div>
          <div className="headerLogin">
            <div style={{ display: "flex", gap: "20px" }}>
              <div>로그인</div>
              <button
                style={{ width: "20px", height: "20px" }}
                onClick={showModal}
              ></button>
            </div>
            {modalOpen && <LoginModal setModalOpen={setModalOpen} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
