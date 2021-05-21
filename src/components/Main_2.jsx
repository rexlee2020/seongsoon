import React from "react";
import "../css/Donate.css";
import { FiDatabase } from "react-icons/fi";

const Main_2 = () => {
  return (
    <div className="donate-content-container">
      <div className="title">비전과 가치</div>

      <div className="small-content">
        포항연탄은행이 꿈꾸는 비전과 나누는 가치입니다.
      </div>
      <div className="v1"></div>

      <div className="small-title">
        "너, 나, 그리고 우리 모두가 더불어 살아가는 살맛나는 세상을 지향합니다"
      </div>
      <div className="small-title">설립일</div>

      <div className="small-content">2014년 10월 23일(목)</div>
      <div className="small-title">설립 목적</div>
      <div className="small-content">
        빈곤의 고착화와 고령화 사회로 인한 에너지 빈곤층과 복지사각지대에 있는
        분들에게 연탄과 난방유를 나눔으로 따뜻한 겨울을 지낼 수 있도록 힘쓰며,
        무료급식과 쌀 나눔을 통하여 기본적인 생계를 유지하게 하고, 삶의 질
        향상을 위한 다양한 사업을 개발하여 지역의 소외계층들이 함께 더불어
        살아가는 데 힘쓴다.
      </div>
      <div className="small-title">
        <FiDatabase /> 비전과 가치
      </div>
      <div className="small-title">비전</div>
      <div className="small-content">
        1. 작은 자를 섬기는 자세로 연탄은행과 다양한 사업 개발을 통한 나눔 운동
        실천
        <br />
        2. 지역사회복지를 위한 사람 중심의 휴먼서비스 실천
        <br />
        3. 봉사와 나눔 운동을 통한 지역 사회와 더불어 살아가는 가치 실천
        <br />
      </div>
      <div className="small-title">가치 </div>
      <div className="small-content">
        작은 자를 생명처럼 사랑하신 예수 그리스도의 정신을 본받아 하나님을
        사랑하고 이웃을 사랑하는 삶을 실현하는데 그 가치를 둔다
      </div>

 
    </div>
  );
};

export default Main_2;
