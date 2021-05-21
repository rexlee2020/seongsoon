import React from "react";
import "../css/Donate.css";
import { FiDatabase } from "react-icons/fi";

const Main_4 = () => {
  return (
    <div className="donate-content-container">
      <div className="title">연혁</div>

      <div className="small-content">
        포항연탄은행이 지나온 이야기 그리고 미래에 대한 이야기입니다.
      </div>
      <div className="v1"></div>

      <div className="small-title" style={{ fontSize: "20px" }}>
        포항연탄은행의 설립부터 지금까지의 이야기,
        <br />
        그리고 앞으로 채워갈 더 큰 미래의 꿈이 있습니다.
      </div>
      <div className="small-content">
        <div className="small-content-table">
          
          <div className="small-content-table" style={{fontWeight:'700'}}>
            2013.11.10
            <br />
            2014.5.11
            <br />
            2014 시즌
            <br />
            2015.7 ~ 10월
            <br />
            2015.10.23 <br />
            2015 시즌 <br />
            2016.8 ~ 11월 <br />
            2016.11월 18일
            <br />
            2016.11.26 <br />
          </div>
          <div className="small-content-table" style={{marginLeft:'20px'}}>
            (연탄은행 설립을 위한) 그루터기 공동체 창립
            <br />
            그루터기 공동체 교회 설립 허가
            <br />
            250가구 1070명 자원봉사자 5만장 연탄 나눔
            <br />
            보일러 설치 및 집수리 (송라, 용흥, 송도 지역) 재개식_송도 솔야외
            공연장 (연탄나눔, 쌀 100포 나눔)
            <br />
            355가구 1700여명 자원봉사자 85000장 연탄 나눔
            <br />
            연탄 보일러 교체 및 집수리 (청림, 중앙동지역
            <br />
            "Re-start 2016 연탄 15만장 나눔 선포식" ..송도 솔숲 야외공연장
            <br />
            (연탄 1500장, 쌀 140포, 무릎 담요 나눔)
            <br />
            'POSCO 연탄 8만장 후원 나눔 체결'
          </div>
        </div>
      </div>
      <div className="small-title">
        <FiDatabase /> 밥상 나눔 사업
      </div>
      <div className="small-content">
        사업 내용 : 독거노인, 빈곤층 어르신 무료급식
        <br />
        운영 기간 : 1월 ~ 12월 (일요일, 공휴일 제외)
        <br />
        봉사 지원 : 주 2회 무료급식 시범 실시 (2017년 실시 예정)
        <br />
      </div>
      <div className="small-title">
        <FiDatabase /> 주거 개선 사업
      </div>
      <div className="small-content">
        사업 내용 : 연탄난로, 보일러 교체 및 수리 지원, 도배 및 수도공사 / 난로
        및 보일러 수리 <br />
        운영 기간 : 연중 수시로 실시 <br />
        봉사 지원 : 재능 기부 및 후원금으로 주거 개선 사업 실시 <br />
      </div>
      <div className="small-title">연탄은행 홍보 팜플렛 (2017)</div>
    </div>
  );
};

export default Main_4;
