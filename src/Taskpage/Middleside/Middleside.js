import React from 'react';
import Taskfield from './Components/Taskfield/Taskfield';
import Taskheader from './Components/Taskheader/Taskheader';
import Answerfield from './Components/Answerfield/Answerfield';


import './Middlepage.css'


const Middleside = ({activeTheme, updateActiveTheme, activeTaskName, updateActiveTaskName}) => {
  const taskEx = ["theme", "path??", "task", "answer"]


  return (
    <div>
     <Taskheader theme={activeTaskName} path={activeTheme}/>
      <Taskfield task={activeTaskName}/>
      <Answerfield updateActiveTaskName={updateActiveTaskName} answer={taskEx[3]}/>
    </div>
  );
}

export default Middleside;