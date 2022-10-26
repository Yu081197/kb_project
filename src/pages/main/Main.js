import React from "react";
import "./Main.scss";
import jquery from "jquery";
import $ from "jquery";
import { Image } from "react-bootstrap";

window.$ = window.jquery = jquery;

class Main extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $("div #stt_img").hover(
        function () {
          $("div .ment1").fadeIn(500);
        },
        function () {
          $("div .ment1").fadeOut(500);
        }
      );
      $("div #gaze_img").hover(
        function () {
          $("div .ment2").fadeIn(500);
        },
        function () {
          $("div .ment2").fadeOut(500);
        }
      );
      $("div #cred_img").hover(
        function () {
          $("div .ment3").fadeIn(500);
        },
        function () {
          $("div .ment3").fadeOut(500);
        }
      );
    });

    // Jquery here $(...)...
  }
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="mainContainer">
          <section id="canvas_section">
            <div id="slogan">
              You is kind. <br />
              You is smart.
              <br />
              You is important.
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div id="side_slogan">
                디지털 소외계층을 위한 웹서비스 같이 시작해봐요.
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <Image src="image/hubo1.png" alt="" id="main_back" />
              </div>
            </div>
          </section>
          <div id="exp_ment">Our Service</div>
          <br />
          <section className="tripple">
            <div className="stt">
              <div>
                <Image
                  src="image/image1.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                  id="stt_img"
                />
              </div>
              <div className="ment1" style={{ position: "absolute" }}>
                음성인식 서비스를 통해 <br />
                편리한 비대면계좌개설을 <br />
                이용해보세요.
              </div>
            </div>
            <div className="gaze">
              <div>
                <Image
                  src="image/image2.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                  id="gaze_img"
                />
              </div>
              <div className="ment2" style={{ position: "absolute" }}>
                헤드트래킹에 의한 핸즈프리 <br />
                금융서비스 이런 서비스 <br />
                이용해보셨나요?
              </div>
            </div>
            <div className="cred">
              <div>
                <Image
                  src="image/image3.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                  id="cred_img"
                />
              </div>
              <div className="ment3" style={{ position: "absolute" }}>
                금융생활의 첫 걸음, <br />
                신용예측을 통한 점수관리, <br />
                어떠신가요?{" "}
              </div>
            </div>
            <div style={{ width: 100 }} />
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
