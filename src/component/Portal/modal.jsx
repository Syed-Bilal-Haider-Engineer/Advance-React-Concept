import React, { useEffect } from 'react'
import './modal.css';
import { createPortal } from 'react-dom'

function Modal({children}) {
  const model_root = document.getElementById('model-root');
  
  return createPortal(
    <div id="myModal" className="modal">
    <div className="modal-content">
        {children}
    </div>
    <button type='submit' onSubmit={onSubmit}>Submit</button>
  </div>,
  model_root
  )
}

export default Modal