import React from "react";
import "./Transfer.scss";

function Transfer() {
  return (
    <div className="transferContainer">
      <div className="transferBox">
        <div className="transferInformBox">
          <div className="transferInforHeadBox">
            <select>
              <option>국민 : XXX - XXXXXX - XXX</option>
            </select>
          </div>
          <div className="transferInformMoneyBox">금액 : XX,XXX,XXX 원</div>
          <div className="transferInformPossibleBox">
            출금가능잔액 : XX,XXX,XXX원
          </div>
        </div>

        <div className="transfer">
          <div className="transferRecentBox">
            <div className="transferRecentHead">
              <div>최근이체내역</div>
            </div>

            <div className="transferRecentContainer">
              <div className="transferRecentList">
                <div className="transferRecentListDate">
                  20XX - XX - XX (목)
                </div>
                <div className="transferRecentListTime">12 : 30 : 49</div>
                <div className="transferRecentListBox">
                  <div className="transferRecentListName">도깨비</div>
                  <div className="transferRecentListAmount">XX,XXX 원</div>
                </div>
                <div className="transferRecentListBalance">
                  잔액 : XX,XXX,XXX 원
                </div>
              </div>

              <div className="transferRecentList">
                <div className="transferRecentListDate">
                  20XX - XX - XX (목)
                </div>
                <div className="transferRecentListTime">12 : 30 : 49</div>
                <div className="transferRecentListBox">
                  <div className="transferRecentListName">도깨비</div>
                  <div className="transferRecentListAmount">XX,XXX 원</div>
                </div>
                <div className="transferRecentListBalance">
                  잔액 : XX,XXX,XXX 원
                </div>
              </div>

              <div className="transferRecentList">
                <div className="transferRecentListDate">
                  20XX - XX - XX (목)
                </div>
                <div className="transferRecentListTime">12 : 30 : 49</div>
                <div className="transferRecentListBox">
                  <div className="transferRecentListName">도깨비</div>
                  <div className="transferRecentListAmount">XX,XXX 원</div>
                </div>
                <div className="transferRecentListBalance">
                  잔액 : XX,XXX,XXX 원
                </div>
              </div>
            </div>
          </div>

          <div className="opponentAcoount">
            {/* input select 동시에 써야함*/}
            <select>
              <option>농협 : XXX - XXXXXX - XXX</option>
            </select>
          </div>

          <div className="transferAmountBox">
            <div className="transferAmount">XX,XXX,XXX 원</div>
            <div>
              <button>이체</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
