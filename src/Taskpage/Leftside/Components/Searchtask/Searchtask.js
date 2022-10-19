import React, {useState} from 'react';
import Searchblock from '../Searchblock/Searchblock';



import './Searchtask.css'

const Searchtask = ({updateActiveTheme, themes}) => {

  const [searchField, updateSearchField] = useState('');
  const [showBar, updateShowBar] = useState(true);

  document.addEventListener('click', function handleClickOutsideBox(event) {
  if(event.target.id==='aa'){
    updateShowBar(true)
  }
  else{updateShowBar(false)} });

  const getThemes = () => {
    let arr = [];
    themes.forEach((theme) => {
      arr.push([theme.theme_name, theme.theme_id])
    })
    return arr;
  }
    

  return (
    <div className="tc center mt4 measure relative">
       <label id="nnn" className="nnn center f3 fw6 ph0 mh0 ">Meklēt tēmas :</label >
       
       <div id="aa">
         <input 
         id="aa"
            onChange={(field)=> updateSearchField(field.target.value)}
            onClick={()=>updateShowBar(true)}
            className="mt3 w-100 input-reset ba b--black-20 pa2  db "
            type="text"
            aria-describedby="name-desc">
          </input>
          
            <div className="c o-90 absolute w-100 bg-yellow ph1">
            { showBar &&
              getThemes().filter(theme => {
                return theme[0].toLowerCase().startsWith(searchField.toLowerCase())&&searchField
              })
              .map((theme, i) => {
                  return (
                      <Searchblock 
                        updateActiveTheme={updateActiveTheme}
                        key={i} 
                        theme={theme}
                        updateShowBar={updateShowBar}
                      />
                  );
                })
            }
          </div>
        </div>
    </div>
  )
}



export default Searchtask

