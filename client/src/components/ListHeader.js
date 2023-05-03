import Modal from "./Modal";
import { useState } from "react";

const ListHeader = ({
  listName,
  getData,
}) => {
  const [showModal, setShowModal] =
    useState(false);

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
      </div>

      {showModal && (
        <Modal
          mode={"create"}
          setShowModal={setShowModal} //confused
          getData={getData}
        />
      )}
    </div>
  );
};

export default ListHeader;
