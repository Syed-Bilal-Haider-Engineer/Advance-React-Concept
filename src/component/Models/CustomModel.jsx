import React, {useEffect} from 'react';
import '../Portal/modal.css';
function CustomModel({isOpen, children, isClose}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        isClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isClose]);

  if (!isOpen) return null;
  return (
    <div id="myModal" className={`modal ${isOpen && 'show'} `}>
      <div className="modal-content">{children}</div>
    </div>
  );
}

export default CustomModel;
