import {  } from 'mathlive';
import React,{useEffect, useState} from 'react';
//import './Classform.css'

const Activetasks = ({activeTheme,user, tasks, updateActiveTask}) => {
  const [ary, updateAry] = useState([2]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (user.email){
      fetch('https://matematikasuzdevumiapi.herokuapp.com/compl', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify ({
        email: user.email
      })}, { signal })
    .then(response => response.json())
    .then(compl =>{
      compl.forEach((compls, i)=>{
        const k=Number(compls.task_id);
        updateAry(a=>[...a, k])
      })})

      .catch(err => {
      if(err.name === "AbortError"){
      }
      else(console.log(err))
    })
    return () => {controller.abort()
    }
  }},[]);

  return (
	  <>
      <h3 className="f3 b nosaukums tc mt0 pt3 db mb0 mh2 blue">{activeTheme.theme_name}</h3>
      <ul className="pl3 list center mt0 cx scroll2">
        { tasks.map((task, i)=>{
        return <li key={i}  className={ary.includes(task.task_id) ? "f5 pointer silver" :"f4 pointer" }
            onClick={()=>updateActiveTask(task)}>{task.task_name} <span className="fr mr2 f6">{task.task_level}/5</span> </li>})
        }
      </ul>
      
    </>
	)

}


export default Activetasks