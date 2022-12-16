import React,{useEffect} from 'react';
import { MathfieldElement} from 'mathlive';


const Taskfield = ({task}) => {
  const mfe = new MathfieldElement();

  useEffect(()=> {
    document.addEventListener('DOMContentLoaded', () =>   
      mfe.renderMathInDocument()
    );
    if(!document.getElementById('mf')) return
    document.getElementById('mf').addEventListener("keydown", (evt) =>  evt.preventDefault(), {capture: true});
  }, [])
  useEffect(()=> {
    document.getElementById('mf').value = task.task_text;
  },[task])

  return (
    <section className="center mw5 mw6-ns p br3 mv4">
      <div className="pa3 mb2 bg-washed-blue ba br3 b--black-50">
        <p className="f6 f5-ns lh-copy measure">
          <math-field id="mf" virtual-keyboard-mode="off"  value={task.task_text}>
        Uzd
          </math-field>
        </p>
      </div>
      {task.task_level &&
        <p className="pb2 f6 pl2" >Sarežģītība: {task.task_level}</p>
      }
    </section>
  )
}


export default Taskfield