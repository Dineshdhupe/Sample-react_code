import React, { useState } from 'react';
import { auth } from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth'

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [message, setMessage] = useState('');

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth,
        'recaptcha-container',
        {
          size: 'invisible',
          callback: () => {
            console.log('Recaptcha verified');
          },
          'expired-callback': () => {
            console.log('Recaptcha expired. Please verify again.');
          },
        },
        auth
      );
    }
  };

  const sendOtp = () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, "+91" +phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        setMessage('OTP sent successfully!');
      })
      .catch((error) => {
        console.error(error);
        setMessage('Failed to send OTP. Please try again.');
      });
  };

  const verifyOtp = () => {
    if (!verificationId) {
      setMessage('No OTP sent yet.');
      return;
    }
  
    const credential = PhoneAuthProvider.credential(verificationId, otp);
  
    signInWithCredential(auth, credential)
      .then((result) => {
        setMessage('Phone number verified successfully!');
      })
      .catch((error) => {
        console.error(error);
        setMessage('Failed to verify OTP.');
      });
  };

  return (
   
    <div class="user-icon gr-bg">
    
      <h2>Phone Authentication</h2>
      <div id="recaptcha-container"></div>

      {!verificationId ? (
        <div>
          <input
            type="text"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={sendOtp}>Send OTP</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default PhoneAuth;