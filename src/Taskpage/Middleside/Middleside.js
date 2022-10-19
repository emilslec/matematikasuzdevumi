import React from 'react';
import Taskfield from './Components/Taskfield/Taskfield';
import Taskheader from './Components/Taskheader/Taskheader';
import Answerfield from './Components/Answerfield/Answerfield';


import './Middlepage.css'


const Middleside = ({activeTheme,tasks, updateActiveTheme, activeTask, updateActiveTask}) => {


  return (
    <div>
     <Taskheader theme={activeTask.task_name} path={activeTheme}/>
      <Taskfield task={activeTask.task_text}/>
      <Answerfield tasks={tasks} updateActiveTask={updateActiveTask} activeTask={activeTask}/>
    </div>
  );
}

export default Middleside;