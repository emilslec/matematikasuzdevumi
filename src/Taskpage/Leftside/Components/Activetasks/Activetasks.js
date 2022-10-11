import React from 'react';
//import './Classform.css'

const Classform = ({activeTheme, updateActiveTaskName}) => {

  return (
	  <div className="mt4  ">
      <h3 className="f4 b db mb2 mh4 red">{activeTheme}</h3>
      
      <ul className="list ">
        <li onClick={() => updateActiveTaskName('task1')}>task1</li>
        <li onClick={() => updateActiveTaskName('task2')}>task 2</li>
        <li>task 3</li>
        <li>Golf balls</li>
      </ul>
      

    </div>
	)

}


export default Classform