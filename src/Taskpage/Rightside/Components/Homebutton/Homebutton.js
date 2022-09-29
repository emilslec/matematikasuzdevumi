import React from 'react';


const Homebutton = ({updatePath}) => {
  return (
  <div className="">
    <input 
     onClick={() => updatePath('home')}
     className="fr trasparent tc ma2 f6 link dim o-50 ba bw1 ph3 pv2 mb2 dib dark-gray"
     type="submit" 
     value="Home page"></input>
   </div>
  )

}


export default Homebutton