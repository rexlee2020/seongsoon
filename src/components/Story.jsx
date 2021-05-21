import React, {useState} from "react";
import "../css/Donate.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Story_1 from "./Story_1";
import Story_2 from "./Story_2";

const Story = () => {
  const [selected, setSelected] = useState(1)

  return (
    <Router>  
      <div className="story-all-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="alink-wrapper">
            <Link onClick={()=>setSelected(1)} className={`${selected===1 ? "alink-selected" : "alink"}`} to="/story/">
            포토갤러리
            </Link>
            <Link onClick={()=>setSelected(2)} className={`${selected===2 ? "alink-selected" : "alink"}`}  to="/story/2">
            봉사 신청
            </Link>
          </div>
        </div>

        {/* Router */}
        <div className="content">
          <Route exact path="/story/">
            <Story_1 />
          </Route>
          <Route exact path="/story/2">
          <Story_2 />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default Story;
