import React from "react";
import { Image } from "react-bootstrap";
import "./ChatBot.scss";
import $ from "jquery";

class ChatBot extends React.Component {
  componentDidMount() {
    // ================== STT settings ==================
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList;

    let recognition = new SpeechRecognition();

    if (SpeechGrammarList) {
      let speechRecognitionList = new SpeechGrammarList();
    }

    let lang = "ko-KR";
    recognition.lang = lang;
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 100;

    let recong_ing = true;

    /* speak to text */
    let output = document.querySelector("#output");
    let input_request = false;
    let result = "";  // 음성인식결과
    recognition.onresult = function (event) {
      let input = event.results[0][0].transcript;
      output.value = input;
      result = input;
    };

    // recognition.onsaudiostart = function (event) {
    //     console.log("SpeechRecognition.onaudiostart");
    // }

    // recognition.onaudioend = function (event) {
    //     console.log("SpeechRecognition.onaudioend");
    // }

    // 음성인식 후 연동기능
    // : 깨비 호출, 페이지 이동, 데이터 입력, 속도조절
    recognition.onend = function (event) {
      console.log("SpeechRecognition.onend");

      // 깨비 호출
      if (result.includes("깨비")) {
        console.log("===== 꺠비호출 =====");
        speak("네, 말씀하세요");
      } 

      // 페이지 이동
      else if (result.includes("이동")) {
        console.log("===== 페이지이동 =====");
        let result_remove_blank = result.replaceAll(' ', '');

        const pages = new Map();
        pages.set('계좌개설', '/account_create');
        pages.set('계좌조회', '/account_lookup');
        pages.set('이체', '/transfer');
        pages.set('이채', '/transfer');
        pages.set('점포찾기', '/find');
        pages.set('신용등급예측', '/predict');

        for(let key of pages.keys()) {
          if (result_remove_blank.includes(key)) {
            window.location.href = pages.get(key);
          }
        }
      }

      // 데이터 입력

      // 속도조절

      console.log(recong_ing);
      if (recong_ing) {
        recognition.start();
      }
    };

    recognition.onerror = function (event) {
      console.log("SpeechRecognition.onerror");
      console.log(`Speech recognition error detected: ${event.error}`);
      console.log(`Additional information: ${event.message}`);
    };

    recognition.onnomatch = function (event) {
      console.log("SpeechRecognition.onnomatch");
    };

    // recognition.onsoundstart = function (event) {
    //     console.log("SpeechRecognition.onsoundstart");
    // }

    // recognition.onsoundend = function (event) {
    //     console.log("SpeechRecognition.onsoundend");
    // }

    recognition.onspeechstart = function (event) {
      console.log("SpeechRecognition.onspeechstart");
    };

    recognition.onspeechend = function (event) {
      console.log("SpeechRecognition.onspeechend");
    };

    // ================== TTS settings ==================
    let pitch = 1; // 음높이
    let rate = 1; // 재생속도
    let voiceNameKO = "Google 한국의"; // 한국어 음성설정
    const synth = window.speechSynthesis;

    /* synth voice 목록 가져오기 */
    let voices = [];
    function populateVoiceList() {
      voices = synth.getVoices().sort(function (a, b) {
        const aname = a.name.toUpperCase();
        const bname = b.name.toUpperCase();

        if (aname < bname) {
          return -1;
        } else if (aname == bname) {
          return 0;
        } else {
          return +1;
        }
      });
    }
    populateVoiceList();

    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    /* text to speak */
    function speak(inputTxt) {
      if (synth.speaking) {
        console.error("speechSynthesis.speaking", inputTxt);
        return;
      }

      if (inputTxt !== "") {
        const utterThis = new SpeechSynthesisUtterance(inputTxt);

        utterThis.onend = function (event) {
          console.log("SpeechSynthesisUtterance.onend");
        };

        utterThis.onerror = function (event) {
          console.error("SpeechSynthesisUtterance.onerror");
          console.log(`An error has occurred with the speech synthesis: ${event.error}`);
        };

        for (let i = 0; i < voices.length; i++) {
          if (voices[i].name === voiceNameKO) {
            utterThis.voice = voices[i];
            break;
          }
        }
        utterThis.pitch = pitch;
        utterThis.rate = rate;
        synth.speak(utterThis);
        console.log("speak: ", inputTxt);
      }
    }

    $(function () {
      speak(
        "어떤 서비스를 이용하시겠습니까? 일번 음성서비스, 이번 아이트래킹, 삼번 이용안함 중 선택해주세요."
      );

      recognition.start();
    });
  }
  render() {
    return <textarea name="output" id="output" cols="50" rows="10"></textarea>;
  }
}

export default ChatBot;
