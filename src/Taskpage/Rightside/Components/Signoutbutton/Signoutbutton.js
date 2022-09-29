import React from 'react';


const Signoutbutton = ({updateSignedIn}) => {
  return (
	<div className="">
    <input onClick={() => updateSignedIn(false)} className="fr tc ma2 f6 link dim ba bw1 ph3 pv2 mb2 dib dark-gray" type="submit" value="Sign out"></input>
   </div>
	)

}


export default Signoutbutton