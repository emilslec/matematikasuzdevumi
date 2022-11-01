import React from 'react';


const Taskfield = ({task}) => {
  console.log(task)
  return (
    <section className="center mw5 mw6-ns p br3 mv4">
      <div className="pa3 mb2 bg-moon-gray ba br3 b--black-50">
        <p className="f6 f5-ns lh-copy measure">
          {task.task_text}
        </p>
      </div>
      {task.task_level &&
        <p className="pb2 f6 pl2" >Sarežģītība: {task.task_level}</p>
      }
    </section>
  )
}


export default Taskfield