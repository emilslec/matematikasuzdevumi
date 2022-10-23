import React, { useState} from 'react';
import Homepage from './Homepage/Homepage';
import Signinpage from './Signinpage/Signinpage';
import Taskpage from './Taskpage/Taskpage';
import Basepage from './Basepage/Basepage'


import './App.css';


const App = () => {

  const [user, updateUser] = useState("");
  const [path, updatePath] = useState('home');
  return !user ?
      <div className="signinp h-100">
        <Signinpage updatePath={updatePath} updateUser={updateUser}/>
      </div> 
    :
    <div className="homep h-100">
      {
        path==='home' && <Homepage user={user} updatePath={updatePath}/>
      }
      {
        path==='task' && <Taskpage  user={user} className="signinp" updatePath={updatePath} updateUser={updateUser}/>
      }
      {
        path==='base' && <Basepage user={user} updatePath={updatePath} updateUser={updateUser}/>
      }
    </div>
}

export default App;
