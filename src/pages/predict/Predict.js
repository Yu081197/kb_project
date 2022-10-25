import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Predict.scss";
function Predict() {
  //페이지 이동
  function handleClick(e) {
    sendPredictData();
    // window.location.href = "/predict_result";
  }

  const [predictAgeState, setPredictAgeState] = useState("");
  const [predictAnnualState, setPredictAnnualState] = useState("");
  const [predictIncomeState, setIncomeState] = useState("");
  const [predictIssueState, setPredictIssueState] = useState("");
  const [predictFamilyState, setPredictFamilyState] = useState("");
  const [predictJobState, setPredictJobState] = useState("");

  const onChangePredictAge = (e) => {
    console.log("========나이==========");
    console.log(e.target.value);
    setPredictAgeState(e.target.value);
  };

  const onChangePredictAnnual = (e) => {
    console.log("========경력==========");
    console.log(e.target.value);
    setPredictAnnualState(e.target.value);
  };

  const onChangePredictIncome = (e) => {
    console.log("========소득==========");
    console.log(e.target.value);
    setIncomeState(e.target.value);
  };

  const onChangePredictIssue = (e) => {
    console.log("========신용카드발급년수==========");
    console.log(e.target.value);
    setPredictIssueState(e.target.value);
  };

  const onChangePredictFamily = (e) => {
    console.log("========가족==========");
    console.log(e.target.value);
    setPredictFamilyState(e.target.value);
  };

  const onChangePredictJob = (e) => {
    console.log("========직업==========");
    console.log(e.target.value);
    setPredictJobState(e.target.value);
  };

  function sendPredictData() {
    axios
      .post(
        "/dapi/predict",
        {},
        {
          params: {
            나이: predictAgeState,
            연간소득: predictIncomeState,
            연차: predictAnnualState,
            직업유형: predictJobState,
            카드발급년수: predictIssueState,
            가족수: predictFamilyState,
          },
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }

  return (
    <div>
      <div className="predictContainer">
        <div className="predictHead">
          <div className="predictMainHead">당신의 신용등급은?</div>
          <div className="predictSubHead">
            정보를 입력하면 신용등급을 예측해드립니다!
          </div>
        </div>
        <form action="" method="POST">
          <div className="section">
            <input
              type="radio"
              name="slide"
              id="slide01"
              defaultChecked="checked"
            />
            <input type="radio" name="slide" id="slide02" />
            <input type="radio" name="slide" id="slide03" />
            <input type="radio" name="slide" id="slide04" />
            <input type="radio" name="slide" id="slide05" />
            <input type="radio" name="slide" id="slide06" />
            <input type="radio" name="slide" id="slide07" />
            <div className="slidewrap">
              <ul className="slidelist">
                <li>
                  <a>
                    <div className="textQContainer">
                      <div className="question">
                        <span>01. 현재 나이가 어떻게 되시나요?</span>
                      </div>
                      <div className="slideinputContainer">
                        <input
                          type="text"
                          name="나이"
                          required=""
                          value={predictAgeState}
                          onChange={onChangePredictAge}
                        />{" "}
                        세
                      </div>
                    </div>
                    <label htmlFor="slide02" className="right" id="move" />
                  </a>
                </li>
                <li>
                  <a>
                    <label htmlFor="slide01" className="left" id="move" />
                    <div className="textQContainer">
                      <div className="question">
                        <span>02. 현재 경력이 몇 년 차이신가요?</span>
                      </div>
                      <div className="slideinputContainer">
                        <input
                          type="text"
                          name="연차"
                          required=""
                          value={predictAnnualState}
                          onChange={onChangePredictAnnual}
                        />{" "}
                        년
                      </div>
                    </div>
                    <label htmlFor="slide03" className="right" id="move" />
                  </a>
                </li>
                <li>
                  <a>
                    <label htmlFor="slide02" className="left" id="move" />
                    <div className="textQContainer">
                      <div className="question">
                        <span>03. 연간소득이 어떻게 되시나요?</span>
                      </div>
                      <div className="slideinputContainer">
                        <input
                          type="text"
                          name="연간소득"
                          required=""
                          value={predictIncomeState}
                          onChange={onChangePredictIncome}
                        />{" "}
                        원
                      </div>
                    </div>
                    <label htmlFor="slide04" className="right" id="move" />
                  </a>
                </li>
                <li>
                  <a>
                    <label htmlFor="slide03" className="left" id="move" />
                    <div className="predictQContainer">
                      <div className="question">
                        <span>
                          04. 신용카드를 발급하신지 몇 년정도 되셨나요?
                        </span>
                      </div>
                      <div className="predictCheckBox add">
                        <div className="selectBox">
                          <input
                            type="radio"
                            name="카드발급년수"
                            id="cardSelect01"
                            defaultValue={0}
                            onChange={onChangePredictIssue}
                          />
                          <label htmlFor="cardSelect01">1년미만</label>
                        </div>
                        <div className="selectBox">
                          <input
                            type="radio"
                            name="카드발급년수"
                            id="cardSelect02"
                            defaultValue={1}
                            onChange={onChangePredictIssue}
                          />
                          <label htmlFor="cardSelect02">2년미만</label>
                        </div>
                        <div className="selectBox">
                          <input
                            type="radio"
                            name="카드발급년수"
                            id="cardSelect03"
                            defaultValue={2}
                            onChange={onChangePredictIssue}
                          />
                          <label htmlFor="cardSelect03">3년미만</label>
                        </div>
                        <div className="selectBox">
                          <input
                            type="radio"
                            name="카드발급년수"
                            id="cardSelect04"
                            defaultValue={3}
                            onChange={onChangePredictIssue}
                          />
                          <label htmlFor="cardSelect04">4년미만</label>
                        </div>
                        <div className="selectBox">
                          <input
                            type="radio"
                            name="카드발급년수"
                            id="cardSelect05"
                            defaultValue={4}
                            onChange={onChangePredictIssue}
                          />
                          <label htmlFor="cardSelect05">5년미만</label>
                        </div>
                        <div className="selectBox">
                          <input
                            type="radio"
                            name="카드발급년수"
                            id="cardSelect06"
                            defaultValue={5}
                            onChange={onChangePredictIssue}
                          />
                          <label htmlFor="cardSelect06">6년미만</label>
                        </div>
                      </div>
                    </div>
                    <label htmlFor="slide05" className="right" id="move" />
                  </a>
                </li>
                <li>
                  <a>
                    <label htmlFor="slide04" className="left" id="move" />
                    <div className="predictQContainer">
                      <div className="question">
                        <span>05. 현재 가족 구성원 수가 어떻게 되시나요?</span>
                      </div>
                      <div className="predictCheckBox add">
                        <div className="selectBox">
                          <input
                            type="radio"
                            name="가족수"
                            id="familySelect01"
                            defaultValue={0}
                            onChange={onChangePredictFamily}
                          />
                          <label htmlFor="familySelect01">없음</label>
                        </div>
                        <div className="selectBox">
                          <input
                            type="radio"
                            name="가족수"
                            id="familySelect02"
                            defaultValue={1}
                            onChange={onChangePredictFamily}
                          />
                          <label htmlFor="familySelect02">1명</label>
                        </div>
                        <div className="selectBox">
                          <input
                            type="radio"
                            name="가족수"
                            id="familySelect03"
                            defaultValue={2}
                            onChange={onChangePredictFamily}
                          />
                          <label htmlFor="familySelect03">2명</label>
                        </div>
                        <div className="selectBox">
                          <input
                            type="radio"
                            name="가족수"
                            id="familySelect04"
                            defaultValue={3}
                            onChange={onChangePredictFamily}
                          />
                          <label htmlFor="familySelect04">3명</label>
                        </div>
                        <div className="selectBox">
                          <input
                            type="radio"
                            name="가족수"
                            id="familySelect05"
                            defaultValue={4}
                            onChange={onChangePredictFamily}
                          />
                          <label htmlFor="familySelect05">4명</label>
                        </div>
                        <div className="selectBox">
                          <input
                            type="radio"
                            name="가족수"
                            id="familySelect06"
                            defaultValue={5}
                            onChange={onChangePredictFamily}
                          />
                          <label htmlFor="familySelect06">5명</label>
                        </div>
                      </div>
                    </div>
                    <label htmlFor="slide06" className="right" id="move" />
                  </a>
                </li>
                <li>
                  <a>
                    <label htmlFor="slide05" className="left" id="move" />
                    <div className="predictQContainer">
                      <div className="question">
                        <span>06. 현재 직업이 어떻게 되시나요?</span>
                      </div>
                      <div className="predictCheckBoxJOB">
                        <select
                          className="jobType"
                          name="직업유형"
                          onChange={onChangePredictJob}
                        >
                          <option value="none">=======선택하세요=======</option>
                          <option value={0}>회계사</option>
                          <option value={1}>청소업체</option>
                          <option value={2}>요리사</option>
                          <option value={3}>현장근로자</option>
                          <option value={4}>운전사</option>
                          <option value={5}>인사과 직원</option>
                          <option value={6}>고급기술인력</option>
                          <option value={7}>IT업계 직업</option>
                          <option value={8}>임금노동자</option>
                          <option value={9}>저숙련 노동자</option>
                          <option value={10}>관리자</option>
                          <option value={11}>의료진</option>
                          <option value={12}>개인서비스 직원</option>
                          <option value={13}>부동산 중개업자</option>
                          <option value={14}>영업 직원</option>
                          <option value={15}>비서</option>
                          <option value={16}>보안 직원</option>
                          <option value={17}>웨이터</option>
                          <option value={18}>무직</option>
                        </select>
                      </div>
                    </div>
                    <label htmlFor="slide07" className="right" id="move" />
                  </a>
                </li>
                <li>
                  <a>
                    <label htmlFor="slide06" className="left" id="move" />
                    <div className="BtnContainer">
                      <h2>모든 질문에 답하셨다면!!</h2>
                      <div className="predictBtn">
                        <div onClick={handleClick} name="pred">
                          신용등급 예측하기
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Predict;
