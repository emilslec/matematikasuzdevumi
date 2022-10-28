import React from 'react';


const Taskfield = ({task}) => {
  return (
    <section className="center mw5  mw6-ns br3 mv4">
      <div className="pa3 mb2 ba b--black-10">
        <p className="f6 f5-ns lh-copy measure">
          {task.task_text}
        </p>
      </div>
      Sarežģītība: {task.task_level}
    </section>
  )
}


export default Taskfield

