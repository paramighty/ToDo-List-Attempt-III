import Modal from "./Modal";
import { useState } from "react";

const ListHeader = ({ listName }) => {
  const [showModal, setShowModal] =
    useState(false);
  const signOut = () => {
    console.log("signout"); //this is for later to cover
  };
  return (
    <div className="list-header">
      <h1> {listName}</h1>
      <div className="button-container">
        <button
          className="new-task"
          onClick={() =>
            setShowModal(true)
          }
        >
          ADD NEW TASK
        </button>
        <button
          className="sign-out"
          onClick={signOut}
        >
          I'M OUT
        </button>
      </div>
      {showModal && (
        <Modal
          mode={"create"}
          setShowModal={setShowModal} //confused
        />
      )}
    </div>
  );
};

export default ListHeader;
