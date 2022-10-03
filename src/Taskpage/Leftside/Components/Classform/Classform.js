import React,{useState} from 'react';
import './Classform.css'

const Classform = ({classs, themes, updateActiveTheme}) => {

  const [show, updateShow] = useState(false);
  return (
	  <div className="mt4">
      <h3 onClick={() => updateShow(!show) } className="f4 b db mb2 mh4   blue">{classs}. Klase</h3>
      {show &&
        <ol className="">
        {themes.map((theme, i) => {
              return (
                  <li
                    className="w-10"
                     key={i}
                     onClick={()=> updateActiveTheme(theme)}
                  >
                     {theme} 
                  </li>
              );
            })
          
        }
        </ol>
      }
    </div>
	)

}


export default Classform