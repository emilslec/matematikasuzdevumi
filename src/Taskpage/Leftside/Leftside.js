import React from 'react';
import Searchtask from './Components/Searchtask/Searchtask';
import Tasklist from './Components/Tasklist/Tasklist';
import Profile from './Components/Profile/Profile';



const Leftside = () => {

  return (
    <div className="br flex flex-column">
     	<Profile />
     	<Searchtask />
    	<Tasklist />
    </div>
  );
}

export default Leftside;