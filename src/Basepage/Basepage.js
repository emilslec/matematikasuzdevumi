import React,{useState} from 'react';

import Taskinput from './Components/Taskinput';
import Themeselection from './Components/Themeselection';
import Buttons from './Components/Buttons';
import { Outlet } from 'react-router-dom';

//import './Homepage.css'


const Basepage = ({updatePath,user,updateUser, email}) => {

  const [taskId, updateTaskId] = useState(0);

  return (
    <div className="flex">
      <div className="flex h6 w-70">
        <div className="w-60">
          <Taskinput user={user} updateUser={updateUser} taskId={taskId}/>
        </div>
        <div className="mt3">
          <Themeselection taskId={taskId} updateTaskId={updateTaskId}/>
        </div>
      </div>
      <div className="w-40">
        <Buttons updatePath={updatePath} updateUser={updateUser}/>
      </div>
      <Outlet/>
    </div>
  );
}

export default Basepage;