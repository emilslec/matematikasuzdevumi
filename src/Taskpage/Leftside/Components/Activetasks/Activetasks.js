import React from 'react';
//import './Classform.css'

const Activetasks = ({activeTheme, tasks, updateActiveTask}) => {

  return (
	  <div className="mt4  ">
      <h3 className="f4 b db mb2 mh4 red">{activeTheme[0]}</h3>
      <ul className="list ">
        { tasks.map((task, i)=>{
        return <li key={i} onClick={() => updateActiveTask(task)}>{task.task_name}</li>})
        }
      </ul>
      

    </div>
	)

}


export default Activetasks