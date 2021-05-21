import React, { useEffect, useState } from "react";
import "../css/Donate.css";
import { FiDatabase } from "react-icons/fi";
import { Table } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";

const Story_1 = () => {
  const [images, setImages] = useState([
    {
      title: "",
      imagePath:"",
    },
  ]);

  const [showNumber, setShowNumber] = useState(0)

  useEffect(() => {
    fetch("/story")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setImages(jsonRes));
  },[]);

  return (
    <div>
      <div className="donate-content-container">
        <div className="title">포토갤러리</div>

        <div className="small-content">
          포항연탄은행과 함께 사랑을 나눠보세요.
        </div>
        <div className="v1"></div>

        <div style={{width:'800px',height:'500px'}}>
          <CardColumns>
            {images.slice(showNumber,showNumber+6).map((image, index) => (
              <div key={index}>
                <Card style={{ width: "250px",margin:'5px'}}>
                  <Card.Img variant="top" src={image.imagePath} height="200px"  />
                  <Card.Body height="10px" style={{padding:"0px"}}>
                    <Card.Title style={{textAlign:"center"}}>{image.title}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </CardColumns>
        </div>
        <Button onClick={()=>{if(showNumber-6 >= 0) {setShowNumber(showNumber-6)}}}>Back</Button>
        <Button onClick={()=>{if(showNumber+6 > 0) {setShowNumber(showNumber+6)}}}>Next</Button>
      </div>
    </div>
  );
};

export default Story_1;
