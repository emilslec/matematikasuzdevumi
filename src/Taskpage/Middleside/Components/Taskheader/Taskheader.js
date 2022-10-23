import React from 'react';


const Taskheader = ({theme, activeTheme}) => {
  return (
    <div className="mt3 measure center">
      <div className="f2 mb3 tc fw6 ph0 mh0">{theme}</div >
      <div className="f4 fw6 ph0 mh0">{activeTheme.theme_name} - {activeTheme.theme_class}. Klase</div >
    </div>
  )

}


export default Taskheader

