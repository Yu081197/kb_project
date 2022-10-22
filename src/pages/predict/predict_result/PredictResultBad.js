import React from "react";
import "./PredictResultBad.scss";
import jquery from "jquery";
import $ from "jquery";
import { Image } from "react-bootstrap";

window.$ = window.jquery = jquery;

class PredictResultBad extends React.Component {
  componentDidMount() {
    console.log("test");
    $(document).ready(function () {
      $("#badrabbit").animate(
        {
          left: "10%",
        },
        1700
      );

      $("#badgage")
        .animate(
          {
            width: "30%",
          },
          1700,
          "swing"
        )
        .queue(function () {
          $("div.result_cover").fadeIn(1500);
        });
    });

    // Jquery here $(...)...
  }
  render() {
    return (
      <div className="predictResultContainer">
        <div className="road_container">
          <div id="road">
            <div id="badgage"></div>
            <div id="badrabbit"></div>
          </div>
          <div></div>
        </div>

        <div style={{ display: "none" }} className="result_cover">
          <div className="result_container">
            <div className="result">
              <img src={require("./img/결과스.png")} alt="" id="yours" />
              <div id="badcredit">위험 등급입니다.</div>
            </div>
            <div className="exp">
              비교적 금리가 높은 금융업권과의 거래가 많은 고객으로 단기연체의
              경험을 비교적 많이 보유하고 있어 부실화 가능성이 높음
            </div>
          </div>
        </div>
        <div className="buttonContainer">
          <div className="button">
            <button>확인</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PredictResultBad;
