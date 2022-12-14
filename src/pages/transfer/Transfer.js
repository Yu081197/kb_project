import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Transfer.scss";
import WarningModal from "../../components/Modal/WarningModal";
import AlertModal from "../../components/Modal/AlertModal";
import "bootstrap/dist/css/bootstrap.min.css";

function Transfer({ value, accountNumber }) {
  const formatAccount = (input) =>
    input
      .toString()
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,6})(\d{0,2})(\d{0,6})$/g, "$1-$2-$3")
      .replace(/\-{1,2}$/g, "");
  const addCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const removeCommas = (num) => num.toString().replace(/[^\d]+/g, "");

  const [modalOpen, setModalOpen] = useState(false);
  const [num, setNum] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedAccountBalance, setSelectedAccountBalance] = useState(0);
  const [recentTransferAccounts, setRecentTransferAccounts] = useState([]);
  const [opponentBankId, setOpponentBankId] = useState("");
  const [opponentAccount, setOpponentAccount] = useState("");
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  
  /*돈추가*/
  const addMoney = async (e) => {
    if (e.target.value == "reset") {
      console.log("========================", num);
      setNum(0);
      return;
    }
    console.log("========================", num);
    setNum(num + parseInt(e.target.value));
  };
  
  /* 입력값 체크 및 이체확인 모달 띄우기 */
  const showModal = () => {
    if (selectedAccount == "") {
      setAlertMessage("계좌를 선택해주세요.");
      setAlertModalOpen(true);
      return;
    }

    if (opponentBankId == "") {
      setAlertMessage("은행을 선택해주세요.");
      setAlertModalOpen(true);
      return;
    }

    if (opponentAccount == "") {
      setAlertMessage("계좌번호를 입력해주세요.");
      setAlertModalOpen(true);
      return;
    }

    if (num == "" || num == 0) {
      setAlertMessage("이체 금액을 입력해주세요.");
      setAlertModalOpen(true);
      return;
    }

    if (
      Number(removeCommas(num)) > Number(removeCommas(selectedAccountBalance))
    ) {
      setAlertMessage("이체 가능 금액을 초과하였습니다.");
      setAlertModalOpen(true);
      return;
    }

    setModalOpen(true);
  };

  //숫자 input에 3자리마다 , 넣기
  const inputPriceFormat = (str) => {
    const comma = (str) => {
      return String(str).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      return String(str).replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str)).replace(/(^0+)/, "");
  };

  // 계좌잔액 및 월별내역 초기화
  function initData() {
    setSelectedAccountBalance(0);
    setRecentTransferAccounts([]);
  }

  useEffect(() => {
    axios
      .get("/api/account/all")
      .then(function (response) {
        initData();
        setAccounts(response.data);
        console.log("계좌조회 성공");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  /* 계좌잔액 및 월별내역 초기화 */
  function initData() {
    setSelectedAccountBalance(0);
    setRecentTransferAccounts([]);
  }

  /* 계좌변경 : 최근거래 계좌목록 불러오기 */
  const handleAccountSelectChange = async (e) => {
    if (e.target.value == "") {
      initData();
      return;
    }

    setSelectedAccount(e.target.value);
    setSelectedAccountBalance(
      e.target.options[e.target.selectedIndex].dataset["balance"]
    );

    axios
      .get("/api/account/recent_transfer/" + e.target.value)
      .then(function (response) {
        setRecentTransferAccounts(response.data);
        console.log("최근보낸계좌 조회 성공");
        if (response.data.length == 0) {
          // 조회된 내역이 없습니다.
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function getAccountNumber() {
    if (window.localStorage.getItem("accountNumber") > 0) {
    }
  }

  useEffect(() => {
    console.log("===============계좌번호==========", accountNumber);
  }, []);

  function setOpponentAccountInfo(bankId, opponentAccount) {
    setOpponentBankId(bankId);
    setOpponentAccount(opponentAccount);
  }

  const handleBankSelectChange = async (e) => {
    setOpponentBankId(e.target.options[e.target.selectedIndex].value);
  };

  const onChangeOpponentAccount = async (e) => {
    setOpponentAccount(formatAccount(e.target.value));
  };

  return (
    <div className="transferContainer">
      <div className="transferBox">
        <div className="transferInformBox">
          <div className="contentBox">
            <select onChange={handleAccountSelectChange}>
              <option value="">계좌선택</option>
              {accounts.map((account) => (
                <option
                  value={account.account_number}
                  data-balance={account.balance}
                >
                  국민은행 : {account.account_number}
                </option>
              ))}
            </select>
          </div>
          <div className="transferRecentBox">
            <div className="transferRecentHead">
              <div>최근 보낸 계좌</div>
            </div>
            <div className="transferRecentContainer">
              {recentTransferAccounts.map((recentTransferAccount) => (
                <div className="transferRecentList">
                  <div
                    className="transferRecentListBox"
                    onClick={() =>
                      setOpponentAccountInfo(
                        "7",
                        recentTransferAccount.account_number
                      )
                    }
                  >
                    <span className="transferRecentListName">국민은행</span>
                    <span className="transferRecentListAmount">
                      {recentTransferAccount.account_number}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="transfer">
          <div className="contentBox">
            <div className="money">
              <div className="moneyTitle">
                <span className="contentBoxSpan">금액</span>
              </div>
              <div className="moneyContent">
                <span className="contentBoxSpan">{addCommas(selectedAccountBalance)}원</span>
              </div>
            </div>
          </div>
          <div className="contentBox">
            <div className="money">
              <div className="moneyTitle">
                <span className="contentBoxSpan">출금가능잔액</span>
              </div>
              <div className="moneyContent">
                <span className="contentBoxSpan">{addCommas(selectedAccountBalance)}원</span>
              </div>
            </div>
          </div>
          <div className="contentBox opponentAcoount">
            <select
              name="account_bank_id"
              value={opponentBankId}
              onChange={handleBankSelectChange}
            >
              <option value="">은행선택</option>
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
            <input
              name="opponentAccount"
              value={opponentAccount}
              maxLength="16"
              onChange={onChangeOpponentAccount}
            />
          </div>

          <div className="contentBox transferAmountBox">
            <div className="transferAmount">
              <input
                type="text"
                value={num}
                placeholder="0"
                maxLength="12"
                onChange={(e) => setNum(inputPriceFormat(e.target.value))}
              ></input>
              <div>원</div>
            </div>
            <div>
              <button className="btnTransfer" onClick={showModal}>이체</button>
              {modalOpen && (
                <WarningModal
                  setModalOpen={setModalOpen}
                  selectedAccount={selectedAccount}
                  opponentAccount={opponentAccount}
                  num={num}
                />
              )}
              {alertModalOpen && (
                <AlertModal
                  setAlertModalOpen={setAlertModalOpen}
                  alertMessage={alertMessage}
                />
              )}
            </div>
          </div>
          <div className="contentBox transferAmountBox transferAmountBtn">
            <div
              className="transferAmountBtnContainer"
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-around",
                width: "500px",
              }}
            >
              <button className="transferBtn" onClick={addMoney} value={1000}>
                +천
              </button>
              <button className="transferBtn" onClick={addMoney} value={10000}>
                +만
              </button>
              <button className="transferBtn" onClick={addMoney} value={100000}>
                +십만
              </button>
              <button
                className="transferBtn"
                onClick={addMoney}
                value={1000000}
              >
                +백만
              </button>
              <button className="transferBtn" onClick={addMoney} value="reset">
                초기화
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
