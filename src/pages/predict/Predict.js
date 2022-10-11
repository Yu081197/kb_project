import React from "react";
import "./Predict.scss";
function Predict() {
  //페이지 이동
  function handleClick(e) {
    window.location.href = "/predict_result";
  }
  return (
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
              <input type="text" name="age" required /> 세
            </div>
          </div>
          <div className="predictQContainer">
            <span>경력연차</span>
            <div>
              <input type="text" name="annual" required /> 년
            </div>
          </div>
          <div className="predictQContainer">
            <span>연간소득</span>
            <div>
              <input type="text" name="income" required /> 원
            </div>
          </div>
          <div className="predictQContainer">
            <span>성별</span>
            <div className="predictCheckBox">
              <div>
                <input type="radio" name="gender" value="male" />
                <label>남성</label>
              </div>
              <div>
                <input type="radio" name="gender" value="female" />
                <label>여성</label>
              </div>
            </div>
          </div>
          <div className="predictQContainer">
            <span>부동산 여부</span>
            <div className="predictCheckBox">
              <div>
                <input type="radio" name="estate" value="1" />
                <label>네</label>
              </div>
              <div>
                <input type="radio" name="estate" value="0" />
                <label>아니요</label>
              </div>
            </div>
          </div>
          <div className="predictQContainer">
            <span>차량 소유 여부</span>
            <div className="predictCheckBox">
              <div>
                <input type="radio" name="car" value="1" />
                <label>네</label>
              </div>
              <div>
                <input type="radio" name="car" value="0" />
                <label>아니요</label>
              </div>
            </div>
          </div>
          <div className="predictQContainer">
            <span>직업 유무</span>
            <div className="predictCheckBox">
              <div>
                <input type="radio" name="work" value="1" />
                <label>네</label>
              </div>
              <div>
                <input type="radio" name="work" value="0" />
                <label>아니요</label>
              </div>
            </div>
          </div>
          <div className="predictQContainer">
            <span>업무전화 유무</span>
            <div className="predictCheckBox">
              <div>
                <input type="radio" name="work_tel" value="1" />
                <label>네</label>
              </div>
              <div>
                <input type="radio" name="work_tel" value="0" />
                <label>아니요</label>
              </div>
            </div>
          </div>
          <div className="predictQContainer">
            <span>전화 유무</span>
            <div className="predictCheckBox">
              <div>
                <input type="radio" name="tel" value="1" />
                <label>네</label>
              </div>
              <div>
                <input type="radio" name="tel" value="0" />
                <label>아니요</label>
              </div>
            </div>
          </div>
          <div className="predictQContainer">
            <span>메일 유무</span>
            <div className="predictCheckBox">
              <div>
                <input type="radio" name="email" value="1" />
                <label>네</label>
              </div>
              <div>
                <input type="radio" name="email" value="0" />
                <label>아니요</label>
              </div>
            </div>
          </div>
          <div className="predictQContainer">
            <span>카드발급월수</span>
            <div className="predictCheckBox add">
              <div>
                <div>
                  <input type="radio" name="card" value="0" />
                  <label>1년미만</label>
                </div>
                <div>
                  <input type="radio" name="card" value="1" />
                  <label>2년미만</label>
                </div>
              </div>
              <div>
                <div>
                  <input type="radio" name="card" value="2" />
                  <label>3년미만</label>
                </div>
                <div>
                  <input type="radio" name="card" value="3" />
                  <label>4년미만</label>
                </div>
              </div>
              <div>
                <div>
                  <input type="radio" name="card" value="4" />
                  <label>5년미만</label>
                </div>
                <div>
                  <input type="radio" name="card" value="5" />
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
                  <input type="radio" name="child" value="0" />
                  <label>없음</label>
                </div>
                <div>
                  <input type="radio" name="child" value="1" />
                  <label>1명</label>
                </div>
              </div>
              <div>
                <div>
                  <input type="radio" name="child" value="2" />
                  <label>2명</label>
                </div>
                <div>
                  <input type="radio" name="child" value="3" />
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
                  <input type="radio" name="family" value="0" />
                  <label>없음</label>
                </div>
                <div>
                  <input type="radio" name="family" value="1" />
                  <label>1명</label>
                </div>
              </div>
              <div>
                <div>
                  <input type="radio" name="family" value="2" />
                  <label>2명</label>
                </div>
                <div>
                  <input type="radio" name="family" value="3" />
                  <label>3명</label>
                </div>
              </div>
              <div>
                <div>
                  <input type="radio" name="family" value="4" />
                  <label>4명</label>
                </div>
                <div>
                  <input type="radio" name="family" value="5" />
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
                  <input type="radio" name="job" value="0" />
                  <label>사업자</label>
                </div>
                <div>
                  <input type="radio" name="job" value="1" />
                  <label>연금수급자</label>
                </div>
              </div>
              <div>
                <div>
                  <input type="radio" name="job" value="2" />
                  <label>국회의원</label>
                </div>
                <div>
                  <input type="radio" name="job" value="3" />
                  <label>학생</label>
                </div>
              </div>
              <div>
                <div>
                  <input type="radio" name="job" value="4" />
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
                  <input type="radio" name="education" value="0" />
                  <label>중학교 졸업</label>
                </div>
                <div>
                  <input type="radio" name="education" value="3" />
                  <label>고등학교 졸업</label>
                </div>
              </div>
              <div>
                <div>
                  <input type="radio" name="education" value="2" />
                  <label>대학 졸업</label>
                </div>
                <div>
                  <input type="radio" name="education" value="4" />
                  <label>대학원 졸업</label>
                </div>
              </div>
              <div>
                <div>
                  <input type="radio" name="education" value="1" />
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
                  <input type="radio" name="family_type" value="3" />
                  <label>싱글가정</label>
                </div>
                <div>
                  <input type="radio" name="family_type" value="1" />
                  <label>결혼가정</label>
                </div>
              </div>
              <div>
                <div>
                  <input type="radio" name="family_type" value="0" />
                  <label>다문화가정</label>
                </div>
                <div>
                  <input type="radio" name="family_type" value="2" />
                  <label>이혼가정</label>
                </div>
              </div>
              <div>
                <div>
                  <input type="radio" name="family_type" value="4" />
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
                  <input type="radio" name="house_type" value="0" />
                  <label>연립아파트</label>
                </div>
                <div>
                  <input type="radio" name="house_type" value="1" />
                  <label>일반아파트</label>
                </div>
              </div>
              <div>
                <div>
                  <input type="radio" name="house_type" value="2" />
                  <label>시립아파트</label>
                </div>
                <div>
                  <input type="radio" name="house_type" value="4" />
                  <label>임대아파트</label>
                </div>
              </div>
              <div>
                <div>
                  <input type="radio" name="house_type" value="5" />
                  <label>캥거루족아파트</label>
                </div>
                <div>
                  <input type="radio" name="house_type" value="3" />
                  <label>오피스텔</label>
                </div>
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
  );
}

export default Predict;
