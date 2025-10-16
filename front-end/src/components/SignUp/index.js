import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    } else {
      console.log("User not logged in");
    }
  });


  const collectData = async () => {

    const SIGNUP_API = 'http://localhost:5000/register';
    console.warn(name, email, password);
    const result = await fetch(SIGNUP_API, {
      method: 'post',
      body: JSON.stringify({name, email, password}),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await result.json();
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/');
  };

  return (
    <div className='register'>
      <h1>Register</h1>
      <input
        className='inputBox'
        type="text"
        placeholder='Enter name'
        onChange={evt => setName(evt.target.value)}
      />
      <input
        className='inputBox'
        type="text"
        placeholder='Enter email'
        onChange={evt => setEmail(evt.target.value)}
      />
      
      <input
        className='inputBox'
        type="password"
        placeholder='Enter password'
        onChange={evt => setPassword(evt.target.value)}
      />
      
      <button
        className='app-button'
        type='button'
        onClick={collectData}
      >Sign Up</button>
    </div>
  )
};

export default SignUp;
