import React from 'react';
import 'mathlive';

const Try = () => {
    
    let a = "\\frac{\\pi}{2}"
    window.addEventListener('DOMContentLoaded', () => 
      import('//unpkg.com/mathlive?module').then((mathlive) => 
        mathlive.renderMathInDocument()
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if(document.getElementById("mf")){

        document.getElementById("mf").setOptions({
            virtualKeyboardMode: "manual",
            virtualKeyboards: "numeric symbols"
        });
    }
    return(
        <>
        <div>
         <math-field id="mf" virtual-keyboard-mode="manual">{a}</math-field>
        </div>

        </>
    )
}

export default Try;


