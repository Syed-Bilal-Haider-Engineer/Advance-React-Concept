import {useRef, useState, useLayoutEffect} from 'react';
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

const [width, setWidth] = useState(0);
const boxRef = useRef(null);

useLayoutEffect(() => {
  if (boxRef.current) {
    const rect = boxRef.current.getBoundingClientRect();
    setWidth(rect.width);
  }
}, []);

  return (
   <>
       <button onClick={() => isModal(true)}>Click now</button>
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

      {isOpen && <DialogModel isOpen={isOpen} onClose={onClose}>
        <p>Dialog modal</p>
        <button id="closeModal" onClick={onClose}>
          Close modal
        </button>
      </DialogModel> }
      {isCheck ? <Counter title="First Counter" key="first" /> : <Counter title="second counter" key="second"/>}
      <button
        onClick={() => setIsCheck((prev) => !prev)}
        style={{margin: '10px'}}
      >
        Switch
      </button>
       <div style={{ padding: '20px' }}>
      <h1>useLayoutEffect Example</h1>
      <div
        ref={boxRef}
        style={{
          width: '300px',
          height: '100px',
          backgroundColor: 'lightblue',
          marginBottom: '10px',
        }}
      >
        Resize me!
      </div>
      <p>Box width: {width}px</p>
    </div>
    </>
  );
}

export default App; 

