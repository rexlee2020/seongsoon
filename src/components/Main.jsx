import React, {useState} from "react";
import "../css/Donate.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main_1 from "./Main_1";
import Main_2 from "./Main_2";
import Main_3 from "./Main_3";
import Main_4 from "./Main_4";
import Main_5 from "./Main_5";

const Main = () => {
  const [selected, setSelected] = useState(1)

  return (
    <Router>
      <div className="donate-all-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="alink-wrapper">
            <Link onClick={()=>setSelected(1)} className={`${selected===1 ? "alink-selected" : "alink"}`} to="/main/">
            인사말
            </Link>
            <Link onClick={()=>setSelected(2)} className={`${selected===2 ? "alink-selected" : "alink"}`}  to="/main/2">
            비전과 가치
            </Link>
            <Link onClick={()=>setSelected(3)} className={`${selected===3 ? "alink-selected" : "alink"}`}  to="/main/3">
            사업 소개
            </Link>
            <Link onClick={()=>setSelected(4)} className={`${selected===4 ? "alink-selected" : "alink"}`}  to="/main/4">
            연혁
            </Link>
            <Link onClick={()=>setSelected(5)} className={`${selected===5 ? "alink-selected" : "alink"}`}  to="/main/5">
            오시는 길
            </Link>
          </div>
        </div>

        {/* Router */}
        <div className="content">
          <Route exact path="/main/">
            <Main_1 />
          </Route>
          <Route exact path="/main/2">
          <Main_2 />
          </Route>
          <Route exact path="/main/3">
          <Main_3 />
          </Route>
          <Route exact path="/main/4">
          <Main_4 />
          </Route>
          <Route exact path="/main/5">
          <Main_5 />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default Main;
