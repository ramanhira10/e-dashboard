
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {

  const auth = localStorage.getItem('user');

  const navigate = useNavigate();
  
  const logoutAndRedirectToSignUp = () => {
    localStorage.clear();
    navigate('/signup');
  }

  const getName = () => {
    if (auth) {
      return JSON.parse(auth).name;
    }
    return '';
  }
  
  return (
    <nav>
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
          {
            auth ?
              (<Link
                to="/signup"
                onClick={logoutAndRedirectToSignUp}
              >Logout ({getName()})</Link>) :
              (<Link
                to="/signup"
              >Sign Up</Link>)
          }
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
