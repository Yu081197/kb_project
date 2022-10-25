import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AccountLookup.scss";

import Moment from "moment";
import { getYear } from "date-fns";
const _ = require("lodash");
function AccountLookup() {
  const years = _.range(1990, getYear(new Date()) + 1, 1); // 수정
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const [account, setAccount] = useState("");
  const [accountsList, setAccountsList] = useState([]);
  // const [selectedAccount, setSelectedAccount] = useState([]);
  const [selectedAccountBalance, setSelectedAccountBalance] = useState([]);
  const [historys, setHistorys] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());


  const onSelected = (option,type) =>{
    if (option == type){
      return (
      <option value={option} selected>
        {option}
      </option>
      );}
      else{
      return(
      <option value={option}>
        {option}
      </option>
      );}
  }
  const inOut = (c) => {
    if (c == "i"){
      return "입금"
    }else{
      return "출금"
    }
  }
  // 계좌잔액 및 월별내역 초기화
  function initData() {
    // setSelectedAccount("");
    setSelectedAccountBalance(0);
    setHistorys([]);
  }
  
  useEffect(() => {


    axios
      .get("/api/account/all")
      .then(function (response) {
        initData();
        setAccountsList(response.data);
        console.log("계좌조회 성공");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleAccountSelectChange =  (selectedAccount,selectedYear,selectedMonth) => {
    // setSelectedAccount(e.target.value);
    axios
      .get("/api/history/all/" + selectedAccount+"/"+selectedYear+"/"+selectedMonth)
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


  function handleClick(e) {
    window.location.href = "/transfer";
  }


  const handleAccountSelect = async(e) =>{
    if (e.target.value == "") {
      initData();
      console.log(e.target.value)
      return;
    }


    console.log(typeof(e.target.value))

    setSelectedAccountBalance(e.target.options[e.target.selectedIndex].dataset['balance']);

    setAccount(e.target.value);
    handleAccountSelectChange(e.target.value,year,month);
  }


  const handleYearSelect = async(e) =>{
    if (e.target.value == "") {
      initData();
      return;
    }
    setYear(e.target.value);
    handleAccountSelectChange(account,e.target.value,month);
  }


  const handleMonthSelect = async(e) =>{
    if (e.target.value == "") {
      initData();
      return;
    }

    setMonth(e.target.value.slice(0,-1));
    handleAccountSelectChange(account,year,e.target.value.slice(0,-1));
  }

  return (
    <div className="lookupContainer">
      <div className="lookupBox">
        <div className="informBox">
          <div className="informHeadBox">저축예금</div>
          <div className="informSelectBox">
            <select onChange={handleAccountSelect} value = {account}>
            <option value="">계좌선택</option>
              {accountsList.map(account =>
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
            
            
            <div className="monthPickerContainer">
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >

            <select onChange={handleYearSelect} className = "selectDate">
              {years.map((option) => (
                onSelected(option,year)
              ))}
            </select>

            <select onChange={handleMonthSelect} className = "selectDate">
              {months.map((option) => (
                onSelected(option,month +"월")
              ))}
            </select>

          </div>



    </div>
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
                      <div>{inOut(history.in_out)}</div>
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
