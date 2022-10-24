import React, { useState, useEffect, useRef } from "react";
import "./AccountCreate.scss";
import AccountCreateModal from "./AccountCreateModal/AccountCreateModal";
import ReactChatBot, { speak } from "../../components/chatbot/ReactChatBot";

function AccountCreate() {
  const allCheckRef = useRef();
  const recogInputAgree = 2; // ReactChatBot 동의 옵션
  const recogInputNext = 3; // ReactChatBot 동의 옵션
  useEffect(() => {
    speak("약관동의 화면입니다.");

    setTimeout(function () {

      speak("케이비 국민은행 계좌개설 약관 동의하시겠습니까?", true, recogInputAgree);

      setTimeout(function () {
        speak("다음 절차로 이동하시겠습니까?", true, recogInputNext, "/account_create_inform");
      }, 8000);

    }, 3000);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  //전체 동의 체크박스
  const [allCheck, setAllCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [itemCheck, setItemCheck] = useState(false);
  const [specialCheck, setSpecialCheck] = useState(false);
  const [basicCheck, setBasicCheck] = useState(false);
  const [freeCheck, setFreeCheck] = useState(false);
  const [personalCheck, setPersonalCheck] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setUseCheck(true);
      setItemCheck(true);
      setSpecialCheck(true);
      setBasicCheck(true);
      setFreeCheck(true);
      setPersonalCheck(true);
    } else {
      setAllCheck(false);
      setUseCheck(false);
      setItemCheck(false);
      setSpecialCheck(false);
      setBasicCheck(false);
      setFreeCheck(false);
      setPersonalCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };
  const itemBtnEvent = () => {
    if (itemCheck === false) {
      setItemCheck(true);
    } else {
      setItemCheck(false);
    }
  };
  const specialCheckBtnEvent = () => {
    if (specialCheck === false) {
      setSpecialCheck(true);
    } else {
      setSpecialCheck(false);
    }
  };

  const basicBtnEvent = () => {
    if (basicCheck === false) {
      setBasicCheck(true);
    } else {
      setBasicCheck(false);
    }
  };

  const freeBtnEvent = () => {
    if (freeCheck === false) {
      setFreeCheck(true);
    } else {
      setFreeCheck(false);
    }
  };

  const personalBtnEvent = () => {
    if (personalCheck === false) {
      setPersonalCheck(true);
    } else {
      setPersonalCheck(false);
    }
  };

  useEffect(() => {
    if (
      useCheck === true &&
      itemCheck === true &&
      specialCheck === true &&
      basicCheck === true &&
      freeCheck === true &&
      personalCheck === true
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [useCheck, itemCheck, specialCheck, basicCheck, freeCheck, personalCheck]);
  //페이지 이동
  function handleClick(e) {
    window.location.href = "/account_create_inform";
  }
  return (
    <div className="createContainer">
      <div className="circleContainer">
        <div className="circleSequence">약관동의</div>
        <div className="circle">정보입력</div>
        <div className="circle">거래목적</div>
        <div className="circle">비밀번호</div>
        <div className="circle">본인인증</div>
        <div className="circle">개설완료</div>
      </div>

      <div className="agreeContainer">
        <div className="agree">
          <div>약관동의</div>
        </div>
        <div className="allAgree">
          <div>전체동의하기</div>
          <input
            ref={allCheckRef}
            type="checkbox"
            value="allAgree"
            id="allAgree"
            checked={allCheck}
            onChange={allBtnEvent}
          ></input>
        </div>
        <div className="neAgree">
          <div>KB 국민은행 계좌개설 필수 동의</div>
        </div>
        <div className="agreeList">
          <div className="agreeListContainer">
            <div>· KB 국민은행 통장 이용약관</div>
            <div>
              <input
                type="checkbox"
                value="useAgree"
                id="useAgree"
                checked={useCheck}
                onChange={useBtnEvent}
              ></input>
            </div>
          </div>
          <div className="agreeListContainer">
            <div>· KB 국민은행 통장 상품설명서</div>
            <div>
              <input
                type="checkbox"
                value="itemAgree"
                id="itemAgree"
                checked={itemCheck}
                onChange={itemBtnEvent}
              ></input>
            </div>
          </div>
          <div className="agreeListContainer">
            <div>· KB 국민은행 통장 특약</div>
            <div>
              <input
                type="checkbox"
                value="specialAgree"
                id="specialAgree"
                checked={specialCheck}
                onChange={specialCheckBtnEvent}
              ></input>
            </div>
          </div>
          <div className="agreeListContainer">
            <div>· 예금거래기본약관</div>
            <div>
              <input
                type="checkbox"
                value="basicAgree"
                id="basicAgree"
                checked={basicCheck}
                onChange={basicBtnEvent}
              ></input>
            </div>
          </div>
          <div className="agreeListContainer">
            <div>· 입출금이자유로운예금약관</div>
            <div>
              <input
                type="checkbox"
                value="freeAgree"
                id="freeAgree"
                checked={freeCheck}
                onChange={freeBtnEvent}
              ></input>
            </div>
          </div>
          <div className="agreeListContainer">
            <div>
              · 개인(신용)정보 수집·이용·제공 동의서(KB국민은행 출금이체)
            </div>
            <div>
              <input
                type="checkbox"
                value="personalAgree"
                id="personalAgree"
                checked={personalCheck}
                onChange={personalBtnEvent}
              ></input>
            </div>
          </div>
        </div>

        <div className="buttonContainer">
          <div className="button">
            <button onClick={allCheck === true ? handleClick : showModal}>
              확인
            </button>
            {modalOpen && <AccountCreateModal setModalOpen={setModalOpen} />}
          </div>
        </div>
      </div>
      <div className="circleContainer"></div>
    </div>
  );
}

export default AccountCreate;
