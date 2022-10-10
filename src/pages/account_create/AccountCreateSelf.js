import React, { useEffect, useRef } from "react";
import "./AccountCreateSelf.scss";

function AccountCreateSelf() {
  // 비디오 띄우기
  const videoRef = useRef(null);
  // 화면 캡쳐
  const photoRef = useRef(null);
  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        //비디오 tag에 stream 추가
        let video = videoRef.current;

        video.srcObject = stream;

        video.play();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 화면 캡쳐
  const takePicture = () => {
    let width = 500;
    let height = 380;

    let photo = photoRef.current;
    let video = videoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, photo.width, photo.height);
  };

  useEffect(() => {
    getUserCamera();
  }, [videoRef]);

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
          <video
            ref={videoRef}
            style={{ width: "500px", height: "500px" }}
          ></video>
        </div>

        <div className="btn">
          <div className="buttonContainer">
            <div className="button">
              <button onClick={takePicture} type="button">
                촬영
              </button>
              {/* <div>
                <canvas ref={photoRef}></canvas>
              </div> */}
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
            <div className="button" onClick={handleClickNext}>
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
