import { useState } from "react";
import Modal from "./Modal";

const ListItem = ({ task }) => {
  const [showModal, setShowModal] =
    useState(false);
  return (
    <li className="list-item">
      <div className="info-container">
        <p className="task-title">
          {task.title}
        </p>
        <div className="button-container">
          <button
            className="edit"
            onClick={() =>
              setShowModal(true)
            }
          >
            EDIT
          </button>
          <button className="delete">
            DELETE
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          mode={"edit"}
          setShowModal={setShowModal}
          task={task}
        />
      )}
    </li>
  );
};

export default ListItem;
