import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Donate.css";
import { FiDatabase } from "react-icons/fi";

const Donate_3 = () => {
  const [donates, setDonates] = useState([
    {
      name: "",
      contact: "",
      email: "",
      amount: "",
      message: "",
    },
  ]);

  useEffect(() => {
    fetch("/donate/3")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setDonates(jsonRes));
  });

  const elements = ['one', 'two', 'three'];

  const items = []

  for (const [index, value] of elements.entries()) {
    items.push(<li key={index}>{value}</li>)
  }

  return (
    <div>
      <div className="donate-content-container">
        <div className="title">후원 현황 </div>
        <div className="small-content">
        포항연탄은행에 함께해 주셔서 감사합니다
        </div>
        <div className="v1"></div>

<div>
  <div className="small-title" style={{display: 'inline-block',width : '200px'}}>
  후원자
  </div>
  <div className="small-title donate-content-spacing">
  후원금액
  </div>
{donates.map((donate,index) => (
        <div key={index}>
          <div className="donate-status">
            <div className="donate-subject">{donate.name}</div>
            <div className="donate-content">{donate.contact}</div>
          </div>
        </div>
      ))}
</div>
 
      </div>
    </div>
  );
};

export default Donate_3;
