import React, {useState, useEffect} from 'react';

import Leftside from './Leftside/Leftside';
import Middleside from './Middleside/Middleside';
import Rightside from './Rightside/Rightside';




import './Taskpage.css'



const Taskpage = ({updateSignedIn, updatePath}) => {
  const [activeTheme, updateActiveTheme] = useState(['Uzdevuma tēma', 0]);
  const [activeTask, updateActiveTask] = useState({task_name : 'uzdevuma nosaukums'});
  const [tasks, updateTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/tasks', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify ({
        id: activeTheme[1],
      })
    })
    .then(response => response.json())
    .then(taskss => updateTasks(taskss))
  },[activeTheme]);

  return (
    <div className="container">
        <div className=" ">
          <Leftside activeTheme={activeTheme} tasks={tasks} updateActiveTheme={updateActiveTheme} updateActiveTask={updateActiveTask}/>
        </div>
        <div className=" pa2">
          <Middleside tasks={tasks} activeTheme={activeTheme} activeTask={activeTask} updateActiveTask={updateActiveTask} updateActiveTheme={updateActiveTheme}/>
        </div>
        <div className=" pa2">
          <Rightside updateSignedIn={updateSignedIn} updatePath={updatePath}/>
        </div>
    </div>

  );
}

export default Taskpage;