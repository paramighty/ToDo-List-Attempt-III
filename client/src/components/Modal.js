import { useState } from "react";

const Modal = ({
  mode,
  setShowModal,
  task,
}) => {
  const editMode =
    mode === "edit" ? true : false;

  const [data, setData] = useState({
    user_email: editMode
      ? task.user_email
      : null,
    title: editMode ? task.title : null,
    date: editMode ? "" : new Date(),
  });

  const postData = () => {
    try {
      fetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value,
    })); //confused af. I know what is it doing
  };
  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>
            Let's {mode} your anxiety!
          </h3>
          <button
            onClick={() =>
              setShowModal(false)
            }
          >
            X
          </button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder="Your task goes here"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <br />
          <input
            className={mode}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
