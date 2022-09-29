import React, { useState} from 'react';
import Homepage from './Homepage/Homepage';
import Signinpage from './Signinpage/Signinpage';
import Taskpage from './Taskpage/Taskpage';


import './App.css';


const App = () => {

  const [signedIn, updateSignedIn] = useState(false);
  const [path, updatePath] = useState('home');

  return !signedIn ?
      <div className="signinp h-100">
        <Signinpage updatePath={updatePath} updateSignedIn={updateSignedIn}/>
      </div> 
    :
    <div className="homep h-100">
      {
        path==='home' && <Homepage updatePath={updatePath}/>
      }
      {
        path==='task' && <Taskpage className="signinp" updatePath={updatePath} updateSignedIn={updateSignedIn}/>
      }
    </div>
}

export default App;
