// thelounge/src/components/AgeVerification.js
import React, { useState } from "react";

function AgeVerification({ onVerify }) {
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(age) >= 18) {
      onVerify(true);
    } else {
      window.location.href = "https://www.youtube.com";
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: "#000000", // Set background color to black
    color: "#ffffff", // Set text color to white
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    border: "2px solid #ffffff",
    borderRadius: "10px",
    backgroundColor: "#333333",
  };

  const inputStyle = {
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ffffff",
    backgroundColor: "#555555",
    color: "#ffffff",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#ff0000",
    color: "#ffffff",
  };

  const labelStyle = {
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1>Age Verification</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Please enter your age:
        </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

export default AgeVerification;