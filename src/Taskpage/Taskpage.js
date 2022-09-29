import React,{} from 'react';

import Leftside from './Leftside/Leftside';
import Middleside from './Middleside/Middleside';
import Rightside from './Rightside/Rightside';




import './Taskpage.css'


const Taskpage = ({updateSignedIn, updatePath}) => {

  return (
    <div className="container">
        <div className=" ">
          <Leftside />
        </div>
        <div className=" pa2">
          <Middleside />
        </div>
        <div className=" pa2">
          <Rightside updateSignedIn={updateSignedIn} updatePath={updatePath}/>
        </div>
    </div>

  );
}

export default Taskpage;