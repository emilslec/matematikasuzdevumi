import React,{useState, useEffect} from 'react';

const Themeselection = ({updateTaskId, taskId}) => {

  const [themes, updateThemes] = useState([]);


  useEffect(() => {
      fetch('http://localhost:3000/themes')
      .then(response => response.json())
      .then(res => updateThemes(res))
    }, [])

  useEffect(() => {
    if(taskId){
      document.getElementById(taskId).classList.add('ba', 'ph2', 'pv1', 'b--green');
      console.log(themes)
      themes.forEach((theme, i) => {
        if(theme.theme_id !== taskId){
          document.getElementById(theme.theme_id).classList.remove('ba');
        }
      })
    }
    }, [taskId])

  const classes = [1,2,3,4, 5, 6, 7, 8, 9, 10 ,11, 12];
    
  const FindThemes = (int) => {
    if(!themes){
      return [];
    }
    let thm = [];
    themes.forEach((theme) => {
      if(theme.theme_class === int) {
        thm.push(theme)
      }
    })
    return thm;
  }

    return(
      <div className="flex ">
        <div className="">
        {
          classes.map((classs, i) => {
              return (
                  <div 
                    classs={classs} 
                    key={i}
                   >

                    <div className="mt4">
                     <h3  className="f5 b di mb2 mh4 pl2  black">{classs}. Klase</h3>
                     { 
                      <ul className="list">
                        {FindThemes(i+1).map((theme, i) => {
                            return (
                              <li
                              className=""
                                id={theme.theme_id}
                                key={i}
                                onClick={()=>{ updateTaskId(theme.theme_id)}}
                              >
                                 {theme.theme_name} 
                              </li>
                            );
                          })
                        
                        }
                      </ul>
                    }
                    </div>
                  </div>
              );
          })
        }
        </div>
        
    </div>
  );
}


export default Themeselection