import { useState, useEffect } from "react";
import axios from "axios";
import "./Login.scss";

function Login() {
  const [accountNumberState, setAccountNumberState] = useState();
  const [passwordState, setPasswordState] = useState();

  const onChangeAccountNumber = (e) => {
    setAccountNumberState(e.target.value);
  };

  const onChangePassword = (e) => {
    setPasswordState(e.target.value);
  };

  function validLogin() {
    axios
      .post(
        "/login",
        {},
        {
          params: {
            accountNumber: accountNumberState,
            password: passwordState,
          },
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response.data.account_number);
        console.log("성공");
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  return (
    <div className="loginPageContainer">
      <div className="loginPageHeader">로 그 인</div>
      <div class="all_cover">
        <div class="login-form">
          <form>
            <input
              type="text"
              name="accountNumber"
              class="text-field"
              placeholder="계좌번호"
              value={accountNumberState}
              onChange={onChangeAccountNumber}
            />
            <input
              type="password"
              name="password"
              class="text-field"
              placeholder="비밀번호"
              value={passwordState}
              onChange={onChangePassword}
            />
            <button type="button" class="submit-btn" onClick={validLogin}>
              로그인
            </button>
          </form>
        </div>
      </div>{" "}
    </div>
  );
}

export default Login;
