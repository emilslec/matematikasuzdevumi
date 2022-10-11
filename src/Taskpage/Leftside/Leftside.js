import React from 'react';
import Searchtask from './Components/Searchtask/Searchtask';
import Tasklist from './Components/Tasklist/Tasklist';
import Profile from './Components/Profile/Profile';



const Leftside = ({activeTheme, updateActiveTheme, updateActiveTaskName}) => {

  return (
    <div className="br flex flex-column">
     	<Profile />
     	<Searchtask updateActiveTheme={updateActiveTheme}/>
    	<Tasklist updateActiveTaskName={updateActiveTaskName} activeTheme={activeTheme} updateActiveTheme={updateActiveTheme}/>
    </div>
  );
}

export default Leftside;