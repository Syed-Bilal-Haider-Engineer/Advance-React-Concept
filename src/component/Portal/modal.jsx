import React from 'react'
import './modal.css';
import { createPortal } from 'react-dom';

function Modal({children}) {
   const id = document.getElementById('react-portal')
  return createPortal(
  <div id="myModal" className="modal">
    <div className="modal-content">
        {children}
    </div>
  </div>, id
  )

}

export default Modal