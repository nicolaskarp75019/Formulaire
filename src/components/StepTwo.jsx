import React from "react";

const StepTwo = ({ name, email, password, handleEdit }) => {
  return (
    <div className="container">
      <div className="resultpage">
        <h1>Results</h1>
        <span>Name: {name}</span>
        <span>Email: {email}</span>
        <span>Password: {password}</span>
        <button type="button" onClick={handleEdit}>
          Edit your information
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
