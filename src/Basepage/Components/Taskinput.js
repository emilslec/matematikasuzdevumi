import React from 'react';


const Taskinput = () => {
  return (
      
    <div className="ma4   flex inpt">
      <div className="w-70">
        <form className="pa4 black-80">
        <label className="center f4 fw6 ph0 mh0 ">Uzdevuma Nosaukums</label >
        <input 
          //onChange={(field)=> updateAnswerInput(field.target.value)}
          className="mt3 w-60 br2 input-reset mb3 ba b--black-40 pa2 db "
          type="text"
          aria-describedby="name-desc">
        </input>
        <label className="center f4 fw6 ph0 ">Uzdevums</label >
            <textarea 
              id="comment" 
              name="comment" 
              className="mt2 db border-box hover-black w-100 h4 measure ba b--black-20 pa2 br2 mb2"
              aria-describedby="comment-desc">
             </textarea>
            <label className="center f4 fw6 ph0 mh0 ">Uzdevuma atbilde</label >
          <input 
            //onChange={(field)=> updateAnswerInput(field.target.value)}
            className="mt3 w-60 br2 input-reset mb3 ba b--black-40 pa2 db "
            type="text"
            aria-describedby="name-desc">
          </input>
          <input 
             // onClick={()=>{updateAnswerStatus('pending')}}
              className=" mt4 b br3 pa4 pv2 db input-reset  ba b--dark-red bg-transparent pointer  f4 " 
              type="submit" 
              value="Pievienot uzdevumu">
            </input> 
          </form>
        
      </div>
        <div className="w-30 relative h5">
          <div className="mt4  ">
      <h3 className="f3 b db mb2 mh4 red">Tēmu izvēkne</h3>
      
      <ul className="list f4">
        <li >task1</li>
        <li >task 2</li>
        <li>task 3</li>
        <li>Golf balls</li>
      </ul>
      

    </div>
        </div>
      
    
      </div>
  )
}


export default Taskinput

