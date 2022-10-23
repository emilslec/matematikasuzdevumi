import React from 'react';
import Homebutton from './Components/Homebutton/Homebutton';



const Rightside = ({updateUser, updatePath}) => {

  return (
    <div >
      <Homebutton updateUser={updateUser} updatePath={updatePath}/>
    </div>
  );
}

export default Rightside;