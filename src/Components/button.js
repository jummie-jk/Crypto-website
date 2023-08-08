import React from 'react'
import { useNavigate } from "react-router-dom";

const Button = ({children, text, className, to }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate(to);
    };
  return (
    <button className={className} onClick={handleButtonClick} > {children} </button>
  )
}

export default Button;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Button = ({ children, text, className, to }) => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate(to);
//   };

//   return (
//     <button className={className} onClick={handleButtonClick}>
//       {children}
//     </button>
//   );
// };

// export default Button;
