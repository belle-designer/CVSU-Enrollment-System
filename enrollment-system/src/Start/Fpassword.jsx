import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom'; 
import backgroundImage from '../assets/images/Cvsu.jpg'; 

const Fpassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    emailjs.init('6i7Vg14cTxfJNy3Ha'); 
  }, []);

  useEffect(() => {
    let timer;
    if (cooldownTime > 0) {
      timer = setInterval(() => {
        setCooldownTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldownTime]);

  const sendMail = (event) => {
    event.preventDefault();

    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setMessage('');
    setIsEmailSent(false); 

    const params = {
      email: email,
    };

    emailjs
      .send(
        'service_gvj6emv',
        'template_mz0ux08', 
        params
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          setMessage('A password reset link has been sent to your email!');
          setIsEmailSent(true);
          setCooldownTime(60);
        },
        (error) => {
          console.error('Error sending email:', error);
          setMessage('Something went wrong. Please try again later.');
          setIsLoading(false);
        }
      );
  };

  const resendEmail = () => {
    sendMail(new Event('click'));
  };

  const enterNewEmail = () => {
    setEmail('');            
    setMessage('');          
    setIsEmailSent(false);   
    setCooldownTime(0);      
    setIsLoading(false);     
  };

  const goToLogin = () => {
    navigate('/login'); 
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`, 
      }}
    >
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Forgot Password?</h2>

        {!isEmailSent ? (
          <form id="conform" onSubmit={sendMail}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address (Required)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-sm text-gray-600">
              An email has been sent to: <strong>{email}</strong>
            </p>
            <div className="mt-4">
              <button
                onClick={enterNewEmail}
                className="w-full py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none mb-2"
              >
                Enter New Email
              </button>
              <button
                onClick={resendEmail}
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
                disabled={cooldownTime > 0}
              >
                {cooldownTime > 0 ? `Resend Email (${cooldownTime}s)` : 'Resend Email'}
              </button>
            </div>
          </div>
        )}

        {message && (
          <p className="mt-4 text-center text-sm text-gray-600">
            {message}
          </p>
        )}

        <div className="mt-4">
          <button
            onClick={goToLogin}
            className="w-full py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fpassword;
