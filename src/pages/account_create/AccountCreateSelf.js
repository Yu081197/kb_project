import React, { useEffect, useRef, useState } from "react";
import "./AccountCreateSelf.scss";
import Webcam from "react-webcam";
import AccountCreateSelfModal from "./AccountCreateModal/AccountCreateSelfModal";
import axios from "axios";
import { speak } from "../../components/chatbot/ReactChatBot";

const WebcamComponent = () => <Webcam />;

function AccountCreateSelf() {
  const anywayOnClickTrigger = 5; // ReactChatBot onclick 옵션
  const recogInputOnClickTrigger = 6; // ReactChatBot onclick 옵션

  const shootRef = useRef();
  const confirmRef = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  
  const nameState = window.localStorage.getItem("name");
  const registerNumberState = window.localStorage.getItem("registerNumber");
  const phoneNumberState = window.localStorage.getItem("phoneNumber");
  const emailState = window.localStorage.getItem("email");
  const addressState = window.localStorage.getItem("address");
  const jobState = window.localStorage.getItem("job");
  const purposeState = window.localStorage.getItem("purpose");
  const sofState = window.localStorage.getItem("sof");
  const passwordState = window.localStorage.getItem("password");

  const imgState = window.localStorage.getItem("imgSrc");

  useEffect(() => {
    let useVoiceService = localStorage.getItem("useVoiceService");
    if (useVoiceService == "true") {
      setTimeout(function () {
        speak(
          "본인인증을 위해 촬영이 진행됩니다. 가만히 있어주세요.",
          true,
          anywayOnClickTrigger,
          shootRef
        );
      }, 1000);
    }
  }, []);

  const showModal = () => {
    setModalOpen(true);
  };

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  });

  const [btnDisabled, setBtnDisabled] = useState(false);
  const showAndCapture = (e) => {
    console.log(window.localStorage.getItem("imgSrc"));
    showModal();
    saveAccountData();
    capture();

    // 음성인식인 경우 팝업창 자동으로 닫기..
    let useVoiceService = localStorage.getItem("useVoiceService");
    if (useVoiceService == "true") {
      setModalOpen(false);
      setTimeout(function () {
        speak(
          "촬영이 완료되었습니다. 계좌개설을 완료하시겠습니까?",
          true,
          recogInputOnClickTrigger,
          confirmRef
        );
      }, 1000);
    }
  };

  const saveAccountData = () => {
    window.localStorage.setItem("imgSrc", imgSrc);
  };

  function handleClickNext(e) {
    // axios
    //   .post(
    //     "/dapi/certification",
    //     {},
    //     {
    //       params: {
    //         img: imgState,
    //       },
    //     },
    //     {
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //     }
    //   )
    //   .then(function (response) {
    //     console.log(response.data.account_number);
        // console.log("성공");
        console.log("registerNumberState: " + registerNumberState);
        axios
          .post(
            "/api/open_account",
            {},
            {
              params: {
                name: nameState,
                registerNumber: registerNumberState,
                phoneNumber: phoneNumberState,
                email: emailState,
                address: addressState,
                job: jobState,
                purpose: purposeState,
                sof: sofState,
                password: passwordState,
              },
            },
            {
              headers: {
                "content-type": "application/json",
              },
            }
          )
          .then(function (response) {
            console.log(response.data.account_number);
            console.log("성공");
            window.location.href = "/account_create_complete?account_number=" + response.data.account_number;
          })
          .catch(function (error) {
            console.log("실패");
          });
      // })
      // .catch(function (error) {
      //   console.log("실패");
      // });
  }
  function handleClickBack(e) {
    window.location.href = "/account_create_PW";
  }
  return (
    <div className="createContainer">
      <div className="circleContainer">
        <div className="circle">약관동의</div>
        <div className="circle">정보입력</div>
        <div className="circle">거래목적</div>
        <div className="circle">비밀번호</div>
        <div className="circleSequence">본인인증</div>
        <div className="circle">개설완료</div>
      </div>

      <div className="inputContainer">
        <div className="SelfHeadContainer">
          <div>신분증과 얼굴을 대조중입니다...</div>
        </div>

        <div className="videoContainer">
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        </div>

        <div className="btn">
          <div className="buttonContainer">
            <div className="button">
              <button ref={shootRef} type="button" onClick={showAndCapture}>
                촬영
              </button>
              {modalOpen && (
                <AccountCreateSelfModal setModalOpen={setModalOpen} />
              )}
            </div>
          </div>
        </div>

        <div className="btn">
          <div className="buttonContainer">
            <div className="button" onClick={handleClickBack}>
              <button type="button">뒤로</button>
            </div>
          </div>

          <div className="buttonContainer">
            <div
              ref={confirmRef}
              className="button"
              onClick={handleClickNext}
            >
              <button type="button">확인</button>
            </div>
          </div>
        </div>
      </div>
      <div className="circleContainer"></div>
    </div>
  );
}

export default AccountCreateSelf;
