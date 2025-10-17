import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    
    const result = await fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify({email: email, password: password}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const response = await result.json();
    
    if (response && response.name && response.name !== '') {
      localStorage.setItem('user', JSON.stringify(response));
      navigate('/');
    } else {
      alert('Login failed. Please check your email and password.');
    }
  }

  return (
    <div className="login">
      <input
        onChange={(evt) => setEmail(evt.target.value)}
        className="inputBox"
        type="text"
        placeholder="Enter email"
        value={email}
      />

      <input
        onChange={(evt) => setPassword(evt.target.value)}
        className="inputBox"
        type="password"
        placeholder="Enter password"
        value={password}
      />

      <button
        className='app-button'
        type='button'
        onClick={handleLogin}
      >Login</button>
    </div>
  );
}
export default Login;