import { Image } from "react-bootstrap";
import React, { useState, useRef, useEffect } from "react";
import "./Main.scss";

function Main() {
  const [currentCarousel, setCurrentCarousel] = useState("");
  const TOTAL_SLIDES = 2; //슬라이드 개수 2면 3개 1이면 2개
  const slideRef = useRef(null);
  const nextCarousel = () => {
    if (currentCarousel >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentCarousel(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentCarousel(currentCarousel + 1);
    }
  };
  // Prev 버튼 클릭 시
  const prevCarousel = () => {
    if (currentCarousel === 0) {
      setCurrentCarousel(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentCarousel(currentCarousel - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentCarousel}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentCarousel]);
  return (
    <div className="container">
      <div className="mainBannerContainer">
        <div className="mainBannerInner" ref={slideRef}>
          <Image className="mainBox" src="image/main_banner_1.png" />
          <Image className="mainBox" src="image/main_banner_2.png" />
          <Image className="mainBox" src="image/main_banner_3.png" />
        </div>
        <div className="mainBannerButtonContainer">
          <button
            onClick={prevCarousel}
            className="mainBannerButton mainBannerLeftButton"
          ></button>
          <button
            onClick={nextCarousel}
            className="mainBannerButton mainBannerRightButton"
          ></button>
        </div>
      </div>
      <div className="newsContainer">
        <div className="newsBox">
          <div>9월 소비자물가 5.6% 두달 연속 상승세 둔화</div>
          <div>
            <div>
              <Image className="newsimg" src="image/main_news.png" />
              <div>
                <div>물가 오름세 두 달 연속 꺾였지만...'더 뛸까' 불안 여전</div>
                <div>
                  지난달 물가상승률이 5% 중반대를 기록하며 올해 내내 치솟던 물가
                  오름세가 두 달 연속 꺾였습니다. 주유소 기름값이 내려간 덕이
                  큰데요. 다만, 최근의 ...
                </div>
              </div>
            </div>
          </div>
          <div>9월 물가상승률 5.6%...한은 "당분간 5~6%대 고물가"</div>
          <div>소비자물가 두 달째 상승세 둔화...외식물가는 고공행진</div>
          <div>물가 상승세 둔화라지만, 작년보다 5.6%올라...여전한 고물가</div>
          <div>서울 법인택시 기사 65% "월급제 반대"...소득 줄어 불만</div>
          <div>
            기본요금 1만 원 시대, 전문가"택시 대중교통 아냐, 외국에 비해 낮은
            수준"
          </div>
        </div>
      </div>
      <div className="newContainer">
        <div className="left">
          <div>새소식</div>
          <div>바로가기 {">"} </div>
        </div>
        <div className="newBox">
          <div className="box">
            <div>2022년 하반기 신입행원 채용 실시 안내</div>
            <div>09.29</div>
          </div>
          <div className="box">
            <div>수신상품 금리 변경 안내</div>
            <div>09.28</div>
          </div>
          <div className="box">
            <div>KB스타일림 서비스 종료 사전 안내</div>
            <div>09.26</div>
          </div>
        </div>
      </div>
      <div className="eventContainer">
        <div className="left">
          <div>이벤트</div>
          <div>바로가기 {">"} </div>
        </div>
        <div className="eventBox">
          <div className="box">
            <div>3!6!9 해외송금 전신료 면제 쿠폰 이벤트!</div>
            <div>09.22 ~ 12.31</div>
          </div>
          <div className="box">
            <div>KB골든라이프X 건강 챌린지 이벤트</div>
            <div>09.05 ~ 10.31</div>
          </div>
          <div className="box">
            <div>KB마이데이터 가을맞이 이벤트 게이트 페이지</div>
            <div>09.01 ~ 10.31</div>
          </div>
        </div>
      </div>
      <div className="preventContainer">
        <div className="left">
          <div>금융사고예방</div>
          <div>바로가기 {">"} </div>
        </div>
        <div className="newBox">
          <div className="box">
            <div>전자금융사기예방 서비스</div>
            <div>바로가기 {">"} </div>
          </div>
          <div className="box">
            <div>통장(카드) 매매·양도는 불법</div>
            <div>바로가기 {">"} </div>
          </div>
          <div className="box">
            <div> 사진촬영·QR스캔 절대금지</div>
            <div>바로가기 {">"} </div>
          </div>
        </div>
      </div>
      <div className="bohoContainer">
        <div className="left">
          <div>소비자권익보호</div>
          <div>바로가기 {">"} </div>
        </div>
        <div className="eventBox">
          <div className="box">
            <div>금융감독원</div>
            <div>바로가기 {">"} </div>
          </div>
          <div className="box">
            <div>미수령주식 찾아주기 캠페인 </div>
            <div>바로가기 {">"} </div>
          </div>
          <div className="box">
            <div>비교조회서비스상세목록</div>
            <div>바로가기 {">"} </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
