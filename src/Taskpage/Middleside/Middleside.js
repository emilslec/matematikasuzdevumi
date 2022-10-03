import React from 'react';
import Taskfield from './Components/Taskfield/Taskfield';
import Taskheader from './Components/Taskheader/Taskheader';
import Answerfield from './Components/Answerfield/Answerfield';
import Submitanswer from './Components/Submitanswer/Submitanswer';
import Showanswer from './Components/Showanswer/Showanswer';


import './Middlepage.css'


const Leftside = () => {

  return (
    <div>
     <Taskheader />
      <Taskfield />
      <div className="container2">
        <Answerfield />
        <Submitanswer />
        <Showanswer />
      </div>
    </div>
  );
}

export default Leftside;