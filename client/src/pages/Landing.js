import React from 'react';
import Button from "react-bootstrap/Button";
import "../styles/landing.css";

export default function Landing() {

  return (
    <div className="bk-img">
      <div className="main">
        <div className="logoContainer">
            <p className="logo">Welcome to Happy Programmers</p>
            <p>Sign up to collobarate and be happy with fellow Programmers working towards Solutions.</p>
        </div>
        <Button className="btn">Login</Button>
        <Button className="btn">Signup</Button>
      </div>
    </div>
  );
}


