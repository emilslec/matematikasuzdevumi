import React, {useState} from 'react';
import Signin from './Components/Signin';
import Register from './Components/Register';
import Title from './Components/Title/Title';

import './Signinpage.css'


const Signinpage = ({updatePath, updateUser}) => {

  const [status, updateStatus] = useState(['signin',""])

  return (
    <div >
      <Title />
      {
        status[0]==='signin' &&
        <Signin
         updatePath={updatePath} 
         updateUser={updateUser}
         updateStatus={updateStatus}
         status={status}
        />
      }
      {
        status[0]==='register' && 
        <Register 
         updatePath={updatePath}
         updateUser={updateUser}
         updateStatus={updateStatus}
         status={status}
        /> 
      }
      
    </div>
  );
}

export default Signinpage;