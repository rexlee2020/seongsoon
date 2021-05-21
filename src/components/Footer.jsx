import React from "react";
import styled from "styled-components";

import "../css/Footer.css";
import logo from "../assets/logo.png";
import dodreamtouch from "../assets/powered.png";
const Lines = styled.div`
  width: 100%;
  height: 1px;
  background: black;
  border-radious: 50%;
`;

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container-content">
      <div className="leftMenu">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="left-content">
          전화 : 054-243-2777
          <br />
          팩스 : 054-491-0339
          <br />
          대표 : 유호범 | 고유번호 : 506-82-77056
          <br />
          경북 포항시 북구 흥해읍 한동로 513번길 43-1 (37553)
          
        </div>
        <div className="footer-admin">
        관리자 페이지
        </div>
        <div className="powered">
          powered by <img src={dodreamtouch} alt="두드림터치" style={{height:30}} />

        </div>
      </div>

      <div className="rightMenu">
        <div className="right-content">
          <div className="right-content-1">
            <div className="right-content-title">포항연탄은행</div>
            인사말<br/>    
            비전과 가치<br/> 
            사업소개<br/> 
            연혁<br/> 
            오시는 길 
          </div>
          <div className="right-content-1">
            <div className="right-content-title">후원안내</div>
            후원 안내<br/> 
            후원 신청<br/> 
            후원 현황
          </div>
          <div className="right-content-1">
            <div className="right-content-title">자원봉사</div>
            봉사 안내<br/> 
            봉사 신청<br/> 
          </div>
          <div className="right-content-1">
            <div className="right-content-title">이야기나눔</div>
            보도 자료<br/> 
            포토갤러리<br/> 
            밴드게시판<br/> 
            자유게시판
          </div>
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default Footer;
