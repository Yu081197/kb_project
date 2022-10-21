import { useState } from "react";
import { Image } from "react-bootstrap";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
<<<<<<< HEAD
const getCookieValue = (key) => {
  let cookieKey = key + "="; 
  let result = "";
  const cookieArr = document.cookie.split(";");
  
  for(let i = 0; i < cookieArr.length; i++) {
    if(cookieArr[i][0] === " ") {
      cookieArr[i] = cookieArr[i].substring(1);
    }
    
    if(cookieArr[i].indexOf(cookieKey) === 0) {
      result = cookieArr[i].slice(cookieKey.length, cookieArr[i].length);
      return result;
    }
  }
  return result;
}

function Nav() {
  function login(){
    let login_name = "로그인을 해주세요"
    let user_name = getCookieValue("name")
    if(user_name.length > 0){
      login_name = "안녕하세요 " + user_name +"님"
    }
    return login_name
  }
  var login_name = login()
=======
import LoginModal from "../Modal/LoginModal";

function Nav() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };
>>>>>>> 6a5435ac8fa72f39d23774e01ab01de0f705a81a
  return (
    <div>
      <div className="header">
        <Link to="/">
          <Image className="mainLogo" src="image/kbmain.png" />
        </Link>
        <div className="headerLogin">
<<<<<<< HEAD
          <div id = "loginCheck">{login_name}</div>
=======
          <div>
            안녕하세요 <button onClick={showModal}>도깨비</button>님
          </div>
          {modalOpen && <LoginModal setModalOpen={setModalOpen} />}
>>>>>>> 6a5435ac8fa72f39d23774e01ab01de0f705a81a
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
