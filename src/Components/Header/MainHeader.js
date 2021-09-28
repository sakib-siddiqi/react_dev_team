import React from "react";
import Header from "./Header";
import "./header.css";
import headImg from "./undraw_project_team_lc5a.svg"

const MainHeader = () => {
  return (
    
        <header className="mb-5 py-5">
          <div className="container">
             <div className='row g-5'>
                  <div className="col-12 col-md-9 col-lg-9">
                    <h1 id="header1" className="fw-bolder">
                      DEV TEAM
                    </h1>
                    <Header id="header2" data="400000" />
                  </div>
                  <div className="col-12 col-md-3 col-lg-3">
                    <img src={headImg} alt="" className="img-fluid" />
                  </div>
             </div>
          </div>
        </header>
  );
};

export default MainHeader;
