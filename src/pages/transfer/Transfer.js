import React from "react";
import "./Transfer.scss";

function Transfer() {
  function handleClick(e) {
    window.location.href = "/transfer";
  }
  return (
    <div className="lookupContainer">
      <div className="lookupBox">
        <div className="informBox">
          <div className="informHeadBox">저축예금</div>
          <div className="informSelectBox">
            <select>
              <option>국민 : XXX - XXXXXX - XXX</option>
              <option>국민 : XXX - XXXXXX - XXX</option>
              <option>국민 : XXX - XXXXXX - XXX</option>
              <option>국민 : XXX - XXXXXX - XXX</option>
            </select>
          </div>
          <div className="informMoneyBox">XX,XXX,XXX 원</div>
          <div className="informPossibleBox">출금가능잔액 : XX,XXX,XXX원</div>
          <div className="informButton">
            <button onClick={handleClick}>이체하기</button>
          </div>
        </div>

        <div className="listBox">
          <div className="listHead">
            <div>월별내역 : </div>
            <div className="listHeadCalender">Calender</div>
          </div>
          <div>list</div>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
