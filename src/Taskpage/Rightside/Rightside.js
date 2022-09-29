import React from 'react';
import Signoutbutton from './Components/Signoutbutton/Signoutbutton';
import Homebutton from './Components/Homebutton/Homebutton';



const Rightside = ({updateSignedIn, updatePath}) => {

  return (
    <div >
      <Signoutbutton updateSignedIn={updateSignedIn}/>
      <Homebutton updatePath={updatePath}/>
    </div>
  );
}

export default Rightside;