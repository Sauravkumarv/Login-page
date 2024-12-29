import React, { useState } from "react";
import Content from "./Component/Content";
import "./App.css";
import axios from "axios";

const Login = () => {

const[username,setUsername]=useState("");
const[password,setPassword]=useState("");
const[message,setMessage]=useState("");

const handleLogin=async(e)=>{
  e.preventDefault();


try{const response= await axios.post("http://localhost:8080/api/login",{
  username,
  password
});
setMessage (response.data);
}catch(error){
  setMessage("Invalid Credentials");
}

};

  return (
    <div>
     <Content/>
    </div>
  );
};

export default Login;
