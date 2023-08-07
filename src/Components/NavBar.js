import React from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import Button from './button';

const Navbar = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Login');
  };

  return (
      <>
        <div>
          <nav className="navbar--main">
            <ul className='nav--lists'>
              <li>
                <Link to="/" className='cryptus--logo'>
                  <div><img
                    src={logo}
                    alt="logo"
                    className="logo"
                    /></div>
                  <div><p className='logo-text'>Cryptous</p></div> 
                </Link>
              </li> 
              <li><Link to="/" className='nav--list'>Home</Link></li>
              <li><Link to="/contact" className='nav--list' >Company</Link></li>
              <li><Link to="/contact" className='nav--list'>About</Link></li>
              <li><Link to="/contact" className='nav--list'>Pricing</Link></li>
              <li><Link to="/contact" className='nav--list'>Team</Link></li>
              <li><Link to="/contact" className='nav--list'>Contact</Link></li>
              <li><Link to="/contact" className='nav--list'>Blog</Link></li>
              <li>
                <Button onClick={handleButtonClick} className="button btn">Sign Up</Button>
              </li>
              <li>
                <Button onClick={handleButtonClick} className="button btn">Login</Button>
              </li>
            </ul>
          </nav>
        </div>
      </>
  );
};

export default Navbar;

