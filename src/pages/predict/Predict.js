import React from "react";
import "./Predict.scss";
function Predict() {
  return (
    <div className="predictContainer">
      <div className="predictHead">당신의 신용등급은?</div>
      <div className="predictSub">
        정보를 입력하면 신용등급을 예측해드립니다!
      </div>
      <div className="predictListContainer">
        <div className="predictListName">성별</div>
        <div className="predictListCheakBox">
          <div>
            <div className="predictList">남성</div>
            <input type="checkbox" name="xxx" value="yyy" />
          </div>
          <div>
            <div>남성</div>
            <input type="checkbox" name="xxx" value="yyy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Predict;
