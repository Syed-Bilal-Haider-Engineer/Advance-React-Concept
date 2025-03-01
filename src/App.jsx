import { useRef, useState } from 'react'
import './App.css'
import Modal from './component/Portal/modal';
import Input from './component/Ref/Input';
function App() {
  const [modal, isModal] = useState(false)
  const inputRef = useRef()

  const openModel = () => {
    isModal((prev) => !prev)
  }

  const onSubmit = () => {
    console.log(inputRef.current.value,"current value")
  }
  return (
    <>
     <button onClick={openModel}>Click now</button>
      {modal && <Modal>
        <button onClick={openModel}>
        <span className="close">&times;</span>
        </button>
      </Modal>}
      <Input ref={inputRef} placeholder="type user"/>
      <button onClick={onSubmit} style={{marginTop:'5px'}}>
        Submit
      </button>
    </>
  )
}

export default App
