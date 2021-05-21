import React, { useState } from "react";
import axios from "axios";
import "../css/Donate.css";
import { FiDatabase } from "react-icons/fi";

const Donate_2 = () => {
  const [input, setInput] = useState({
    name: "",
    contact: "",
    email: "",
    amount: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newDonate = {
      name: input.name,
      contact: input.contact,
      email: input.email,
      amount: input.amount,
      message: input.message,
    };
    axios.post("http://localhost:3001/donate/2", newDonate);
    setInput({
      name: "",
      contact: "",
      email: "",
      amount: "",
      message: "",
    });
  }

  return (
    <div>
      <div className="donate-content-container">
        <div className="title">후원 신청 </div>
        <div className="small-content">
          포항연탄은행과 함께 사랑을 나눠보세요.
        </div>
        <div className="v1"></div>

        <form>
          <div className="form-title">성명 (단체명)</div>
          <div className="form-group">
            <input
              onChange={handleChange}
              name="name"
              value={input.name}
              autoComplete="off"
              className="form-control"
              placeholder="성명(단체명)"
            ></input>
          </div>

          <div className="form-group">
            <div className="form-title">연락처</div>
            <input
              onChange={handleChange}
              name="contact"
              value={input.contact}
              autoComplete="off"
              className="form-control"
              placeholder="연락처"
            ></input>
          </div>

          <div className="form-group">
          <div className="form-title">이메일</div>
            <input
              onChange={handleChange}
              name="email"
              value={input.email}
              autoComplete="off"
              className="form-control"
              placeholder="이메일"
            ></input>
          </div>

          <div className="form-group">
          <div className="form-title">후원 금액</div>
            <input
              onChange={handleChange}
              name="amount"
              value={input.amount}
              autoComplete="off"
              className="form-control"
              placeholder="후원 금액"
            ></input>
          </div>

          <div className="form-group">
          <div className="form-title">남기실 말씀</div>
            <textarea
              onChange={handleChange}
              name="message"
              value={input.message}
              autoComplete="off"
              className="form-control"
              placeholder="남기실 말씀"
            ></textarea>
          </div>
          <button onClick={handleClick} className="btn btn-lg btn-info">
            후원 신청
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donate_2;
