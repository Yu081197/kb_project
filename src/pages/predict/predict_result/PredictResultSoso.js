import React from "react";
import "./PredictResultSoso.scss";
import jquery from "jquery";
import $ from "jquery";
import { Image } from "react-bootstrap";

window.$ = window.jquery = jquery;

class PredictResultSoso extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $("#sosorabbit").animate(
        {
          left: "40%",
        },
        1700
      );

      $("#sosogage")
        .animate(
          {
            width: "60%",
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
            <div id="sosogage"></div>
            <div id="sosorabbit"></div>
          </div>
          <div></div>
        </div>
        <div style={{ display: "none" }} class="result_cover">
          <div class="result_container">
            <div class="result">
              <img src={require("./img/결과스.png")} alt="" id="yours" />
              <div id="sosocredit">일반 등급입니다.</div>
            </div>
            <div class="exp">
              비교적 금리가 높은 금융업권과의 거래가 많은 고객으로 단기연체
              경험이 있으며 부실화 가능성은 일반적인 수준
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

export default PredictResultSoso;
