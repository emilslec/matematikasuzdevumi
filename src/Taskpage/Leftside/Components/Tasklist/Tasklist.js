import React,{} from 'react';
import Classform from '../Classform/Classform';
import Activetasks from '../Activetasks/Activetasks';


const Tasklist = ({activeTheme, updateActiveTheme}) => {

  const classes = [1,2,3,4];
  const themes= [["abols", "maize", "fortnite", "pupg mobile"], ["janis", "pecha", "fortnite", "pupg mobile"], ["aaa"], ["ijust dont know mens", 'hahaha']];
  
  
  
    return(
      <div className="flex">
        <div className="w-50">
        {
            classes.map((classs, i) => {
              return (
                  <Classform key={i} 
                    classs={classs} 
                    updateActiveTheme={updateActiveTheme}
                    themes={themes[i]}
                  />
              );
            })
        }
        </div>
        <div className="w-50">
          <Activetasks activeTheme={activeTheme}/>
        </div>
    </div>
  );
}


export default Tasklist