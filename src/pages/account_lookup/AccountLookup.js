import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AccountLookup.scss";
import AccountLookupModal from "./account_lookup_modal/AccountLookupModal";
import Moment from "moment";

function AccountLookup() {
  const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const [accounts, setAccounts] = useState([]);
  // const [selectedAccount, setSelectedAccount] = useState([]);
  const [selectedAccountBalance, setSelectedAccountBalance] = useState([]);
  const [historys, setHistorys] = useState([]);

  // 계좌잔액 및 월별내역 초기화
  function initData() {
    // setSelectedAccount("");
    setSelectedAccountBalance(0);
    setHistorys([]);
  }

  useEffect(() => {
    axios
      .get("/api/account/all?registerNumber=string")  // 로그인 구현 후 ?registerNumber=string 제거..
      .then(function (response) {
        initData();
        setAccounts(response.data);
        console.log("계좌조회 성공");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function handleClick(e) {
    window.location.href = "/transfer";
  }

  const handleAccountSelectChange = async (e) => {
    if (e.target.value == "") {
      initData();
      return;
    }
    
    // setSelectedAccount(e.target.value);
    setSelectedAccountBalance(e.target.options[e.target.selectedIndex].dataset['balance']);
    
    axios
      .get("/api/history/all/" + e.target.value)
      .then(function (response) {
        setHistorys(response.data);
        console.log("거래내역조회 성공");
        if (response.data.length == 0) {
          // 조회된 내역이 없습니다.
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  return (
    <div className="lookupContainer">
      <div className="lookupBox">
        <div className="informBox">
          <div className="informHeadBox">저축예금</div>
          <div className="informSelectBox">
            <select onChange={handleAccountSelectChange}>
            <option value="">계좌선택</option>
              {accounts.map(account =>
                <option value={account.account_number} data-balance={account.balance}>국민은행 : {account.account_number}</option>
              )}
            </select>
          </div>
          <div className="informMoneyBox">
            <div></div>
            <div>{addCommas(selectedAccountBalance)}원</div>
          </div>
          <div className="informPossibleBox">
            <div>출금가능잔액</div>
            <div className="informPossibleBoxDiv">
              <div>{addCommas(selectedAccountBalance)}</div>
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
              {historys.map(history =>
                <div className="listDetailSubBox">
                  <div className="listDetailDate">
                    {Moment(history.deal_date).format('YYYY-MM-DD HH:mm:ss')}
                  </div>
                  {/* <div className="listDetailClock">12 : 30 : 49</div> */}
                  <div className="listDetailSummury">
                    <div className="listDetailName">KB 국민은행</div>
                    <div className="listDetailTransfer">
                      <div>출금</div>
                      <div>{addCommas(history.amount)}</div>
                      <div>원</div>
                    </div>
                  </div>
                  <div className="listDetailBalance">
                    <div>잔액</div>
                    <div>{addCommas(history.balance)}</div>
                    <div>원</div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountLookup;
