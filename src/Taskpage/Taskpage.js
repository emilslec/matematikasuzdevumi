import React, {useState} from 'react';

import Leftside from './Leftside/Leftside';
import Middleside from './Middleside/Middleside';
import Rightside from './Rightside/Rightside';




import './Taskpage.css'



const Taskpage = ({updateSignedIn, updatePath}) => {
  const [activeTheme, updateActiveTheme] = useState('');
  const [activeTaskName, updateActiveTaskName] = useState('');

  return (
    <div className="container">
        <div className=" ">
          <Leftside activeTheme={activeTheme} updateActiveTheme={updateActiveTheme} updateActiveTaskName={updateActiveTaskName}/>
        </div>
        <div className=" pa2">
          <Middleside activeTheme={activeTheme} activeTaskName={activeTaskName} updateActiveTaskName={updateActiveTaskName} updateActiveTheme={updateActiveTheme}/>
        </div>
        <div className=" pa2">
          <Rightside updateSignedIn={updateSignedIn} updatePath={updatePath}/>
        </div>
    </div>

  );
}

export default Taskpage;