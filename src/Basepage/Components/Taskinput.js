import React, {useState} from 'react';


const Taskinput = ({taskId,updateUser, user}) => {

  const [taskName, updateTaskName] = useState('');
  const [taskText, updateTaskText] = useState('');
  const [taskAnswer, updateTaskAnswer] = useState('');
  const [submitStatus, updateSubmitStatus] = useState('pending');

console.log(user.email)
  const SendTask = (a) => {
    a.preventDefault();
    fetch('http://localhost:3000/addt/', {
      method : 'post',
      headers : {'Content-type' : 'application/json'},
        body : JSON.stringify({
          name: taskName,
          text: taskText,
          answer: taskAnswer,
          theme: taskId,
          email: user.email
        })})
    .then(response => response.json())
    .then(task => {
      if(task.tasks_added){
        updateSubmitStatus('right');
        updateUser({...user, tasks_added: task.tasks_added})
      }
      else if (!task.task_id){
        updateSubmitStatus('wrong')
      }
    })
  }
  

  return (   
    <div className="ma4  pl4  inpt">
    <section className="w-70 pa3 f5  ma2 mw5 ba b--black-10 mw6-ns br3 mv4">
      <p>Šajā mājaslapas sadaļā var pievienot savus izdomātos uzdevumus, lai citi tos varētu pildīt.</p>
      No sākuma aizpildi lejā redzamos laukus ar savu uzdevumu un pēc tam izvēlies pie kuras tēmas uzdevums piederas, tas arī viss
    <h3> Uzdevumu pievienos ar epastu : {user.email}</h3>
    </section>
      <div className="">
        <form className="pa4 black-80">
        <label className="center f4 fw6 ph0 mh0 ">Uzdevuma Nosaukums</label >
        <input 
          onChange={(field)=> updateTaskName(field.target.value)}
          className="mt3 w-60 br2 input-reset mb3 ba b--black-40 pa2 db "
          type="text"
          aria-describedby="name-desc">
        </input>
        <label className="center f4 fw6 ph0 ">Uzdevums</label >
            <textarea 
              onChange={(field)=> updateTaskText(field.target.value)}
              id="comment" 
              name="comment" 
              className="mt2 db border-box hover-black w-100 h4 measure ba b--black-20 pa2 br2 mb2"
              aria-describedby="comment-desc">
             </textarea>
            <label className="center f4 fw6 ph0 mh0 ">Uzdevuma atbilde</label >
          <input 
            onChange={(field)=> updateTaskAnswer(field.target.value)}
            className="mt3 w-60 br2 input-reset mb3 ba b--black-40 pa2 db "
            type="text"
            aria-describedby="name-desc">
          </input>
          <input 
              onClick={SendTask}
              className=" mt4 b br3 pa4 pv2 db input-reset  ba b--dark-red bg-transparent pointer  f4 " 
              type="submit" 
              value="Pievienot uzdevumu">
            </input> 
          </form>
          {submitStatus==='right' &&
           <div>
              <h1 className="center  fw6 ph0 mh0 green">Uzdevums veiksmīgi pievienots</h1>
            </div>
          }
          {submitStatus==='wrong' && 
          <div>
            <h1 className="center  fw6 ph0 mh0 red">Kāda no vērtībām trūkst</h1>
          </div>
          }
          
      </div>
        
      
    
      </div>
  )
}


export default Taskinput

