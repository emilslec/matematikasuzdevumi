import React,{} from 'react';
import Classform from '../Classform/Classform';
import Activetasks from '../Activetasks/Activetasks';


const Tasklist = ({activeTheme, updateActiveTheme, tasks, updateActiveTask, themes}) => {
  const classes = [1,2,3,4, 5, 6, 7, 8, 9, 10 ,11, 12];
  
  const FindThemes = (int) => {
    if(!themes){
      return [];
    }
    let thm = [];
    themes.forEach((theme) => {
      if(theme.theme_class === int) {
        thm.push([theme.theme_name, theme.theme_id])
      }
    })
    return thm;
  } 
    return(
      <div className="flex">
        <div className="w-50">
        {
            classes.map((classs, i) => {
              return (
                  <Classform key={i} 
                    classs={classs} 
                    updateActiveTheme={updateActiveTheme}
                    themes={FindThemes(i+1)}
                  />
              );
            })
        }
        </div>
        <div className="w-50">
          <Activetasks activeTheme={activeTheme} tasks={tasks} updateActiveTask={updateActiveTask}/>
        </div>
    </div>
  );
}


export default Tasklist