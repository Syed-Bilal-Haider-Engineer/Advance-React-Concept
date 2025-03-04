import { useRef, useState } from 'react';
import './App.css';
import Modal from './component/Portal/modal';
import Input from './component/Ref/Input';
import DialogModel from './component/Models/DialogModel';

function App() {
  const [modal, isModal] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const inputRef = useRef();

  const openModel = () => {
    isModal((prev) => !prev);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Click now</button>
      {modal && (
        <Modal>
          <button onClick={openModel}>
            <span className="close">&times;</span>
          </button>
        </Modal>
      )}
      <Input ref={inputRef} placeholder="type user" />
      <DialogModel isOpen={isOpen} onClose={onClose}>
        <p>Dialog modal</p>
        <button id="closeModal" onClick={onClose}>Close modal</button>
      </DialogModel>
    </>
  );
}

export default App;
