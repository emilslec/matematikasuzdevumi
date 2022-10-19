import React from 'react';
//import './Searchblock.css';

const Searchblock = ({theme, updateActiveTheme, updateShowBar}) => {

  console.log(theme)
  return (
    <div 
      
      onClick={()=>{ updateActiveTheme(theme); updateShowBar(false)}}
      className="ba  pv1 b--black-50 mv1"
    >
      {theme[0]}
      
    </div>
  )
}


export default Searchblock
