import React from 'react';


const Taskfield = ({task}) => {
  return (
    <section className="center mw5 ba b--black-10 mw6-ns br3 mv4">
      <div className="pa3">
        <p className="f6 f5-ns lh-copy measure">

          {task}
        </p>
      </div>
    </section>
  )
}


export default Taskfield

