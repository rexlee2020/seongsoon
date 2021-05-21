import React, {useState} from "react";
import "../css/Donate.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Volunteer_1 from "./Volunteer_1";
import Volunteer_2 from "./Volunteer_2";

const Volunteer = () => {
  const [selected, setSelected] = useState(1)

  return (
    <Router>
      <div className="story-all-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="alink-wrapper">
            <Link onClick={()=>setSelected(1)} className={`${selected===1 ? "alink-selected" : "alink"}`} to="/volunteer/">
            봉사 안내
            </Link>
            <Link onClick={()=>setSelected(2)} className={`${selected===2 ? "alink-selected" : "alink"}`}  to="/volunteer/2">
            봉사 신청
            </Link>
          </div>
        </div>

        {/* Router */}
        <div className="content">
          <Route exact path="/volunteer/">
            <Volunteer_1 />
          </Route>
          <Route exact path="/volunteer/2">
          <Volunteer_2 />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default Volunteer;
