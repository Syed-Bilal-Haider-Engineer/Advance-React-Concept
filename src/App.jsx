import {useRef, useState} from 'react';
import './App.css';
import Modal from './component/Portal/modal';
import Input from './component/Ref/Input';
import DialogModel from './component/Models/DialogModel';
import {ErrorBoundary} from './component/ErrorBoundaries/ErrorBoundry';
import Counter from './component/Keys/Counter';

function App() {
  const [modal, isModal] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const inputRef = useRef();

  const openModel = () => {
    isModal((prev) => !prev);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <button onClick={() => isModal(true)}>Click now</button>
      <Input ref={inputRef} placeholder="type user" />
      {modal && (
        <ErrorBoundary fallback={<h1>Children error</h1>}>
          <Modal>
            <button onClick={openModel}>
              <span className="close">&times;</span>
            </button>
          </Modal>
        </ErrorBoundary>
      )}

      <DialogModel isOpen={isOpen} onClose={onClose}>
        <p>Dialog modal</p>
        <button id="closeModal" onClick={onClose}>
          Close modal
        </button>
      </DialogModel> */}
      {isCheck ? <Counter title="First Counter" key="first" /> : <Counter title="second counter" key="second"/>}
      <button
        onClick={() => setIsCheck((prev) => !prev)}
        style={{margin: '10px'}}
      >
        Switch
      </button>
    </>
  );
}

export default App;
