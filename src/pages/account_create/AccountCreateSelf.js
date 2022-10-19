import React, { useEffect, useRef, useState } from "react";
import "./AccountCreateSelf.scss";
import Webcam from "react-webcam";
import AccountCreateSelfModal from "./AccountCreateModal/AccountCreateSelfModal";
import axios from "axios";

function AccountCreateSelf() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const [btnDisabled, setBtnDisabled] = useState(false);
  const showAndCapture = () => {
    console.log(imgSrc);
    showModal();
    capture();
  };

  const handleSubmit = async (e) => {
    await axios
      .post(
        "/",
        {},
        {
          params: {
            image: imgSrc,
          },
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    handleClickNext();
  };

  function handleClickNext(e) {
    window.location.href = "/account_create_complete";
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
              <button type="button" onClick={showAndCapture}>
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
            <div className="button" onClick={handleSubmit}>
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
