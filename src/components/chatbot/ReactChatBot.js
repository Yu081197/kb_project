import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import "./ChatBot.scss";

function ReactChatBot() {
  useEffect(() => {
    console.log("useEffect :: ReactChatBot");

    let useVoiceService = localStorage.getItem("useVoiceService");
    // console.log("useVoiceService: " + useVoiceService);
    // console.log("useVoiceService type :: " + typeof(useVoiceService));
    if (useVoiceService == null) {  // 선택한 서비스가 없는 경우 서비스선택요청
      speak(
        "어떤 서비스를 이용하시겠습니까? 일번 음성서비스, 이번 헤드트래킹, 삼번 이용안함 중 선택해주세요.", true, recogInputService
      );
    } else if (useVoiceService == "true") {
      recognitionStart();
    }

  }, []);

  return (
    <div>
      <div
        id="chatbot"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            right: "5%",
            bottom: "5%",
          }}
        >
          <div class="tip">
            <textarea
              name="output"
              id="output"
              cols="30"
              style={{
                padding: "10px",
                width: "200px",
                height: "300px",
                fontSize: "15px",
                backgroundColor: "#2b2b36",
                color: "white",
              }}
            ></textarea>
          </div>
          <div class="icon">
            <Image
              className="mainLogo"
              src="image/kkebi.png"
              style={{
                position: "fixed",
                right: "3%",
                bottom: "2%",
                width: "150px",
                height: "180px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

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
recognition.maxAlternatives = 1;

/* 기타 설정들... */
// input options
const recogInputService = 1;
const recogInputAgree = 2;
const recogInputNext = 3;
const recogInput = 4;
const anywayOnClickTrigger = 5;
const recogInputOnClickTrigger = 6;

// page info
const pages = new Map();
pages.set("계좌개설", "/account_create");
pages.set("계좌조회", "/account_lookup");
pages.set("이체", "/transfer");
pages.set("이채", "/transfer");
pages.set("점포찾기", "/find");
pages.set("신용등급예측", "/predict");
/* END 기타 설정들... */

recognition.onstart = function (event) {
  console.log("SpeechRecognition.onstart");
  result = "";
};

/* speak to text */
let result = ""; // 음성인식결과
recognition.onresult = function (event) {
  let input = event.results[0][0].transcript;
  result = input;
};

// 음성인식 후 연동기능
// : 깨비 호출, 페이지 이동, 데이터 입력, 속도조절
let inputOption = null;
let inputArg = null;
recognition.onend = function (event) {
  console.log("SpeechRecognition.onend");

  console.log("SpeechRecognition.onend => 음성인식 result :: " + result);
  // document.querySelector("#output").value = result;

  // 공백 제거 및 마지막 특수문자 제거
  let result_remove_blank = result.replaceAll(" ", "").replace(/[.?]$/g, '');

  // 강제종료
  if (result.includes("꺼져")) {
    console.log("===== 음성인식 강제종료 =====");
    localStorage.setItem("useVoiceService", false);
    recognition.stop();
    return;
  }

  // 깨비 호출
  if (result.includes("깨비")) {
    console.log("===== 꺠비호출 =====");
    speak("네, 말씀하세요");
  }

  // 속도조절


  // 페이지 이동
  else if (result.includes("이동")) {
    console.log("===== 페이지이동 =====");

    for (let key of pages.keys()) {
      if (result_remove_blank.includes(key)) {
        window.location.href = pages.get(key);
      }
    }
  }

  // 입력인 경우
  else if (inputOption != null) {
    /* 서비스 선택 */
    if (inputOption == recogInputService) {
      console.log("===== 서비스 선택 =====");
      if (result_remove_blank.includes("음성")) { // 음성서비스 사용설정
        localStorage.setItem("useVoiceService", true);
        inputOption = null;
        speak("음성서비스를 시작합니다. 무엇을 도와드릴까요?");
      } else if (result_remove_blank.includes("헤드트래킹") || result_remove_blank.includes("헤드트레킹")) {  // 음성서비스 미사용설정 및 헤드트레킹 다운로드
        localStorage.setItem("useVoiceService", false);
        inputOption = null;
        recognition.stop();
        // 헤드트레킹 다운로드 기능 추가
        return;
      } else if (result_remove_blank.includes("이용안함") || result_remove_blank.includes("사용안함")) {  // 음성서비스 미사용설정
        localStorage.setItem("useVoiceService", false);
        inputOption = null;
        recognition.stop();
        return;
      } else {
        speak("이해하지 못했습니다.");
        // recognition.start();
      }
    }

    /* 약관동의 */
    else if (inputOption == recogInputAgree) {   // 2
      console.log("===== 약관동의 =====");
      if (isPositive(result_remove_blank)) {
        inputArg();
        inputOption = null;
      }
    }

    /* 계좌개설 :: 다음페이지로 이동 */
    else if (inputOption == recogInputNext) {   // 3
      console.log("===== 계좌개설 :: 다음페이지로 이동 =====");
      if (isPositive(result_remove_blank)) {
        if (typeof (inputArg) == "string") {
          inputOption = null;
          window.location.href = inputArg;
        }
        else {
          inputOption = null;
          inputArg();
        }
      }
    }

    /* 입력 :: useRef */
    else if (inputOption == recogInput) {   // 4
      console.log("===== 입력 :: useRef =====");
      // console.log(inputArg);
      // console.log(result_remove_blank);
      inputArg.current.setAttribute('value', result_remove_blank);
      inputArg.current.dispatchEvent(new Event('change', { bubbles: true }));
    }

    /* 클릭(무조건 클릭) :: anywayOnClickTrigger */
    else if (inputOption == anywayOnClickTrigger) {   // 5
      console.log("===== 클릭(무조건 클릭) :: anywayOnClickTrigger =====");
      // console.log(inputArg);
      inputArg.current.dispatchEvent(new Event('click', { bubbles: true }));
    }

    /* 클릭(음성확인 후 클릭) :: recogInputOnClickTrigger */
    else if (inputOption == recogInputOnClickTrigger) {   // 6
      console.log("===== 클릭(음성확인 후 클릭) :: recogInputOnClickTrigger =====");
      // console.log(inputArg);
      if (isPositive(result_remove_blank)) {
        inputArg.current.dispatchEvent(new Event('click', { bubbles: true }));
      }
    }
  }

  // 음성인식 사용인 경우 계속 음성인식 진행..
  // speak 중인 경우에는 음성인식 진행 안 함
  var useVoiceService = localStorage.getItem("useVoiceService");
  if (useVoiceService == "true" && !synth.speaking) {
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

function isPositive(recongText) {
  return recongText.includes("예") || recongText.includes("네") || recongText.includes("응");
}

export function recognitionStart() {
  console.log("recognition.start() in recognitionStart");
  recognition.start();
}

export function speak(
  inputTxt,
  isInput = false,
  recogInputOption = null,
  arg = null
) {
  // console.log("===== arg =====");
  // console.log(arg);
  // console.log("===== arg =====");
  // console.log(
  //   "isInput: " + isInput + " / recogInputOption: " + recogInputOption
  // );

  if (synth.speaking) {
    console.error("speechSynthesis.speaking", inputTxt);
    return;
  }

  if (isInput) {
    inputOption = recogInputOption;
    inputArg = arg;
  }

  const utterThis = new SpeechSynthesisUtterance(inputTxt);

  utterThis.onstart = function (event) {
    console.log("SpeechSynthesisUtterance.onstart");
    console.log("SpeechSynthesisUtterance.onstart :: recognition.stop");
    recognition.stop();
  };

  utterThis.onend = function (event) {
    console.log("SpeechSynthesisUtterance.onend");
    console.log("SpeechSynthesisUtterance.onend :: recognition.start");
    recognition.start();
  };

  utterThis.onerror = function (event) {
    console.error("SpeechSynthesisUtterance.onerror");
    console.log(
      `An error has occurred with the speech synthesis: ${event.error}`
    );
  };

  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === voiceNameKO) {
      utterThis.voice = voices[i];
      break;
    }
  }

  document.querySelector("#output").value = inputTxt;
  utterThis.pitch = pitch;
  utterThis.rate = rate;
  synth.speak(utterThis);
  console.log("speak: ", inputTxt);
}

export default ReactChatBot;
