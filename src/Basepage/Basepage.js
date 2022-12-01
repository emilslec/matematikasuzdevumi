import React,{useState} from 'react';

import Taskinput from './Components/Taskinput';
import Themeselection from './Components/Themeselection';
import Buttons from './Components/Buttons';
import Introduction from './Components/Introduction';
import { Outlet } from 'react-router-dom';

import './Basepage.css'


const Basepage = ({updatePath,user,updateUser, email}) => {

  const [taskId, updateTaskId] = useState(0);

  return (
    <><div className="w-70 dib h5">
        <Introduction  user={user}/>
      </div>
      <div className="absolute dib" style={{  top:0, right:0}}>
        <Buttons updatePath={updatePath} updateUser={updateUser}/>
      </div>
      
      <div className="flex ml4 h6  w-70 ba b--black-70 sss">
        <div className="w-60 br sss b--black-70">
          <Taskinput user={user} updateUser={updateUser} taskId={taskId}/>
        </div>
        <div className="mt3">
          <Themeselection taskId={taskId} updateTaskId={updateTaskId}/>
        </div>
      </div>
      <Outlet/>
    </>
  );
}

export default Basepage;