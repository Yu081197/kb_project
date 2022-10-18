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
            <select name="account_bank_id">
              <option value="">은행</option>
              <option value="35">경남은행</option>
              <option value="29">광주은행</option>
              <option value="7">국민은행</option>
              <option value="5">기업은행</option>
              <option value="15">농협중앙회</option>
              <option value="17">농협회원조합</option>
              <option value="25">대구은행</option>
              <option value="47">도이치은행</option>
              <option value="27">부산은행</option>
              <option value="3">산업은행</option>
              <option value="41">상호저축은행</option>
              <option value="37">새마을금고</option>
              <option value="11">수협중앙회</option>
              <option value="36">신한금융투자</option>
              <option value="60">신한은행</option>
              <option value="39">신협중앙회</option>
              <option value="9">외환은행</option>
              <option value="19">우리은행</option>
              <option value="56">우체국</option>
              <option value="33">전북은행</option>
              <option value="31">제주은행</option>
              <option value="68">카카오뱅크</option>
              <option value="67">케이뱅크</option>
              <option value="59">하나은행</option>
              <option value="23">한국씨티은행</option>
              <option value="45">HSBC은행</option>
              <option value="21">SC제일은행</option>
            </select>
            <input list="data" />
            <datalist id="data"></datalist>
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
