import { buildQueries } from "@testing-library/dom";
import React, { useEffect, useState } from "react";
import "../css/Home.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import image1 from "../assets/Home_directions_icon.png";
import image2 from "../assets/Home_donate_icon.jpg";
import image3 from "../assets/Home_volunteer_icon.jpg";
import image4 from "../assets/Home_story_icon.png";

function Home() {
  const [images, setImages] = useState([
    {
      title: "",
      imagePath: "",
    },
  ]);
  useEffect(() => {
    fetch("/story")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setImages(jsonRes));
  }, []);

  return (
    <div className="home-container">
      <div className="content-container">
        <div className="first-banner-content">
          <div className="first-banner">
            <div className="first-title">
              <h1>포항연탄은행</h1>
              <h2>연탄은 사랑의 작은 실천입니다</h2>
              <h3>
                조그만 연탄 한 장이 누군가에게는 따뜻한 하루를 선물해줄 수
                있습니다
              </h3>
              <Button className="first-button">자세히 보기</Button>
            </div>
          </div>
        </div>
        <div className="second-banner">
          <div className="second-banner-content">
            <div className="second-title-title">
              
            </div>

            <div className="second-banner-item">
              <img src={image1} alt="Logo" className="second-banner-image" />
              <div className="second-banner-item-title">
              오시는 길
              </div>
              <div className="second-banner-item-description">
              오시는 길을 안내합니다
              </div>
            </div>
            <div className="second-banner-item">
              <img src={image2} alt="Logo" className="second-banner-image" />
              <div className="second-banner-item-title">
              후원 신청
              </div>
              <div className="second-banner-item-description">
              작은 손길이 이웃을 살립니다
              </div>
            </div>
            <div className="second-banner-item">
              <img src={image3} alt="Logo" className="second-banner-image" />
              <div className="second-banner-item-title">
              봉사 신청
              </div>
              <div className="second-banner-item-description">
              여러분의 손길이 필요합니다
              </div>
            </div>
            <div className="second-banner-item">
              <img src={image4} alt="Logo" className="second-banner-image" />
              <div className="second-banner-item-title">
              이야기 보기
              </div>
              <div className="second-banner-item-description">
              함께 만들어가는 이야기
              </div>
            </div>
          </div>
        </div>
        <div className="third-banner">
          <div className="third-banner-content">
            <div className="third-banner-title">최근 소식</div>

            <Button className="third-banner-title-button">더 보기</Button>
            <div className="third-card-container">
              <CardColumns>

              </CardColumns>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
