import React,{} from 'react';

import Choisedotask from './Components/Choisedotask';


import './homepage.css'


const Homepage = ({updateUser, user}) => {


  return (
    <div >
      <Choisedotask updateUser={updateUser} user={user} />
    </div>
  );
}

export default Homepage;