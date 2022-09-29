import React from 'react';
import Signin from './Components/Signin/signin';
import Title from './Components/Title/Title';

import './Signinpage.css'


const Signinpage = ({updatePath, updateSignedIn}) => {

  return (
    <div >
      <Title />
      <Signin updatePath={updatePath} updateSignedIn={updateSignedIn}/>
    </div>
  );
}

export default Signinpage;