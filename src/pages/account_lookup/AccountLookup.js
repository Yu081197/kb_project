import React from "react";
import "./AccountLookup.scss";
import AccountLookupModal from "./account_lookup_modal/AccountLookupModal";

function AccountLookup() {
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
              <option>국민 : 123456-12-123456</option>
              <option>국민 : 654321-21-654321</option>
            </select>
          </div>
          <div className="informMoneyBox">
            <div>0</div>
            <div>원</div>
          </div>
          <div className="informPossibleBox">
            <div>출금가능잔액</div>
            <div className="informPossibleBoxDiv">
              <div>0</div>
              <div>원</div>
            </div>
          </div>
          <div className="informButton">
            <button onClick={handleClick}>이체하기</button>
          </div>
        </div>

        <div className="listBox">
          <div className="listHeadBox">
            <div className="listHead">월별내역</div>
            <div className="listHeadCalender">
              <AccountLookupModal />
            </div>
          </div>
          <div className="listDetailBox">
            {/* <div>
              <div className="listDetailDate">20XX - XX - XX (월)</div>
              <div className="listDetailClock">12 : 30 : 49</div>
              <div className="listDetailSummury">
                <div className="listDetailName">KB 국민은행</div>
                <div className="listDetailTransfer">
                  <div>출금</div>
                  <div>0</div>
                  <div>원</div>
                </div>
              </div>
              <div className="listDetailBalance">
                <div>잔액</div>
                <div>0</div>
                <div>원</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountLookup;
