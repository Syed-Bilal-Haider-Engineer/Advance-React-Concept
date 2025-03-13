import {useState} from 'react';
import './App.css';
import Modal from './component/Portal/modal';
import CallbackHook from './component/Hooks/CallbackHook';

function App() {
  const [modal, isModal] = useState(false);

  const openModel = () => {
    isModal((prev) => !prev);
  };

  return (
    <>
      {/* <button onClick={() => isModal(true)}>Click now</button>
      {modal && (
        <Modal>
          <button onClick={openModel}>
            <span className="close">&times;</span>
          </button>
          <p style={{fontWeight: 'bold'}}> Advance Topic React Portal</p>
        </Modal>
      )} */}
      <CallbackHook/>
    </>
  );
}

export default App;
