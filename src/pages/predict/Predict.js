import React, { useState } from "react";
import "./Predict.scss";
function Predict() {
  const [jobtypeState, setJobTypeState] = useState("");

  const onChangeJobtype = (e) => {
    setJobTypeState(e.target.value);
  };

  //페이지 이동
  function handleClick(e) {
    window.location.href = "/predict_result";
  }
  return (
    <div>
      <div class="predictContainer">
        <div class="predictHead">
          <div class="predictMainHead">당신의 신용등급은?</div>

          <div class="predictSubHead">
            정보를 입력하면 신용등급을 예측해드립니다!
          </div>
        </div>

        <form action="" method="POST">
          <div class="section">
            <input type="radio" name="slide" id="slide01" checked="checked" />
            <input type="radio" name="slide" id="slide02" />
            <input type="radio" name="slide" id="slide03" />
            <input type="radio" name="slide" id="slide04" />
            <input type="radio" name="slide" id="slide05" />
            <input type="radio" name="slide" id="slide06" />
            <input type="radio" name="slide" id="slide07" />

            <div class="slidewrap">
              <ul class="slidelist">
                <li>
                  <a>
                    <div class="textQContainer">
                      <div class="question">
                        <span>01. 현재 나이가 어떻게 되시나요?</span>
                      </div>
                      <div class="slideinputContainer">
                        <input type="text" name="나이" required /> 세
                      </div>
                    </div>
                    <label for="slide02" class="right" id="move"></label>
                  </a>
                </li>

                <li>
                  <a>
                    <label for="slide01" class="left" id="move"></label>
                    <div class="textQContainer">
                      <div class="question">
                        <span>02. 현재 경력이 몇 년 차이신가요?</span>
                      </div>
                      <div class="slideinputContainer">
                        <input type="text" name="연차" required /> 년
                      </div>
                    </div>
                    <label for="slide03" class="right" id="move"></label>
                  </a>
                </li>
                <li>
                  <a>
                    <label for="slide02" class="left" id="move"></label>
                    <div class="textQContainer">
                      <div class="question">
                        <span>03. 연간소득이 어떻게 되시나요?</span>
                      </div>
                      <div class="slideinputContainer">
                        <input type="text" name="연간소득" required /> 원
                      </div>
                    </div>
                    <label for="slide04" class="right" id="move"></label>
                  </a>
                </li>

                <li>
                  <a>
                    <label for="slide03" class="left" id="move"></label>
                    <div class="predictQContainer">
                      <div class="question">
                        <span>
                          04. 신용카드를 발급하신지 몇 년정도 되셨나요?
                        </span>
                      </div>

                      <div class="predictCheckBox add">
                        <div class="selectBox">
                          <input
                            type="radio"
                            name="카드발급년수"
                            id="cardSelect01"
                            value="0"
                          />
                          <label for="cardSelect01">1년미만</label>
                        </div>
                        <div class="selectBox">
                          <input
                            type="radio"
                            name="카드발급년수"
                            id="cardSelect02"
                            value="1"
                          />
                          <label for="cardSelect02">2년미만</label>
                        </div>
                        <div class="selectBox">
                          <input
                            type="radio"
                            name="카드발급년수"
                            id="cardSelect03"
                            value="2"
                          />
                          <label for="cardSelect03">3년미만</label>
                        </div>
                        <div class="selectBox">
                          <input
                            type="radio"
                            name="카드발급년수"
                            id="cardSelect04"
                            value="3"
                          />
                          <label for="cardSelect04">4년미만</label>
                        </div>
                        <div class="selectBox">
                          <input
                            type="radio"
                            name="카드발급년수"
                            id="cardSelect05"
                            value="4"
                          />
                          <label for="cardSelect05">5년미만</label>
                        </div>
                        <div class="selectBox">
                          <input
                            type="radio"
                            name="카드발급년수"
                            id="cardSelect06"
                            value="5"
                          />
                          <label for="cardSelect06">6년미만</label>
                        </div>
                      </div>
                    </div>
                    <label for="slide05" class="right" id="move"></label>
                  </a>
                </li>

                <li>
                  <a>
                    <label for="slide04" class="left" id="move"></label>
                    <div class="predictQContainer">
                      <div class="question">
                        <span>05. 현재 가족 구성원 수가 어떻게 되시나요?</span>
                      </div>

                      <div class="predictCheckBox add">
                        <div class="selectBox">
                          <input
                            type="radio"
                            name="가족수"
                            id="familySelect01"
                            value="0"
                          />
                          <label for="familySelect01">없음</label>
                        </div>
                        <div class="selectBox">
                          <input
                            type="radio"
                            name="가족수"
                            id="familySelect02"
                            value="1"
                          />
                          <label for="familySelect02">1명</label>
                        </div>
                        <div class="selectBox">
                          <input
                            type="radio"
                            name="가족수"
                            id="familySelect03"
                            value="2"
                          />
                          <label for="familySelect03">2명</label>
                        </div>
                        <div class="selectBox">
                          <input
                            type="radio"
                            name="가족수"
                            id="familySelect04"
                            value="3"
                          />
                          <label for="familySelect04">3명</label>
                        </div>
                        <div class="selectBox">
                          <input
                            type="radio"
                            name="가족수"
                            id="familySelect05"
                            value="4"
                          />
                          <label for="familySelect05">4명</label>
                        </div>
                        <div class="selectBox">
                          <input
                            type="radio"
                            name="가족수"
                            id="familySelect06"
                            value="5"
                          />
                          <label for="familySelect06">5명</label>
                        </div>
                      </div>
                    </div>
                    <label for="slide06" class="right" id="move"></label>
                  </a>
                </li>

                <li>
                  <a>
                    <label for="slide05" class="left" id="move"></label>
                    <div class="predictQContainer">
                      <div class="question">
                        <span>06. 현재 직업이 어떻게 되시나요?</span>
                      </div>

                      <div class="predictCheckBoxJOB">
                        <select class="jobType" name="직업유형">
                          <option value="none">=======선택하세요=======</option>
                          <option value="0">회계사</option>
                          <option value="1">청소업체</option>
                          <option value="2">요리사</option>
                          <option value="3">현장근로자</option>
                          <option value="4">운전사</option>
                          <option value="5">인사과 직원</option>
                          <option value="6">고급기술인력</option>
                          <option value="7">IT업계 직업</option>
                          <option value="8">임금노동자</option>
                          <option value="9">저숙련 노동자</option>
                          <option value="10">관리자</option>
                          <option value="11">의료진</option>
                          <option value="12">개인서비스 직원</option>
                          <option value="13">부동산 중개업자</option>
                          <option value="14">영업 직원</option>
                          <option value="15">비서</option>
                          <option value="16">보안 직원</option>
                          <option value="17">웨이터</option>
                          <option value="18">무직</option>
                        </select>
                      </div>
                    </div>
                    <label for="slide07" class="right" id="move"></label>
                  </a>
                </li>
                <li>
                  <a>
                    <label for="slide06" class="left" id="move"></label>
                    <div class="BtnContainer">
                      <h2>모든 질문에 답하셨다면!!</h2>
                      <div class="predictBtn">
                        <button type="submit" name="pred">
                          신용등급 예측하기
                        </button>
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
