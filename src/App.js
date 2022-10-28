import React, { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Signinpage from './Signinpage/Signinpage';
import Taskpage from './Taskpage/Taskpage';
import Basepage from './Basepage/Basepage';


import './App.css';


const App = () => {

  const [user, updateUser] = useState("");
  console.log(user)
   
  return( 
        <Routes>
          /<Route path="*" element={<Signinpage user={user}  updateUser={updateUser}/>} />
          <Route path="/home" element={<Homepage user={user} />} />
          <Route path="/kratuve/*" replace element={<Basepage user={user}  updateUser={updateUser}/>} />
          <Route path="/uzdevumi" element={<Taskpage  user={user} className="signinp"  updateUser={updateUser}/>} />
        </Routes>
      )
   
}

export default App;
