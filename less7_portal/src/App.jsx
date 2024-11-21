import { Fragment, useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(!open);

  return (
    <Fragment>
      <h2>App Component</h2>
      <button onClick={() => setOpen(!open)}>Show Modal</button>
      <Modal open={open} closeModal={closeModal}>
        <h2>Info from modal window</h2>
      </Modal>
    </Fragment>
  );
}

export default App;
