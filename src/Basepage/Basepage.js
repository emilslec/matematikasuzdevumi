import React from 'react';

import Introduction from './Components/Introduction';
import Taskinput from './Components/Taskinput';
import Buttons from './Components/Buttons';

//import './Homepage.css'


const Basepage = ({updatePath, updateSignedIn}) => {

  return (
    <div className="flex">
      <div className="cont1  w-70">
        <Introduction className="h3 " />
        <Taskinput className="inpt"/>
      </div>
      <div className="w-30">
        <Buttons updatePath={updatePath} updateSignedIn={updateSignedIn}/>
      </div>
    </div>
  );
}

export default Basepage;