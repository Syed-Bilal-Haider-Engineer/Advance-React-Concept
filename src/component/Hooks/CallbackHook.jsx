import React, { useCallback, useEffect, useRef, useState } from 'react'

function RefHook() {
    const [isHide,isSetHide] = useState(false);
    const isRef = useRef();

    useEffect(() => {
        if(isRef.current){
         isRef.current.focus();
        }
  
    },[isHide])
  return (
    <div>
        <button onClick={() => isSetHide((pre) => !pre)}> Toggle</button>
        { isHide && <input type="text" ref={isRef}/> }
    </div>
  )
}


import React, { useEffect, useRef, useState } from 'react'

function CallbackHook() {
    const [isHide,isSetHide] = useState(false);
    const isRef = useRef();

    const isInput = useCallback((input) => {
      if(isInput === null) return;
      input.focus()
    },[])
    useEffect(() => {
        if(isRef.current){
         isRef.current.focus();
        }
  
    },[isHide])
  return (
    <div>
        <button onClick={() => isSetHide((pre) => !pre)}> Toggle</button>
        { isHide && <input type="text" ref={isInput}/> }
    </div>
  )
}

export default CallbackHook;