import React, {useState} from 'react';
import { useNavigate  } from "react-router-dom";


const Register = ({ updateSignedIn, }) => {
  const [email, updateEmail] = useState('');
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const [status, updateStatus] = useState("")

  let navigate = useNavigate();

  const submitRegister = (e) => {
    e.preventDefault();
    if(!email||!password||!username)return updateStatus(["register", "emt_fail"])
    fetch('https://matematikasuzdevumiapi.herokuapp.com/register', {
      method: 'post',
      headers : {'Content-type' : 'application/json'},
        body : JSON.stringify({
          email: email,
          username: username,
          password: password
        })
    })
    .then(response => response.json())
    .then(res=> {
      if(res.email){
       navigate("/");
      }
      if(res==="cant"){
        updateStatus(['register', "fail"])
      }
    })
    .catch(err=>console.log(err))
  }

  const passwordType = (e) => {
    e.preventDefault()
    const pwField = document.getElementById("password")
    if(pwField.type==="password"){pwField.setAttribute("type", "text")}
    else if (pwField.type==="text"){pwField.setAttribute("type", "password")}

  }

  return (
    <main className="pa4 black-80">
      <form className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Register</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input
             className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--light-blue"
             type="email"
             name="email-address"
             id="email-address"
             onChange={(e)=> updateEmail(e.target.value)}
             autoComplete="on"
             ></input>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input 
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-70 b--light-blue" 
            type="password"
            name="password"  
            id="password"
            onChange={(e)=> updatePassword(e.target.value)}
            autoComplete="on"
            ></input>
            <input className="w-25 fr  ph3 pv2 input-reset ba b--blsack bg-transparent grow pointer f6 dib" type="submit"
           value="Show/ Hide "
           onClick={(e)=>passwordType(e)}>
           </input>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
            <input 
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--light-blue" 
            onChange={(e)=> updateUsername(e.target.value)}
            autoComplete="on"></input>
          </div>
        </fieldset>
        <div className="">
          <input className="w-30 mt3 b ph3 pv2 input-reset ba b--blsack bg-transparent grow pointer f6 dib" type="submit"
           value="Registeŗ"
           onClick={submitRegister}>
           </input>
           <input className="w-30 fr mt3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="button"
           value="Sign in"
           onClick={()=>navigate("/")}>
           </input>
        </div>
        {
        status[1]==="fail" &&
          <div className="mt2">
            <label className="center f4 fw6 ph0  mh0 ">Epasta adrese jau ir izmantota, login!</label >
          </div>
        }
        {
        status[1]==="emt_fail" &&
          <div className="mt2">
            <label className="center f4 fw6 ph0  mh0 ">Visi lauki nav aizpildīti</label >
          </div>
        }
      </form>
    </main>
  )
}


export default Register