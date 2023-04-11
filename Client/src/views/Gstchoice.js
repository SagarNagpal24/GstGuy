import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Gstchoice.css";
const Gstchoice = () => {
  return (
    <div className="buttondesign">
      
        
        <div className="buttonmargin">
        <Link className="home-button button-primary button" to="/gsttool">
          {" "}
          Goods
        </Link>
        </div>
        <div className="buttonmargin">
        <Link className="home-button button-primary button" to="/gsttool1">
          {" "}
          Services
        </Link>
        </div>
        <div className="buttonmargin">
        <Link className="home-button button-primary button" to="/gsttool1">
          {" "}
          Both
        </Link>
        </div>
       
      
    </div>
  );
};
export default Gstchoice;
