import React from "react";
import "../css/Donate.css";
import { FiDatabase } from "react-icons/fi";
import { Table } from 'react-bootstrap';

const Volunteer_1 = () => {
  return (
    <div>
      <div className="donate-content-container">
        <div className="title">봉사 안내</div>

        <div className="small-content">
          포항연탄은행과 함께 사랑을 나눠보세요.
        </div>
        <div className="v1"></div>

        <div className="small-title">
          <FiDatabase /> 봉사 신청 안내
        </div>
        <div className="small-content">
        모든 활동은 사전 접수로 이루어지며, 봉사 프로그램을 참고하여 봉사신청 게시판, 전화, 방문 등으로 신청 가능합니다.
봉사확인서가 필요하신 분들은 포항 자원봉사센터(http://w-sinnari.pohang.go.kr)에 미리 가입 부탁드립니다.
회원가입을 통해 봉사확인서 출력 및 재발급이 가능합니다.
        </div>
        <div className="small-title">
          <FiDatabase /> 봉사 프로그램
        </div>

        <Table striped bordered hover>
  <tbody>
  <tr>
      <th>활동</th>
      <th>내용</th>
      <th>일정</th>
      <th>장소</th>
    </tr>
    <tr>
      <td>사랑의 연탄봉사</td>
      <td>연탄나눔, 가구방문, 조사 등</td>
      <td>매년 10월~다음해 4월</td>
      <td>포항 지역</td>
    </tr>
    <tr>
      <td>사무 봉사</td>
      <td>행사협력, 행정업무, 가구조사 등</td>
      <td>상시(문의)</td>
      <td>포항연탄은행</td>
    </tr>
    <tr>
      <td>재능 봉사</td>
      <td>사무봉사, 사진 촬영, 리포터 등</td>
      <td>상시(문의)</td>
      <td>포항연탄은행</td>
    </tr>
    <tr>
      <td>무료 급식</td>
      <td>사랑의 점심 준비, 배식, 뒷정리</td>
      <td>실시 예정</td>
      <td>포항밥상공동체</td>
    </tr> 
  </tbody>
</Table>


        <div className="small-title">후원문의</div>
        <div className="small-content">
          사무실 : 054-243-2777
          <br />
          대표자 : 010-5057-0740
        </div>
      </div>
    </div>
  );
};

export default Volunteer_1;
