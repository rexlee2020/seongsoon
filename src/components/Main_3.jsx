import React from "react";
import "../css/Donate.css";
import { FiDatabase } from "react-icons/fi";

const Main_3 = () => {
  return (
    <div className="donate-content-container">
      <div className="title">사업 소개</div>

      <div className="small-content">
        포항연탄은행이 함께하는 있는 사업들입니다.
      </div>
      <div className="v1"></div>

      <div className="small-title">
        <FiDatabase /> 연탄, 난방유 나눔 사업
      </div>
      <div className="small-content">
        사업내용 : 에너지 빈곤층을 위한 연탄, 난방유 무료 지원 사업 <br />
        운영기간 : 10월 ~ 4월 (24시간 개방)
        <br />
        봉사 지원 방법 : 대상 가구 선정 후 연탄 및 난방유 소진 15일 전 미리 연락
        시 자원봉사자들을 통하여 겨울 동안 꾸준히 공급
        <br />
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
      <div className="small-title">
      연탄은행 홍보 팜플렛 (2017)
      </div>
    </div>
  );
};

export default Main_3;
