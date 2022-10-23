import React,{useState, useEffect} from 'react';
import Searchtask from './Components/Searchtask/Searchtask';
import Tasklist from './Components/Tasklist/Tasklist';
import Profile from './Components/Profile/Profile';



const Leftside = ({activeTheme, updateActiveTheme, updateActiveTask, tasks, user}) => {

  const [themes, updateThemes] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('http://localhost:3000/themes', { signal })
    .then(response => response.json())
    .then(themess => updateThemes(themess))
    .catch(err => {
      if(err.name === "AbortError"){
      }
      else(console.log(err))
    })
      

    return () => {controller.abort()
    }
  },[]);
  

    
    
  return (
    <div className="br flex flex-column">
     	<Profile user={user}/>
     	<Searchtask themes={themes} updateActiveTheme={updateActiveTheme}/>
    	<Tasklist themes={themes} tasks={tasks} updateActiveTask={updateActiveTask} activeTheme={activeTheme} updateActiveTheme={updateActiveTheme}/>
    </div>
  );
}

export default Leftside;