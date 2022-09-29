import React,{} from 'react';

import Choisedotask from './Components/Choisedotask/Choisedotask';


//import './Homepage.css'


const Taskpage = ({updatePath}) => {


  return (
    <div >
      <Choisedotask updatePath={updatePath}/>
    </div>
  );
}

export default Taskpage;