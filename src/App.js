import React, { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Signinpage from './Signinpage/Signinpage';
import Taskpage from './Taskpage/Taskpage';
import Basepage from './Basepage/Basepage';
import Problem from './Homepage/Components/Problem';


import './App.css';


const App = () => {

  const [user, updateUser] = useState("");
   
  return( 
      <>
        <Routes >
          <Route path="/*" element={<Signinpage user={user}  updateUser={updateUser}/>} />
          <Route path="/homepage" element={<Homepage updateUser={updateUser}  user={user} />} />
          <Route path="/taskadd/*" replace element={<Basepage user={user}  updateUser={updateUser}/>} />
          <Route path="/tasks" element={<Taskpage  user={user} className="signinp"  updateUser={updateUser}/>} />
        </Routes>
        <Problem />
      </>
      )
   
}

export default App;
