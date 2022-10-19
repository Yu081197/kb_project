import axios from "axios";
import React, { useState } from "react";
import "./AccountCreateInform.scss";
import AccountCreateInformModal from "./AccountCreateModal/AccountCreateInformModal";
import Webcam from "react-webcam";
import AccountCreateSelfModal from "./AccountCreateModal/AccountCreateSelfModal";

function AccountCreateInform() {
  const [accountCreateInformModalOpen, setAccountCreateInformModalOpen] =
    useState(false);

  const [accountCreateSelfmodalOpen, setAccountCreateSelfModalOpen] =
    useState(false);

  const showAccountCreateInformModal = () => {
    setAccountCreateInformModalOpen(true);
  };

  const showAccountCreateSelfModal = () => {
    setAccountCreateSelfModalOpen(true);
  };

  const [isAllFill, setIsAllFill] = useState(false);
  const [registerNumberState, setRegisterNumberState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameState, setNameState] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneNumberState, setPhoneNumberState] = useState();
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [addressState, setAddressState] = useState("");
  const [jobState, setJobState] = useState("");

  const [purposeState, setPurposeState] = useState("");
  const [sofState, setSofState] = useState("");

  const [passwordState, setPasswordState] = useState();
  const [validPasswordState, setValidPasswordState] = useState();
  const [validPasswordError, setValidPasswordError] = useState(false);

  const jobOptions = [
    {
      label: "무직",
      value: "무직",
    },
    {
      label: "자영업자",
      value: "자영업자",
    },
    {
      label: "회사원",
      value: "회사원",
    },
    {
      label: "학생",
      value: "학생",
    },
  ];

  const purposeOptions = [
    {
      label: "선택해주세요",
      value: "",
    },
    {
      label: "월급통장",
      value: "월급통장",
    },
    {
      label: "사업",
      value: "사업",
    },
    {
      label: "생활비",
      value: "생활비",
    },
    {
      label: "대출",
      value: "대출",
    },
    {
      label: "저축",
      value: "저축",
    },
    {
      label: "연금",
      value: "연금",
    },
  ];

  const sofOptions = [
    {
      label: "선택해주세요",
      value: "",
    },
    {
      label: "월급",
      value: "월급",
    },
    {
      label: "사업 소득",
      value: "사업 소득",
    },
    {
      label: "생활비",
      value: "생활비",
    },
    {
      label: "용돈",
      value: "용돈",
    },
    {
      label: "금융 소득",
      value: "금융 소득",
    },
    {
      label: "퇴직금",
      value: "퇴직금",
    },
    {
      label: "임대 소득",
      value: "임대 소득",
    },
    {
      label: "상속 · 증여",
      value: "상속 · 증여",
    },
  ];

  const btnActive = () => {
    if (
      setEmailError === true &&
      setNameError === true &&
      setPhoneNumberError === true
    ) {
      setIsAllFill(true);
    } else {
      showAccountCreateInformModal();
    }
  };

  const onChangeEmail = (e) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!e.target.value || emailRegex.test(e.target.value))
      setEmailError(false);
    else setEmailError(true);
    setEmailState(e.target.value);
  };
  const onChangeName = (e) => {
    const nameRegex = /^[가-힣]{1,10}|[a-zA-Z]{1,10}\s[a-zA-Z]{1,10}$/;
    if (!e.target.value || nameRegex.test(e.target.value)) setNameError(false);
    else setNameError(true);
    setNameState(e.target.value);
  };

  const onChangePhoneNumber = (e) => {
    const phoneNumberRegex = /^(\d{2,3})(\d{3,4})(\d{4})$/;
    if (!e.target.value || phoneNumberRegex.test(e.target.value))
      setPhoneNumberError(false);
    else setPhoneNumberError(true);
    setPhoneNumberState(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddressState(e.target.value);
  };

  const onChangeJob = (e) => {
    setJobState(e.target.value);
  };

  const onChangePassword = (e) => {
    setPasswordState(e.target.value);
  };

  const onChangeValidPassword = (e) => {
    if (!validPasswordState(e.target.value) || passwordState(e.target.value))
      setValidPasswordError(true);
    else setValidPasswordError(false);
    setValidPasswordState(e.target.value);
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
    showAccountCreateSelfModal();
    capture();
  };

  const handleSubmit = async (e) => {
    await axios
      .post(
        "/api/user",
        {},
        {
          params: {
            registerNumber: registerNumberState,
            name: nameState,
            phoneNumber: phoneNumberState,
            email: emailState,
            address: addressState,
            job: jobState,
            password: passwordState,
            sof: sofState,
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
  };

  const handleImgSubmit = async (e) => {
    await axios
      .post(
        "/",
        {},
        {
          params: {
            registerNumber: registerNumberState,
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
  };

  function handleClickNext(e) {
    window.location.href = "/account_create_purpose";
  }
  function handleClickBack(e) {
    window.location.href = "/account_create";
  }
  return (
    <div className="allContainer">
      <div className="createContainer">
        <div className="circleContainer">
          <div className="circle">약관동의</div>
          <div className="circleSequence">정보입력</div>
          <div className="circle">거래목적</div>
          <div className="circle">비밀번호</div>
          <div className="circle">본인인증</div>
          <div className="circle">개설완료</div>
        </div>
        <form method="post">
          <div className="inputContainer">
            <div className="head">
              <div>정보입력</div>
            </div>
            <div className="input">
              <div>이름</div>
              <input
                type="text"
                name="name"
                id="name"
                value={nameState}
                placeholder="이름을 입력해주세요."
                onChange={onChangeName}
              />
              {nameError && (
                <div style={{ color: "red", fontSize: "14px" }}>
                  잘못된 양식입니다.
                </div>
              )}
            </div>
            <div className="input">
              <div>휴대폰 번호</div>
              <input
                name="phone"
                id="phonenumber"
                maxlength="13"
                value={phoneNumberState}
                placeholder="휴대전화번호를 입력해 주세요."
                onChange={onChangePhoneNumber}
              />
              {phoneNumberError && (
                <div style={{ color: "red", fontSize: "14px" }}>
                  잘못된 양식입니다.
                </div>
              )}
            </div>
            <div className="input">
              <div>이메일</div>
              <input
                type="text"
                name="email"
                id="email"
                value={emailState}
                placeholder="이메일을 입력해주세요."
                onChange={onChangeEmail}
              />
              {emailError && (
                <div style={{ color: "red", fontSize: "14px" }}>
                  잘못된 양식입니다.
                </div>
              )}
            </div>
            <div className="input">
              <div>주소</div>
              <input
                type="text"
                name="address"
                value={addressState}
                id="address"
                placeholder="주소를 입력해주세요."
                onChange={onChangeAddress}
              />
            </div>
            <div className="input">
              <div>직업</div>
              <select
                form="jobForm"
                value={jobState}
                onSubmit={handleSubmit}
                onChange={(e) => setJobState(e.target.value)}
              >
                {jobOptions.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="btn">
              <div className="buttonContainer">
                <div className="button">
                  <button type="button" onClick={handleClickBack}>
                    뒤로
                  </button>
                </div>
              </div>

              <div className="buttonContainer">
                <div
                  className="button"
                  onClick={
                    isAllFill === true
                      ? { handleSubmit, handleClickNext }
                      : btnActive
                  }
                >
                  <button type="button">확인</button>
                  {accountCreateInformModalOpen && (
                    <AccountCreateInformModal
                      setModalOpen={setAccountCreateInformModalOpen}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="circleContainer"></div>
      </div>

      <div className="createContainer">
        <div className="circleContainer">
          <div className="circle">약관동의</div>
          <div className="circle">정보입력</div>
          <div className="circleSequence">거래목적</div>
          <div className="circle">비밀번호</div>
          <div className="circle">본인인증</div>
          <div className="circle">개설완료</div>
        </div>
        <div className="inputContainer">
          <div className="head">
            <div>안전한 금융거래를 위해 확인해주세요</div>
          </div>
          <div className="input">
            <div>거래목적</div>
            <select
              id="purpose"
              form="purposeForm"
              value={purposeState}
              onChange={(e) => setPurposeState(e.target.value)}
            >
              {purposeOptions.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="input">
            <div>자금출처</div>
            <select
              id="sof"
              form="sofForm"
              value={sofState}
              onChange={(e) => setSofState(e.target.value)}
            >
              {sofOptions.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
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

      <div className="createContainer">
        <div className="circleContainer">
          <div className="circle">약관동의</div>
          <div className="circle">정보입력</div>
          <div className="circle">거래목적</div>
          <div className="circleSequence">비밀번호</div>
          <div className="circle">본인인증</div>
          <div className="circle">개설완료</div>
        </div>
        <div className="inputContainer">
          <div className="head">
            <div>비밀번호</div>
          </div>
          <div className="input">
            <div>계좌비밀번호</div>
            <input
              type="password"
              maxlength="4"
              name="Password"
              id="password"
              value={passwordState}
              onChange={onChangePassword}
              placeholder="비밀번호를 입력하세요."
            />
          </div>
          <div className="input">
            <div>계좌비밀번호 확인</div>
            <input
              type="password"
              maxlength="4"
              name="Password"
              id="pw"
              value={validPasswordState}
              placeholder="다시 한 번 입력하세요."
              onChange={onChangeValidPassword}
            />{" "}
            {validPasswordError && (
              <div style={{ color: "red", fontSize: "14px" }}>
                비밀번호를 확인해주세요.
              </div>
            )}
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
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
          </div>

          <div className="btn">
            <div className="buttonContainer">
              <div className="button">
                <button type="button" onClick={showAndCapture}>
                  촬영
                </button>
                {accountCreateSelfmodalOpen && (
                  <AccountCreateSelfModal
                    setModalOpen={setAccountCreateSelfModalOpen}
                  />
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
    </div>
  );
}

export default AccountCreateInform;
