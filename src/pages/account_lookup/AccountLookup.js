import React from "react";
import "./AccountLookup.scss";

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
          <div className="listHeadBox">
            <div className="listHead">월별내역 : </div>
            <div className="listHeadCalender">Calender</div>
          </div>
          <div className="listDetailBox">
            <div>
              <div className="listDetailDate">20XX - XX - XX (월)</div>
              <div className="listDetailClock">12 : 30 : 49</div>
              <div className="listDetailSummury">
                <div className="listDetailName">KB 국민은행</div>
                <div className="listDetailTransfer">출금 : XXX,XXX원</div>
              </div>
              <div className="listDetailBalance">잔액 : XX,XXX,XXX 원</div>
            </div>

            <div>
              <div className="listDetailDate">20XX - XX - XX (월)</div>
              <div className="listDetailClock">12 : 30 : 49</div>
              <div className="listDetailSummury">
                <div className="listDetailName">KB 국민은행</div>
                <div className="listDetailTransfer">출금 : XXX,XXX원</div>
              </div>
              <div className="listDetailBalance">잔액 : XX,XXX,XXX 원</div>
            </div>

            <div>
              <div className="listDetailDate">20XX - XX - XX (월)</div>
              <div className="listDetailClock">12 : 30 : 49</div>
              <div className="listDetailSummury">
                <div className="listDetailName">KB 국민은행</div>
                <div className="listDetailTransfer">출금 : XXX,XXX원</div>
              </div>
              <div className="listDetailBalance">잔액 : XX,XXX,XXX 원</div>
            </div>

            <div>
              <div className="listDetailDate">20XX - XX - XX (월)</div>
              <div className="listDetailClock">12 : 30 : 49</div>
              <div className="listDetailSummury">
                <div className="listDetailName">KB 국민은행</div>
                <div className="listDetailTransfer">출금 : XXX,XXX원</div>
              </div>
              <div className="listDetailBalance">잔액 : XX,XXX,XXX 원</div>
            </div>

            <div>
              <div className="listDetailDate">20XX - XX - XX (월)</div>
              <div className="listDetailClock">12 : 30 : 49</div>
              <div className="listDetailSummury">
                <div className="listDetailName">KB 국민은행</div>
                <div className="listDetailTransfer">출금 : XXX,XXX원</div>
              </div>
              <div className="listDetailBalance">잔액 : XX,XXX,XXX 원</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountLookup;
