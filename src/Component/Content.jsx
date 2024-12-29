import React from "react";
import "./Content.css";
import { FaUser} from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";


const Content = ({handleLogin, username, setUsername, password, setPassword,message}) => {
  return (
    <div className="wrapper">
      <h1>Login</h1>
      <form action="" onSubmit={handleLogin}>
        <div className="input">
          <input type="text" placeholder="Username" 
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          required />
          <FaUser className="icon"/>
        </div>
        <div className="input">
          <input type="password" placeholder="Enter Password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required />
          <RiLockPasswordLine className="icon"/>

        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forget Password</a>
        </div>
        <div className="register-link">
          <button type="submit" className="button">Submit</button>
        </div>
        <div className="register">
          <p>
            Dont't have an account? 
            <a href="#">Register Link</a>
          </p>
        </div>
        <div className="ip">{message}</div>
      </form>
    </div>
  );
};

export default Content;
