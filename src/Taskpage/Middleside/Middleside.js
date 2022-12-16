import React from 'react';
import Taskfield from './Components/Taskfield/Taskfield';
import Taskheader from './Components/Taskheader/Taskheader';
import Answerfield from './Components/Answerfield/Answerfield';
import Try from './Components/Try'


import './Middlepage.css'


const Middleside = ({activeTheme,tasks, updateUser, activeTask, updateActiveTask, user}) => {


  return (
    <div>
     <Taskheader activeTask={activeTask} activeTheme={activeTheme}/>
      <Taskfield task={activeTask}/>
      <Answerfield tasks={tasks} updateUser={updateUser} user={user} updateActiveTask={updateActiveTask} activeTask={activeTask}/>
      {/* <Try /> */}
    </div>
  );
}

export default Middleside;