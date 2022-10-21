import React from "react";
import "./PredictResultGood.scss";
import jquery from "jquery";
import $ from "jquery";
import { Image } from "react-bootstrap";

window.$ = window.jquery = jquery;

class PredictResultGood extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $("#goodrabbit").animate(
        {
          left: "70%",
        },
        1700
      );
      $("#goodgage")
        .animate(
          {
            width: "90%",
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
        <div class="road_container">
          <div id="road">
            <div id="goodgage"></div>
            <div id="goodrabbit"></div>
          </div>
          <div></div>
        </div>

        <div style={{ display: "none" }} class="result_cover">
          <div class="result_container">
            <div class="result">
              <img src={require("./img/결과스.png")} alt="" id="yours" />
              <div id="goodcredit">우량 등급입니다.</div>
            </div>
            <div class="exp">
              오랜 신용거래 경력과 다양하고 우량한 신용거래 실적을 보유하고 있어
              부실화 가능성이 매우 낮음
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

export default PredictResultGood;
