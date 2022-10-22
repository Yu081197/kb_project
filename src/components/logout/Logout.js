import axios from "axios";

function Logout() {
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
    })
    .catch(function (error) {
      console.log("실패");
    });

  const login_click = () => {
    if (getCookieValue("name").length > 0) {
      Logout();
    } else {
      window.location.href = "/login";
    }
  };
}

export default Logout;
