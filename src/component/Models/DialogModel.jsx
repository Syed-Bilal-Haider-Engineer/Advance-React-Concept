import React, {useEffect, useRef} from 'react';
import '../Portal/modal.css';
function DialogModel({isOpen, onClose, children}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog == null) return null;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog == null) return null;

    document.addEventListener('close', onClose);

    return () => {
      document.removeEventListener('close', onClose);
    };
  }, [onClose]);

  return (
    <dialog id="modal" ref={dialogRef} className={`modal dialog_modal'} `}>
      <div className="modal-content">{children}</div>
    </dialog>
  );
}

export default DialogModel;
