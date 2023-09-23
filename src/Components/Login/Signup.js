import React, { useState } from "react";
import Button from "../Hero/button";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleName = (e) => {
    const { name, value } = e.target;
    setName(value);
  };
  const handlePassword = (e) => {
    const { password, value } = e.target;
    setPassword(value);
  };
  const handleEmail = (e) => {
    const { email, value } = e.target;
    setEmail(value);
  };
  const handlePhoneNumber = (e) => {
    const { phoneNumber, value } = e.target;
    setPhoneNumber(value);
  };
  // const handleChange = (e) =>{
  //    const{ name, value } = e.target;
  //    // console.log(value)
  //    // setUserDetails ((prevDetails) => ({...prevDetails, [name]: value}))
  //     userDetails[name] = value
  //     setUserDetails(userDetails)
  //     console.log(userDetails)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      name: name,
      password: password,
      email: email,
      phoneNumber: phoneNumber,
    };
    const userResponse = await axios
      .post("https://coinxsafeapi.onrender.com/api/auth", requestBody, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  return (
    <>
      <div className="login--page">
        <div className="login--page--form">
          <form onSubmit={handleSubmit}>
            <p className="login--text">Sign Up</p>
            <p>Name: </p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input-field"
              value={name}
              onChange={handleName}
            ></input>
            <p>Email:</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input-field"
              value={email}
              onChange={handleEmail}
            ></input>
            <p>Password:</p>
            <input
              type="password"
              className="input-field"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={handlePassword}
            ></input>
            <p>Phone Number:</p>
            <input
              type="number"
              className="input-field"
              placeholder="Enter your phone number"
              name="password"
              value={phoneNumber}
              onChange={handlePhoneNumber}
            ></input>
            <div className="form--submit">
              <Button className="button btn-tertiary">Submit</Button>
              <p>
                Already have an account?
                <Link to="/signin" className="page-nav-text">
                  {" "}
                  sign-in
                </Link>
              </p>
              <p>
                Go back to
                <Link to="/" className="page-nav-text">
                  {" "}
                  homepage
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
// {
//    name: '',
//    email: '',
//    password: '',
//    phoneNumber: '',
// }
