import React from "react";
import { useNavigate } from "react-router-dom";

function SignUP() {
    let nav=useNavigate()
    function handleSub(e){
        e.preventDefault()
        nav('/login')

    }
  return (
    <form style={{ border: "2px solid black", padding: "50px" }}>
      <input type="text" placeholder="Email" />
      <br />
      <input type="text" placeholder="Password" />
      <br />
      <button type="submit" onClick={handleSub}>SignUp</button>
    </form>
  );
}

export default SignUP;
