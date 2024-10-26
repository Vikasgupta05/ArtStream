import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './SignIn.module.css'; 

const OTP = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Notify parent component of OTP change
    if (onChange) {
      onChange(newOtp.join(""));
    }

    // Move focus to next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="d-flex justify-content-center mb-3">
      {otp.map((data, index) => (
        <input
          type="text"
          maxLength="1"
          key={index}
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onFocus={(e) => e.target.select()}
          className={`${styles.otpStyle} form-control mx-1 text-center p-0 rounded-pill`}
        />
      ))}
    </div>
  );
  
};

export default OTP;
