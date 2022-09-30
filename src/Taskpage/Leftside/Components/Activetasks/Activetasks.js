import React from 'react';
//import './Classform.css'

const Classform = ({activeTheme}) => {

  return (
	  <div className="mt4  ">
      <h3 className="f4 b db mb2 mh4 blue">{activeTheme}</h3>
      
      <ul className="list ">
        <li>Apples</li>
        <li>Oranges</li>
        <li>Banana</li>
        <li>Golf balls</li>
      </ul>
      

    </div>
	)

}


export default Classform