import React, { useState } from "react";
import axios from "axios";
import "../css/Donate.css";
import { FiDatabase } from "react-icons/fi";

const Story_2 = () => {
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



  return (
    <div>
      <div className="donate-content-container">
        <div className="title">사진 올리기</div>
        <div className="small-content">
        이웃들에게 사랑을 나누는 일에 동참해보세요.
        </div>
        <div className="v1"></div>

        <form
          class="mt-4"
          action="/story/3"
          method="POST"
          encType="multipart/form-data"
        >
          <div class="form-group">
            <input
              type="file"
              name="Image"
              id="input-files"
              class="form-control-file border"
              multiple
            />
            <input
              name="title"
              autoComplete="off"
              className="form-control"
              placeholder="제목"
            ></input>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Story_2;
