import React from 'react';


const Signin = ({updatePath, updateSignedIn}) => {
  return (
    <main className="pa4 black-80">
      <form className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--light-blue" type="email" name="email-address"  id="email-address"></input>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--light-blue" type="password" name="password"  id="password"></input>
          </div>
          <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"></input> Remember me</label>
        </fieldset>
        <div className="">
          <input className="w-40 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"></input>
        </div>
        <div className="">
          <input className="w-30 mt3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"></input>
        </div>
        <div className="">
          <input 
           onClick={()=>{
            updateSignedIn(true); 
            updatePath('home')}
           }
           className="mt3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
           type="submit" 
           value="Annonymus"></input>
        </div>
        <div className="lh-copy mt3">
          <a href="#0" className="pv2 f6 link dim black db">Forgot your password?</a>
        </div>
      </form>
    </main>
  )
}


export default Signin