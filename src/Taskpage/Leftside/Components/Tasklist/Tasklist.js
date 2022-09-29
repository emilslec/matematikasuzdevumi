import React,{useState} from 'react';
import Classform from '../Classform/Classform';

const Tasklist = () => {

  const classes = [1,2,3,4,5];
  const [activeClasses, updateActiveClasses] = useState([]);
  
    return(
      <div>
       {
          classes.map((classs, i) => {
            return (
              <Classform key={i} activeClasses={activeClasses} updateActiveClasses={updateActiveClasses} classs={classs} />
            );
          })
       }
      </div>
    );
	

}


export default Tasklist