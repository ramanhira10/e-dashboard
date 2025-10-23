
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {

  const auth = localStorage.getItem('user');

  const navigate = useNavigate();
  
  const logoutAndRedirectToSignUp = () => {
    localStorage.clear();
    navigate('/signup');
  };

  const getName = () => {
    if (auth) {
      return JSON.parse(auth).name;
    }
    return '';
  };

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  });
  
  return (
    <nav>
      {
        auth ?
          (
            <ul className="nav-ul">
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/add">Add Product</Link>
              </li>
              <li>
                <Link to="/update">Update PRoduct</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  onClick={logoutAndRedirectToSignUp}
                >Logout ({getName()})</Link>
              </li>
            </ul>
          ) : (
            <ul className="nav-ul nav-right">
              <li>
                <Link
                  to="/signup"
                >Sign Up</Link>
              </li>
              <li>
                <Link
                  to="/login"
                >Log in</Link>
              </li>
            </ul>
          )  
      }
      
    </nav>
  );
};

export default Nav;
