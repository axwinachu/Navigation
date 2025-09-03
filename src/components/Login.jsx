import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    let nav=useNavigate()
    function handleLogin(e){
        e.preventDefault()
        nav("/home")

    }
  return (
    <form style={{ border: "2px solid black", padding: "50px" }}>
      <input type="text" placeholder="Email" />
      <br />
      <input type="text" placeholder="Password" />
      <br />
      <button type="submit" onClick={handleLogin}>Login</button>
    </form>
  );
}

export default Login;
