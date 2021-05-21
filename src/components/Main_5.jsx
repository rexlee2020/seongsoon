import React from "react";
import "../css/Donate.css";
import { FiDatabase } from "react-icons/fi";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Main_5 = () => {

  const mapStyles = {        
    height: "250px",
    width: "500px"
  };
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  return (
    <div className="donate-content-container">
      <div className="title">연탄은행 오시는 길</div>

      <div className="small-content">
        포항연탄은행 오시는 길을 안내해드립니다.
      </div>
      <div className="v1"></div>

      <LoadScript
       googleMapsApiKey='AIzaSyDlTDjhZg6WFXnJe_PtJP-j9dCyQ6X8wCA'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>

      <div className="small-title">
        <FiDatabase /> 오시는 길
      </div>
      <div className="small-content">
        주소: 경북 포항시 북구 흥해읍 한동로 513번길 43-1 (우편번호: 37553)
        <br />
        사무실 : 054-243-2777
        <br />
        대표자 : 010-5057-0740
        <br />
      </div>
      <div className="small-title">
        <FiDatabase /> 교통편 안내
      </div>

      <div className="small-title">포항시내에서 오시는 법</div>
      <div className="small-content">
        시내버스 :시내버스 302번 탑승 후 한동대학교 입구에서 하차
        <br />
        택시 : 한동대학교 앞에서 한동로 513번길 방면으로 우회전
      </div>
      <div className="small-title">서울에서 오시는 법</div>
      <div className="small-content">
        자가용 : 포항 IC > 영일만대로 (영일만 방향) > 한동로 513번길
      </div>
    </div>
  );
};

export default Main_5;
