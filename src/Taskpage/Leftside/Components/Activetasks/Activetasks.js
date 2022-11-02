import React from 'react';
//import './Classform.css'

const Activetasks = ({activeTheme, tasks, updateActiveTask}) => {

  return (
	  <div className="mt4">
      <h3 className="f4 b db mb2 mh2 red">{activeTheme.theme_name}</h3>
      <ul className="pl3 list center">
        { tasks.map((task, i)=>{
        return <li key={i} className="f5 pointer"  onClick={()=> updateActiveTask(task)}>{task.task_name} <span className="fr mr2 f6">{task.task_level}</span> </li>})
        }
      </ul>
      
    </div>
	)

}


export default Activetasks