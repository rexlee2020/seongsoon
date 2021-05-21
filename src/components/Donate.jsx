import React, {useState} from "react";
import "../css/Donate.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Donate_1 from "./Donate_1";
import Donate_2 from "./Donate_2";
import Donate_3 from "./Donate_3";

const Donate = () => {
  const [selected, setSelected] = useState(1)

  return (
    <Router>
      <div className="donate-all-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="alink-wrapper">
            <Link onClick={()=>setSelected(1)} className={`${selected===1 ? "alink-selected" : "alink"}`} to="/donate/">
            후원 안내
            </Link>
            <Link onClick={()=>setSelected(2)} className={`${selected===2 ? "alink-selected" : "alink"}`}  to="/donate/2">
            후원 신청
            </Link>
            <Link onClick={()=>setSelected(3)} className={`${selected===3 ? "alink-selected" : "alink"}`}  to="/donate/3">
            후원 현황
            </Link>
          </div>
        </div>

        {/* Router */}
        <div className="content">
          <Route exact path="/donate/">
            <Donate_1 />
          </Route>
          <Route exact path="/donate/2">
          <Donate_2 />
          </Route>
          <Route exact path="/donate/3">
          <Donate_3 />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default Donate;
