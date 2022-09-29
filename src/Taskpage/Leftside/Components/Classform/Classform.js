import React,{useState} from 'react';
import './Classform.css'

const Classform = ({classs}) => {

  const [show, updateShow] = useState(false);
  return (
	  <div className="mt4  ">
      <h3 onClick={() => updateShow(!show) } className="f4 b db mb2 mh4   blue">{classs}. Klase</h3>
      {show &&
        <ol className="">
          <li>Apples</li>
          <li>Oranges</li>
          <li>Banana</li>
          <li>Golf balls</li>
        </ol>
      }
    </div>
	)

}


export default Classform