import React, {useState} from "react";
import Button from "../Hero/button";
import { Link } from 'react-router-dom';


const Signin = () => {

    const [userDetails , setUserDetails] = useState (
        {
           username: '',
           password: '',
        }
     )
     const handleChange = (e) =>{
        const{ name, value } = e.target;
        setUserDetails ((prevDetails) => ({...prevDetails, [name]: value}))
     }
     
     const handleSubmit = (e) => {
        e.preventDefault()
        // Sends details to an api
     }
     
         return (
               <>
                  <div className="login--page">
                     <div className="login--page--form" >
                        <form onSubmit={handleSubmit}>
                          <p className="login--text">Sign In</p>
                          <p>Username:</p>
                          <input type="text" name="username" placeholder="Enter your username" className="input-field" value={userDetails.username} onChange={handleChange}></input>
                          <p>Password:</p>
                          <input type="password" className="input-field" placeholder="Enter your password" name="password" value={userDetails.password} onChange={handleChange}></input>
                          <div className="form--submit">
                             <Button className="button btn-tertiary">Submit</Button>
                             <p>Don't have an account? 
                                <Link to="/signup" className='page-nav-text'> create one
                                </Link>
                             </p>
                             <p>Go back to 
                                <Link to="/" className='page-nav-text'> homepage
                                </Link>
                             </p>
                          </div>
                        </form>
                     </div>
                  </div>
               </>
         );
       
}
 export default Signin;