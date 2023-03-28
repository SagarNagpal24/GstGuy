import React from "react";
import { Link } from "react-router-dom";
import "./SecondGstForm.css";

const SecondGstForm = () => {
  return (
    <div className="GStformcontainer">
      <div className="fillformdesign">
        <label>Basic Details</label>
        <label className="filldesign">Advance Details</label>
        <label>Payment</label>
      </div>
      <div className="home-input-containerGSTForm">
        <div className="home-container1">
          <div className="gstform_rowitems">
            <label>Trade Name</label>

            <input
              type="text"
              required
              placeholder="Your Trade Name"
              className="home-textinput input"
            />
          </div>
          <div className="gstform_rowitems">
            <label>Business Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="home-textinput input"
            />
          </div>

          <div className="gstform_rowitems">
            <label>State</label>

            <select defaultValue={"Select..."} required placeholder="Category">
              <option value="">Options...</option>
              <option value="Delhi">Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Punjab">Punjab</option>
              <option value="Haryana">Haryana</option>
            </select>
          </div>

          <div className="gstform_rowitems">
            <label>Name on Adhaar card</label>
            <input
              type="text"
              required
              placeholder="name"
              className="home-textinput input"
            />
          </div>

          <div className="gstform_rowitems">
            <label>Adhaar Number</label>
            <input
              type="text"
              required
              placeholder="Adhaar number"
              className="home-textinput input"
            />
          </div>

          <div className="gstform_rowitems">
            <label>Pan Number</label>
            <input
              type="text"
              required
              placeholder="Pan Number"
              className="home-textinput input"
            />
          </div>
          <div className="gstform_rowitems">
            <label>Name of Principal Item/Services</label>
            <input
              type="text"
              required
              placeholder="..."
              className="home-textinput input"
            />
          </div>
          <div className="gstform_rowitems">
            <label>Attachments</label>
            <input
              type="text"
              required
              placeholder="..."
              className="home-textinput input"
            />
          </div>

          <button type="button" className="home-button button-primary button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default SecondGstForm;
