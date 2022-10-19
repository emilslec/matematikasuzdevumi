import React, {useState} from 'react';
import './Answerfield.css';

const Answerfield = ({activeTask,tasks, updateActiveTask}) => {

  const [answerInput, updateAnswerInput] = useState('');
  const [answerStatus, updateAnswerStatus] = useState('pending');

  const CheckAnswer = () => {
    if (answerInput===activeTask.task_answer){
        updateAnswerStatus('right')
      }
    else {
      updateAnswerStatus('wrong')
    }
  }

  const NextTask = (activeId) => {
    tasks.forEach((task, i) => {
      if (task.task_id===activeId&&tasks[i+1]){
        updateActiveTask(tasks[i+1])
      }
    })
  }

  return (
    <div className="ml2 flex">
      <div className="w-50">
        <label className="center f4 fw6 ph0 mh0 ">Atbilde :</label >
        <input 
          onChange={(field)=> updateAnswerInput(field.target.value)}
          className="mt3  input-reset ba b--black-20 pa2  db "
          type="text"
          aria-describedby="name-desc">
        </input>
          <input 
              onClick={()=>{if(answerStatus==='pending'){CheckAnswer()}}}
              className=" mt3 b  ph3 db pv2 input-reset ba b--black bg-transparent pointer f6 " 
              type="submit" 
              value="Iesniegt atbildi">
          </input>
          <input 
              onClick={()=>updateAnswerStatus('show')}
              className=" mt3 b ph3 pv2 db input-reset ba b--black bg-transparent pointer f6 " 
              type="submit" 
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
          <input 
              onClick={()=>{NextTask(activeTask.task_id); updateAnswerStatus('pending')}}
              className="absolute bot mt4 fr  b br3 ph3 pv2 db input-reset  ba b--gray bg-transparent pointer  f6 " 
              type="submit" 
              value="Nākamais uzd">
          </input> 
        </div>
      
    </div>
  )
}

export default Answerfield

