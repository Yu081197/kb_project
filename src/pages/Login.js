import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="loginContainer">
      <div class="all_cover">
        <div class="login-form">
          <form>
            <input
              type="text"
              name="email"
              class="text-field"
              placeholder="계좌번호"
            />
            <input
              type="password"
              name="password"
              class="text-field"
              placeholder="비밀번호"
            />
            <input type="submit" value="로그인" class="submit-btn" />
          </form>
        </div>
      </div>{" "}
    </div>
  );
}

export default Login;
