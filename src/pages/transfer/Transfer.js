import React, { useState } from "react";
import "./Transfer.scss";
import WarningModal from "../../components/Modal/WarningModal";

function Transfer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [num, setNum] = useState(0);

  const showModal = () => {
    setModalOpen(true);
  };

  //숫자 input에 3자리마다 , 넣기
  const inputPriceFormat = (str) => {
    console.log("s", str);
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  };
  return (
    <div className="transferContainer">
      <div className="transferBox">
        <div className="transferInformBox">
          <div className="transferInforHeadBox">
            <select>
              <option>국민 : 123456-12-123456</option>
              <option>국민 : 654321-21-654321</option>
            </select>
          </div>
          <div className="transferInformMoneyBox">
            <div>금액</div>
            <div>0</div>
            <div>원</div>
          </div>
          <div className="transferInformPossibleBox">
            <div>출금가능잔액</div>
            <div>0</div>
            <div>원</div>
          </div>
        </div>

        <div className="transfer">
          <div className="transferRecentBox">
            <div className="transferRecentHead">
              <div>최근이체내역</div>
            </div>

            <div className="transferRecentContainer">
              {/* <div className="transferRecentList">
                <div className="transferRecentListDate">
                  20XX - XX - XX (목)
                </div>
                <div className="transferRecentListTime">12 : 30 : 49</div>
                <div className="transferRecentListBox">
                  <div className="transferRecentListName">도깨비</div>
                  <div className="transferRecentListAmount">
                    <div>0</div>
                    <div>원</div>
                  </div>
                </div>
                <div className="transferRecentListBalance">
                  <div>잔액</div>
                  <div>0</div>
                  <div>원</div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="opponentAcoount">
            {/* input select 동시에 써야함*/}
            <select>
              <option>농협 123 - 12345678 - 12</option>
            </select>
          </div>

          <div className="transferAmountBox">
            <div className="transferAmount">
              <input
                type="text"
                value={num}
                maxLength="12"
                onChange={(e) => setNum(inputPriceFormat(e.target.value))}
              ></input>
              <div>원</div>
            </div>
            <div>
              <button onClick={showModal}>이체</button>
              {modalOpen && <WarningModal setModalOpen={setModalOpen} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
