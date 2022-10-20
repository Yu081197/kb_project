import React, { useState, useEffect } from "react";
import axios from "axios";

function AccountCreateComplete() {
  const [acoountInform, setAccountInform] = useState();
  const [accountType, setAccountType] = useState();
  const [accountNumber, setAccountNumber] = useState();

  const [allCheck, setAllCheck] = useState(false);

  useEffect(() => {
    axios
      .post("/api/account")
      .then(function (response) {
        setAccountInform(response.data);
        setAccountType(response.data);
        setAccountNumber(response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }, []);

  function handleClick(e) {
    window.location.href = "/account_lookup";
  }

  return (
    <div className="createContainer">
      <div className="circleContainer">
        <div className="circle">약관동의</div>
        <div className="circle">정보입력</div>
        <div className="circle">거래목적</div>
        <div className="circle">비밀번호</div>
        <div className="circle">본인인증</div>
        <div className="circleSequence">개설완료</div>
      </div>

      <div className="inputContainer">
        <div className="head">
          <div>계좌정보</div>
          <div></div>
        </div>
        <div className="input">
          <div>계좌종류</div>
          <div></div>
        </div>
        <div className="input">
          <div>계좌번호</div>
          <div></div>
        </div>

        <div className="btn">
          <div className="buttonContainer">
            <div className="button" onClick={handleClick}>
              <button type="button">확인</button>
            </div>
          </div>
        </div>
      </div>
      <div className="circleContainer"></div>
    </div>
  );
}

export default AccountCreateComplete;
