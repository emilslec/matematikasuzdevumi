import React, {useState, useEffect} from 'react';
import './Answerfield.css';

const Answerfield = ({activeTask,tasks,user,updateUser, updateActiveTask}) => {

  const [answerInput, updateAnswerInput] = useState('');
  const [answerStatus, updateAnswerStatus] = useState('pending');

  useEffect (() => {
    updateAnswerStatus('pending')
  }, [activeTask])

  const CheckAnswer = () => {
    if (answerInput===activeTask.task_answer){
      fetch('http://localhost:3000/taskcorr', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify ({
        email: user.email,
      }),
      })
      .then(response => response.json())
      .then(compl => updateUser({...user,tasks_completed: compl}))
      .catch(err => console.log(err))
      updateAnswerStatus('right')
    }
    else {
      updateAnswerStatus('wrong')
    }
  }

  const NextTask = (activeId) => {
    tasks.forEach((task, i) => {
      if (task.task_id===activeId){
        if(tasks[i+1]){
        updateActiveTask(tasks[i+1])
        updateAnswerStatus('pending')}
        else if(!tasks[i+1]){
          updateAnswerStatus('last')
        }
      }
    })
  }

  const ChecSho = () => {
    if(answerStatus==="pending"){return false}
    else{return true}
  }

  return (
    <div className="ml2 flex">
      <div className="w-50">
        <label className="center f4 fw6 ph0 mh0 ">Atbilde :</label >
        <input 
          onChange={(e)=>updateAnswerInput(e.target.value)}
          disabled={ChecSho()}
          className="mt3  input-reset ba b--black-20 pa2  db "
          type="text"
          aria-describedby="name-desc">
        </input>
          <input 
              onClick={()=>{if(answerStatus==='pending'){CheckAnswer()}}}
              disabled={ChecSho()}
              className=" mt3 b  ph3 db pv2 input-reset ba b--black bg-transparent pointer f6 " 
              type="submit" 
              value="Iesniegt atbildi">
          </input>
          <input 
              onClick={()=>updateAnswerStatus('show')}
              className=" mt3 b ph3 pv2 db input-reset ba b--black bg-transparent pointer f6 " 
              type="submit" 
              disabled={ChecSho()}
              value="Parādīt atbildi">
          </input>
        
        </div>
        <div className="w-50 relative h5">
          {answerStatus==='right' &&
           <div>
              <h1 className="center  fw6 ph0 mh0 green">Pareizi</h1>
            </div>
          }
          {answerStatus==='wrong' && 
          <div>
            <h1 className="center  fw6 ph0 mh0 red">Nepareizi</h1 >
            <input 
              onClick={()=>{updateAnswerStatus('pending')}}
              className=" mt4 b br3 pa4 pv2 db input-reset  ba b--dark-red bg-transparent pointer  f4 " 
              type="submit" 
              value="Mēģināt vēlreiz">
            </input> 
          </div>
          }
          {answerStatus==='show' && 
            <div>
              <h2 className="center  fw6 ph0 mh0 ">Atbilde :  {activeTask.task_answer}</h2>
            </div>
          }
          {answerStatus==='last' &&
           <div>
              <h3 className="center f2 fw6 ph0 mh0 light-black">Šis ir pēdējais uzdevums tēmā!</h3>
            </div>
          }
          <input 
              onClick={()=>{updateAnswerStatus('pending');NextTask(activeTask.task_id) }}
              className="absolute bot mt4 fr  b br3 ph3 pv2 db input-reset  ba b--gray bg-transparent pointer  f6 " 
              type="submit" 
              value="Nākamais uzd">
          </input> 
        </div>
      
    </div>
  )
}

export default Answerfield
