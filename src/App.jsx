import { useState } from 'react'
import './App.css'
import Modal from './component/modal';
function App() {
  const [modal, isModal] = useState(false)

  const openModel = () => {
    isModal((prev) => !prev)
  }
  return (
    <>
     <button onClick={openModel}>Click now</button>
      {modal && <Modal>
        <button onClick={openModel}>
        <span className="close">&times;</span>
        </button>
        </Modal>}
    </>
  )
}

export default App
