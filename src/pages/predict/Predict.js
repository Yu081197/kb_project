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
      <div className="predictContainer">
        <div className="predictHead">
          <div className="predictMainHead">당신의 신용등급은?</div>

          <div className="predictSubHead">
            정보를 입력하면 신용등급을 예측해드립니다!
          </div>
        </div>
        <form action="" method="get">
          <div className="predictListContainer">
            <div className="predictQContainer">
              <span>연령</span>
              <div>
                <input type="text" name="나이" required /> 세
              </div>
            </div>
            <div className="predictQContainer">
              <span>경력연차</span>
              <div>
                <input type="text" name="연차" required /> 년
              </div>
            </div>
            <div className="predictQContainer">
              <span>연간소득</span>
              <div>
                <input type="text" name="연간소득" required /> 원
              </div>
            </div>
            <div className="predictQContainer">
              <span>성별</span>
              <div className="predictCheckBox">
                <div>
                  <input type="radio" name="성별" value="0" />
                  <label>남성</label>
                </div>
                <div>
                  <input type="radio" name="성별" value="1" />
                  <label>여성</label>
                </div>
              </div>
            </div>
            <div className="predictQContainer">
              <span>부동산 여부</span>
              <div className="predictCheckBox">
                <div>
                  <input type="radio" name="부동산유무" value="1" />
                  <label>네</label>
                </div>
                <div>
                  <input type="radio" name="부동산유무" value="0" />
                  <label>아니요</label>
                </div>
              </div>
            </div>
            <div className="predictQContainer">
              <span>차량 소유 여부</span>
              <div className="predictCheckBox">
                <div>
                  <input type="radio" name="차유무" value="1" />
                  <label>네</label>
                </div>
                <div>
                  <input type="radio" name="차유무" value="0" />
                  <label>아니요</label>
                </div>
              </div>
            </div>
            <div className="predictQContainer">
              <span>업무전화 유무</span>
              <div className="predictCheckBox">
                <div>
                  <input type="radio" name="업무용핸드폰유무" value="1" />
                  <label>네</label>
                </div>
                <div>
                  <input type="radio" name="업무용핸드폰유무" value="0" />
                  <label>아니요</label>
                </div>
              </div>
            </div>
            <div className="predictQContainer">
              <span>전화 유무</span>
              <div className="predictCheckBox">
                <div>
                  <input type="radio" name="핸드폰유무" value="1" />
                  <label>네</label>
                </div>
                <div>
                  <input type="radio" name="핸드폰유무" value="0" />
                  <label>아니요</label>
                </div>
              </div>
            </div>
            <div className="predictQContainer">
              <span>메일 유무</span>
              <div className="predictCheckBox">
                <div>
                  <input type="radio" name="이메일유무" value="1" />
                  <label>네</label>
                </div>
                <div>
                  <input type="radio" name="이메일유무" value="0" />
                  <label>아니요</label>
                </div>
              </div>
            </div>
            <div className="predictQContainer">
              <span>카드발급년수</span>
              <div className="predictCheckBox add">
                <div>
                  <div>
                    <input type="radio" name="카드발급년수" value="0" />
                    <label>1년미만</label>
                  </div>
                  <div>
                    <input type="radio" name="카드발급년수" value="1" />
                    <label>2년미만</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" name="카드발급년수" value="2" />
                    <label>3년미만</label>
                  </div>
                  <div>
                    <input type="radio" name="카드발급년수" value="3" />
                    <label>4년미만</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" name="카드발급년수" value="4" />
                    <label>5년미만</label>
                  </div>
                  <div>
                    <input type="radio" name="카드발급년수" value="5" />
                    <label>6년미만</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="predictQContainer">
              <span>자녀 수</span>
              <div className="predictCheckBox add">
                <div>
                  <div>
                    <input type="radio" name="자녀수" value="0" />
                    <label>없음</label>
                  </div>
                  <div>
                    <input type="radio" name="자녀수" value="1" />
                    <label>1명</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" name="자녀수" value="2" />
                    <label>2명</label>
                  </div>
                  <div>
                    <input type="radio" name="자녀수" value="3" />
                    <label>3명 이상</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="predictQContainer">
              <span>가족 수</span>
              <div className="predictCheckBox add">
                <div>
                  <div>
                    <input type="radio" name="가족수" value="0" />
                    <label>없음</label>
                  </div>
                  <div>
                    <input type="radio" name="가족수" value="1" />
                    <label>1명</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" name="가족수" value="2" />
                    <label>2명</label>
                  </div>
                  <div>
                    <input type="radio" name="가족수" value="3" />
                    <label>3명</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" name="가족수" value="4" />
                    <label>4명</label>
                  </div>
                  <div>
                    <input type="radio" name="가족수" value="5" />
                    <label>5명 이상</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="predictQContainer">
              <span>업직종</span>
              <div className="predictCheckBox add">
                <div>
                  <div>
                    <input type="radio" name="소득분류" value="0" />
                    <label>사업자</label>
                  </div>
                  <div>
                    <input type="radio" name="소득분류" value="1" />
                    <label>연금수급자</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" name="소득분류" value="2" />
                    <label>국회의원</label>
                  </div>
                  <div>
                    <input type="radio" name="소득분류" value="3" />
                    <label>학생</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" name="소득분류" value="4" />
                    <label>근로자</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="predictQContainer">
              <span>학력</span>
              <div className="predictCheckBox add">
                <div>
                  <div>
                    <input type="radio" name="교육" value="0" />
                    <label>중학교 졸업</label>
                  </div>
                  <div>
                    <input type="radio" name="교육" value="3" />
                    <label>고등학교 졸업</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" name="교육" value="2" />
                    <label>대학 졸업</label>
                  </div>
                  <div>
                    <input type="radio" name="교육" value="4" />
                    <label>대학원 졸업</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" name="교육" value="1" />
                    <label>박사 졸업</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="predictQContainer">
              <span>가족유형</span>
              <div className="predictCheckBox add">
                <div>
                  <div>
                    <input type="radio" name="가정" value="3" />
                    <label>싱글가정</label>
                  </div>
                  <div>
                    <input type="radio" name="가정" value="1" />
                    <label>결혼가정</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" name="가정" value="0" />
                    <label>다문화가정</label>
                  </div>
                  <div>
                    <input type="radio" name="가정" value="2" />
                    <label>이혼가정</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" name="가정" value="4" />
                    <label>과부</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="predictQContainer">
              <span>집</span>
              <div className="predictCheckBox add">
                <div>
                  <div>
                    <input type="radio" name="집" value="0" />
                    <label>연립아파트</label>
                  </div>
                  <div>
                    <input type="radio" name="집" value="1" />
                    <label>일반아파트</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" name="집" value="2" />
                    <label>시립아파트</label>
                  </div>
                  <div>
                    <input type="radio" name="집" value="3" />
                    <label>임대아파트</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="radio" name="집" value="4" />
                    <label>캥거루족아파트</label>
                  </div>
                  <div>
                    <input type="radio" name="집" value="5" />
                    <label>오피스텔</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="predictQContainer">
              <span>직업유형</span>
              <div className="predictCheckBox">
                <div>
                  <select
                    className="jobType"
                    name="직업유형"
                    value={jobtypeState}
                    onChange={onChangeJobtype}
                  >
                    <option value="none">===선택===</option>
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
            </div>
          </div>
        </form>
        <div className="predictBtn">
          <button type="submit" name="pred" onClick={handleClick}>
            신용등급 예측하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Predict;
