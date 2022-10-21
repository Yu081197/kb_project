import { useState } from "react";
import { Image } from "react-bootstrap";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
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

function Nav() {
  // function logout() {
  //   alert("로그아웃!!");
  //   axios
  //     .post(
  //       "/logout",
  //       {},
  //       {
  //       },
  //       {
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //       }
  //     )
  //     .then(function (response) {
  //       console.log("성공");
  //     })
  //     .catch(function (error) {
  //       console.log("실패");
  //     });
  // };
  // function login_url(){
  //   if (getCookieValue("name").length > 0) {
  //     logout();
  //   } 
  //   else {"/login"};
  // }

  function login() {
    let login_name = "로그인을 해주세요";
    let user_name = getCookieValue("name");
    let login_text = "Login";
    if (user_name.length > 0) {
      login_name = "안녕하세요 " + user_name + "님";
      login_text = "Logout";
    }
    let login_data = [login_name, login_text];
    return login_data;
  }
  var login_data = login();
  var login_name = login_data[0];
  var login_text = login_data[1];

  return (
    <div>
      <div className="header">
        <Link to="/">
          <Image className="mainLogo" src="image/dokb_2.png" />
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
            <div>{login_name}</div>
          </div>
          <NavLink
          to="/logout"
          style={{ textDecoration: "none", color: "black" }}
          className="navTab"
          activeClassName="active"

          >
            {login_text}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
