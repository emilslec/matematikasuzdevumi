import React from 'react';


const Choicedotask = ({updatePath}) => {
  return (
    <div className="bg-transparent mt5 w-60 tc center flex-column flex">
      <div className="h5 mv3">
        <h1 className="f1 gold f2-m fw2 mt5 black-90 ">
          Izvēle
        </h1>
      </div>
      <div className="h4">
      </div>
      <div className="f5 f4-m f3-l fw2  black-50 mv3 lh-copy">
        <input
           onClick={(a)=> updatePath('task')}
           className="pa3 b--dark-blue ph6 br1 ba bg-transparent tc  b--grey"
           type="submit"
           value="    Sākt pildīt uzdevumus    "
          >
        </input>
      </div>
      <div className="f5  f4-m  f3-l fw2  black-50 mv3 lh-copy">
        <input
           onClick={()=> updatePath('base')}
           className="pa3 b--dark-blue br1 center ph6  ba bg-transparent tc  b--grey"
           type="button"
           value="Pievienot savus uzdevumus"
           >
        </input>
      </div>
    </div>
  )
}

export default Choicedotask

