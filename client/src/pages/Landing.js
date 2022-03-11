import Button from "react-bootstrap/Button";
import "../styles/landing.css";

export default function Home() {
  return (
    <div className="bk-img">
      <div className="main">
        <div className="logoContainer">
            <p className="logo">HappyProgrammers</p>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <Button className="btn">Login</Button>
        <Button className="btn">Signup</Button>
      </div>
    </div>
  );
}
