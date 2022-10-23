import React,{useState, useEffect} from 'react';
const Themeselection = ({updateTaskId, taskId}) => {

  const [themes, updateThemes] = useState([{theme_id: 1, theme_name: 'Tēmas nosaukums', theme_class: 'Klase'}]);
  const [show, updateShow] = useState([true,true,true,true,true,true,true,true,true,true,true,true]);

  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('http://localhost:3000/themes', { signal })
    .then(response => response.json())
    .then(themess => updateThemes(themess))
    .catch(err => {
      if(err.name === "AbortError"){
      }
      else(console.log(err))
    })
      

    return () => {controller.abort();
    }
  },[]);

  useEffect(() => {
    if(taskId){
      document.getElementById(taskId).classList.add('ba', 'pr2', 'tc', 'b--green');
      themes.forEach((theme, i) => {
        if(theme.theme_id !== taskId&&document.getElementById(theme.theme_id)){
          document.getElementById(theme.theme_id).classList.remove('ba', 'pr2', 'tc', 'b--green')
        }
      })
    }// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [taskId])

  const classes = [1,2,3,4, 5, 6, 7, 8, 9, 10 ,11, 12];
    
  const ShowWitch = (ind) => {
    let arr = [];
    show.forEach((value, i) => {
      if(i===ind){
        arr.push(!value)
      }
      else{
        arr.push(value) 
      }
    })
    updateShow(arr)
  }

    return(
        <div className="">
        <h3> Izvēlies kurai klasei pievienot uzd</h3>
        {
          classes.map((classs, i) => {
              return (
                <div key={i} className="mt3">
              <h3 onClick={() => ShowWitch(i)}  className="f5 b pointer mv2 ml1   black">{classs}. Klase</h3>
                  {show[i] &&
                  themes.filter(theme => {
                      return theme.theme_class === classs
                  }).map((theme, i) => {
                      return (
                         <div
                            className="pr2 pointer pv1"
                              id={theme.theme_id}
                              key={i}
                              onClick={()=>{ updateTaskId(theme.theme_id)}}
                             >
                              {theme.theme_name} 
                            </div>
                          );
                        })       
                  }
        </div>     
              );
          })
        }
        </div>
  );
}


export default Themeselection