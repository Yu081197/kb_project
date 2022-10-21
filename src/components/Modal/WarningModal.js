import React, { useState, useEffect } from "react";
import axios from "axios";

import "./WarningModal.scss";

const WarningModal = ({ setModalOpen, selectedAccount, opponentAccount, num }) => {
  const removeCommas = num => num.toString().replace(/[^\d]+/g, "");

  const closeModal = () => {
    setModalOpen(false);
  };

  const sendTransferInfo = async (e) => {
    axios
      .post(
        "/api/account/transfer",
        {},
        {
          params: {
            accountNumber: selectedAccount,
            amount: removeCommas(num),
            opponentAccount: opponentAccount,
          },
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        console.log("성공");

        alert("이체 완료");
        // 이체완료 페이지로 이동하도록 변경..
        window.location.href = "/transfer";
      })
      .catch(function (error) {
        console.log("실패");
      });
  };

  return (
    <div className="modalContainer">
      <div className="modalBox">
        <div className="modalText">
          <span>{opponentAccount} 계좌로<br></br> {num}원을<br></br> 이체하시겠습니까?</span>
        </div>
        <div className="modalButton">
          <button onClick={sendTransferInfo}>확인</button>
          <button onClick={closeModal}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
