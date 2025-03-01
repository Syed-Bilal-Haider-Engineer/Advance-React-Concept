import React from 'react'

const Input = (props,ref) => {
  return (
    <div>
        <input {...props} ref={ref}/>
    </div>
  )
}

export default React.forwardRef(Input);