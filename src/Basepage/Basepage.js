import React,{useState} from 'react';

import Taskinput from './Components/Taskinput';
import Themeselection from './Components/Themeselection';
import Buttons from './Components/Buttons';

//import './Homepage.css'


const Basepage = ({updatePath, updateSignedIn}) => {

  const [taskId, updateTaskId] = useState('');

  return (
    <div className="flex">
      <div className="flex h6 w-70">
        <div className="w-70">
          <Taskinput taskId={taskId}/>
        </div>
        <div className="mt5">
          <Themeselection taskId={taskId} updateTaskId={updateTaskId}/>
        </div>
      </div>
      <div className="w-30">
        <Buttons updatePath={updatePath} updateSignedIn={updateSignedIn}/>
      </div>
    </div>
  );
}

export default Basepage;