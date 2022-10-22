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

    if (SpeechGrammarList) {
      let speechRecognitionList = new SpeechGrammarList();
    }

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
    let call_kb = false;

    /* speak to text */
    let output = document.querySelector("#output");
    recognition.onresult = function (event) {
      let input = event.results[0][0].transcript;
      output.value = input;
      if (!call_kb && input.includes("깨비")) {
        recong_ing = false;
        call_kb = true;
        speak("네!");
        console.log("===== 꺠비호출 =====");
      }
    };

    // recognition.onsaudiostart = function (event) {
    //     console.log("SpeechRecognition.onaudiostart");
    // }

    // recognition.onaudioend = function (event) {
    //     console.log("SpeechRecognition.onaudioend");
    // }

    recognition.onend = function (event) {
      console.log("SpeechRecognition.onend");
      console.log(recong_ing);
      if (recong_ing) {
        recognition.start();
      }
    };

    recognition.onerror = function (event) {
      console.log("SpeechRecognition.onerror");
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
          console.log(`Speech recognition error detected: ${event.error}`);
          console.log(`Additional information: ${event.message}`);
        };

        // console.log(voices);
        for (let i = 0; i < voices.length; i++) {
          if (voices[i].name === voiceNameKO) {
            // console.log(voices[i]);
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
        "어떤 서비스를 이용하시겠습니까? 1번 음성서비스, 2번 아이트래킹, 3번 이용안함 중 선택해주세요."
      );

      recognition.start();
    });
  }
  render() {
    return <textarea name="output" id="output" cols="50" rows="10"></textarea>;
  }
}

export default ChatBot;
