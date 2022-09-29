import React from 'react';


const Searchtask = () => {
  return (
    <div className="tc center mt4 measure ">
       <label  className="center f3 fw6 ph0 mh0 ">Meklēt tēmas :</label >
       <input 
        className="mt3 w-100 input-reset ba b--black-20 pa2 mb2 db "
        type="text"
        aria-describedby="name-desc"></input>
    </div>
  )

}


export default Searchtask

