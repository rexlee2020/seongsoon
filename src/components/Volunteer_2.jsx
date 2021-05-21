import React, { useState } from "react";
import axios from "axios";
import "../css/Donate.css";
import { FiDatabase } from "react-icons/fi";

const Volunteer_2 = () => {
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
    axios.post("http://localhost:3001/volunteer/2", newDonate);
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
        <div className="title">봉사 신청</div>
        <div className="small-content">
        이웃들에게 사랑을 나누는 일에 동참해보세요.
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
          <div className="form-title">VMS아이디</div>
            <input
              onChange={handleChange}
              name="vms"
              value={input.email}
              autoComplete="off"
              className="form-control"
              placeholder="VMS아이디"
            ></input>
          </div>

          <div className="form-group">
          <div className="form-title">참가 예정인원</div>
            <input
              onChange={handleChange}
              name="people"
              value={input.amount}
              autoComplete="off"
              className="form-control"
              placeholder="참가 예정인원"
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
          봉사 신청
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer_2;
