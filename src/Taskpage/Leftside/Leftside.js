import React,{useState} from 'react';
import Searchtask from './Components/Searchtask/Searchtask';
import Tasklist from './Components/Tasklist/Tasklist';
import Profile from './Components/Profile/Profile';



const Leftside = () => {
  const [activeTheme, updateActiveTheme] = useState('');

  return (
    <div className="br flex flex-column">
     	<Profile />
     	<Searchtask updateActiveTheme={updateActiveTheme}/>
    	<Tasklist activeTheme={activeTheme} updateActiveTheme={updateActiveTheme}/>
    </div>
  );
}

export default Leftside;