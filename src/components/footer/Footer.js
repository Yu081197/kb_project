import React from "react";
import { Image } from "react-bootstrap";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerGrid">
        <div>이용상담</div>
        <div>보안프로그램</div>
        <div>사고신고</div>
        <div>보호금융상품등록부</div>
        <div>전자민원접수</div>
        <div>개인정보처리방침</div>
        <div>신용정보활용체제</div>
        <div>위치기반서비스 이용약관</div>
        <div>경영공시</div>
        <div>그룹 내 고객정보 제공안내</div>
        <div>스튜어드십 코드</div>
      </div>

      <div className="footerSecondGrid">
        <div>KB금융그룹네트워크</div>
        <div>대표전화 1588 - 9999</div>
        <div>챗봇 / 채팅 / 이메일상담(24시간)</div>
        <div>비교조회서비스</div>
      </div>

      <div className="footerLogo">
        <Image src="image/footer_logo.png" />
      </div>
    </div>
  );
}

export default Footer;
