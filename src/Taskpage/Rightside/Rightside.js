import React from 'react';
import Homebutton from './Components/Homebutton/Homebutton';



const Rightside = ({updateUser, user}) => {

  return (
    <div >
      <Homebutton updateUser={updateUser} user={user}/>
    </div>
  );
}

export default Rightside;