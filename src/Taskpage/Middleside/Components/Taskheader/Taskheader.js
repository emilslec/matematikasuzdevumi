import React from 'react';


const Taskheader = ({theme, path}) => {
  return (
    <div className="mt3 measure center">
      <div className="f2 mb3 tc fw6 ph0 mh0">{theme}</div >
      <div className="f4 fw6 ph0 mh0">{path[0]}</div >
    </div>
  )

}


export default Taskheader

