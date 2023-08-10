import React, {useState} from "react";
import Button from "./button";
import { Link } from 'react-router-dom';

function SignUp() {

const [userDetails , setUserDetails] = useState (
   {
      username: '',
      email: '',
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
                     <p className="login--text">Sign Up</p>
                     <p>Username:</p>
                     <input type="text" name="username" placeholder="Enter your username" className="input-field" value={userDetails.username} onChange={handleChange}></input>
                     <p>Email:</p>
                     <input type="email" name="email" placeholder="Enter your email" className="input-field" value={userDetails.email} onChange={handleChange}></input>
                     <p>Password:</p>
                     <input type="password" className="input-field" placeholder="Enter your password" name="password" value={userDetails.password} onChange={handleChange}></input>
                     <div className="form--submit">
                        <Button className="button btn-tertiary">Submit</Button>
                        <p>Already have an account? 
                           <Link to="/signin" className=''> sign-in
                           </Link>
                        </p>
                        <p>Go back to 
                           <Link to="/" className=''> homepage
                           </Link>
                        </p>
                     </div>
                   </form>
                </div>
             </div>
          </>
    );
  }
  
  export default SignUp;