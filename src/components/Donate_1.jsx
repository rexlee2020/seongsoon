import React from "react";
import "../css/Donate.css";
import { FiDatabase } from "react-icons/fi";


const Main_1 = () => {
  return (
      <div className="donate-content-container">
        <div className="title">후원 안내</div>

        <div className="small-content">
          포항연탄은행과 함께 사랑을 나눠보세요.
        </div>
        <div className="v1"></div>

        <div className="small-title">
          <FiDatabase /> 포항연탄은행은 은행입니다
        </div>
        <div className="small-content">
          포항연탄은행은 '은행'입니다. 은행은 저축과 인출로 이루어지는
          금융기관입니다. 연탄은행도 입금과 출금이 있는 곳입니다. 따뜻한
          마음으로 후원금을 입금해 주시거나 자원봉사 신청을 통해 노동력을 입금해
          주시면, 후원금과 노동력에 사랑과 정성의 이자를 듬뿍 담아서 이웃들에게
          연탄과 쌀, 생필품 등으로 출금이 되는 은행입니다.
          <br />
          여러분들의 따뜻한 마음과 손길들을 모아 어려운 이웃들에게 전달하는
          행복은행, 사랑이라는 이자를 붙여 어려운 이웃들에게 나눠주는 사랑은행,
          이곳은 포항연탄은행입니다.
        </div>
        <div className="small-title">
          <FiDatabase /> 후원 방법
        </div>
        <div className="small-table-wrapper">
          <div style={{ display: "inline" }} className="small-table-1">
            정기 후원
          </div>
          <div style={{ display: "inline" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;은행에서 매월 일정 금액을
            자동이체 하시는 방법입니다.
          </div>
        </div>
        <div className="small-table-wrapper">
          <div style={{ display: "inline" }} className="small-table-1">
            일시 후원
          </div>
          <div style={{ display: "inline" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;집 안의 뜻깊은 일들(첫돌,
            생일, 결혼기념일, 부모님 장례 등)을 기념해서 이웃에 사랑의 마음을
            전하실 수 있고, 회사나 종교단체, 일반 단체 등에서도 후원하실 수
            있습니다.{" "}
          </div>
        </div>
        <div className="highlight">
          *연탄은행에 후원하신 후원금은 연말 정산시 기부금으로 처리되어 세제
          혜택을 받을 수 있습니다. 홈페이지를 통해서 후원하신 내역을 확인하실 수
          있도록 투명한 관리를 하고 있습니다.
        </div>

        <div className="small-title">후원문의</div>
        <div className="small-content">
          사무실 : 054-243-2777
          <br />
          대표자 : 010-5057-0740
        </div>
      </div>
 
  );
};

export default Main_1;
