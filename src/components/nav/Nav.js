import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import OnClickModal from "../Modal/OnClickModal";

function Nav() {
  const [modalOpen, setModalOpen] = useState(false);
  const [click, setClick] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  const validOnclick = (e) => {
    console.log("======nav클릭======");
    let user_name = getCookieValue("name");
    if (user_name.length > 0) {
      setClick(true);
      console.log("======nav클릭 on======");
    } else {
      setClick(false);
      console.log("======nav클릭 off======");
      showModal();
    }
  };

  const getCookieValue = (key) => {
    let cookieKey = key + "=";
    let result = "";
    const cookieArr = document.cookie.split(";");

    for (let i = 0; i < cookieArr.length; i++) {
      if (cookieArr[i][0] === " ") {
        cookieArr[i] = cookieArr[i].substring(1);
      }

      if (cookieArr[i].indexOf(cookieKey) === 0) {
        result = cookieArr[i].slice(cookieKey.length, cookieArr[i].length);
        return result;
      }
    }
    return result;
  };

  function logout() {
    axios
      .post(
        "/logout",
        {},
        {},
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log("성공");
        window.location.reload();
        window.location.href = "/main";
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  const login_click = () => {
    if (getCookieValue("name").length > 0) {
      logout();
    } else {
      window.location.href = "/login";
    }
  };

  const login = () => {
    let login_name = "";
    let user_name = getCookieValue("name");
    let login_text = "Login";
    if (user_name.length > 0) {
      login_name = user_name + "님";
      login_text = "Logout";
    }
    let login_data = [login_name, login_text];
    return login_data;
  };
  var login_data = login();
  var login_name = login_data[0];
  var login_text = login_data[1];

  return (
    <div style={{ width: "100vw " }}>
      <div className="header">
        <div className="navLoginContainer">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/">
              <Image className="mainLogo" src="image/dokb_2.png" />
            </Link>
          </div>
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
                onClick={validOnclick}
              >
                계좌조회
              </NavLink>
              <NavLink
                to="/transfer"
                style={{ textDecoration: "none" }}
                className="navTab"
                activeClassName="active"
                onClick={validOnclick}
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
            <div className="loginContainer">
              <div className="headerLogin">
                <div className="loginName">{login_name}</div>
                <div className="loginButton" onClick={login_click}>
                  {login_text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div> {modalOpen && <OnClickModal setModalOpen={setModalOpen} />}</div>
    </div>
  );
}

export default Nav;
