import React, { useState } from "react";
import axios from "axios";
import "./GstForm.css";

const GstForm = () => {

  const [constitution, setConstitution] = useState("");
  const [cin, setCIN] = useState("");
  const [proposedname, setProposedname] = useState("");

  const [numberofdirectors, setNumberofdirectors] = useState(0);
  const [businessaddress, setBusinessAddress] = useState("");

  const [phonenumber, setPhonenumber] = useState("");

  const [emailid, setEmailid] = useState("");


  const HandleConstitutionDropdown=(event)=>{
    const constitutonvalue = event.target.value;
    setConstitution(constitutonvalue);
  };

  const GstformSubmitHandler = (event) => {
    event.preventDefault();
    console.log(constitution,emailid);
    {constitution==="" ? alert("Please select constitution") : 
    axios.post("http://localhost:3003/Gstforminsert", {
      constitution: constitution,
      cin: cin,
      proposedname: proposedname,

      numberofdirectors: numberofdirectors,
      businessaddress: businessaddress,

      phonenumber: phonenumber,

      emailid: emailid,
      
    });
    window.location.reload(true);
    alert("Data Submitted successfully");
  }
    
  };

  return (
    <div className="GStformcontainer">

<div className="home-input-containerGSTForm">
      <div className="home-container1">
        <h1>GST Registration</h1>
        <div className="gstform_rowitems">
          <label>Constitution</label>
          
          <select
                defaultValue={"Select..."}
               required
               onChange={HandleConstitutionDropdown}
                placeholder="Category"
              >
                <option value="">Options...</option>
                <option value="Individual/Proprietor">Individual/Proprietor</option>
                <option value="Partnership">Partnership</option>
                <option value="Pvt Ltd">Pvt Ltd</option>
                <option value="OPC">OPC</option>
                <option value="Trust">Trust</option>
                <option value="LCP">LCP</option>
              </select>
        </div>

        <div className="gstform_rowitems">
          <label>CIN</label>
          <input
            type="text"
            required
            placeholder="Your CIN"
            className="home-textinput input"
            onChange={(event) => {
              setCIN(event.target.value);
            }}
          />
        </div>
        <div className="gstform_rowitems">
          <label>Proposed Name</label>
          <input
            type="text"
            placeholder="Your Proposed Name"
            className="home-textinput input"
            onChange={(event) => {
              setProposedname(event.target.value);
            }}
          />
        </div>
        <div className="gstform_rowitems">
          <label>No of Directors</label>
          <input
            type="number"
            placeholder="Number"
            className="home-textinput input"
            onChange={(event) => {
              setNumberofdirectors(event.target.value);
            }}
          />
        </div>
        <div className="gstform_rowitems">
          <label>Business Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            className="home-textinput input"
            onChange={(event) => {
              setBusinessAddress(event.target.value);
            }}
          />
        </div>

        <div className="gstform_rowitems">
          <label>Phone Number </label>
          <input
            type="text"
            placeholder="Enter Phone"
            className="home-textinput input"
            onChange={(event) => {
              setPhonenumber(event.target.value);
            }}
          />
        </div>

        <div className="gstform_rowitems">
          <label>Email ID</label>
          <input
            type="text"
            placeholder="Enter Email"
            className="home-textinput input"
            onChange={(event) => {
              setEmailid(event.target.value);
            }}
          />
        </div>

        <button onClick={GstformSubmitHandler} type="button" className="home-button button-primary button">Submit</button>
      </div>
    </div>
    </div>
    
  );
};

export default GstForm;
