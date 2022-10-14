import React,{useState, useEffect} from 'react';
import Searchtask from './Components/Searchtask/Searchtask';
import Tasklist from './Components/Tasklist/Tasklist';
import Profile from './Components/Profile/Profile';



const Leftside = ({activeTheme, updateActiveTheme, updateActiveTaskName}) => {

  const [themes, updateThemes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/themes')
    .then(response => response.json())
    .then(themess => updateThemes(themess))
  },[]);

  return (
    <div className="br flex flex-column">
     	<Profile />
     	<Searchtask themes={themes} updateActiveTheme={updateActiveTheme}/>
    	<Tasklist themes={themes} updateActiveTaskName={updateActiveTaskName} activeTheme={activeTheme} updateActiveTheme={updateActiveTheme}/>
    </div>
  );
}

export default Leftside;