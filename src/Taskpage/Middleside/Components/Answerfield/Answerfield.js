import React from 'react';


const Answerfield = () => {
  return (
    <div className="">
      <label className="center f4 fw6 ph0 mh0 ">Atbilde :</label >
      <input 
        //onChange={(field)=> updateSearchField(field.target.value)}
        className="mt3  input-reset ba b--black-20 pa2  db "
        type="text"
        aria-describedby="name-desc">
      </input>
    </div>
  )
}


export default Answerfield

