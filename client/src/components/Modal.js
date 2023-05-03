import { useState } from "react";

const Modal = ({
  mode,
  setShowModal,
  getData,
  task,
}) => {
  let editMode;
  if (mode === "edit") {
    editMode = true;
  } else {
    editMode = false;
  }

  const [data, setData] = useState({
    title: editMode ? task.title : null,
    date: editMode
      ? task.date
      : new Date(),
  });

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.status === 200) {
        console.log("worked");
        setShowModal(false);
        getData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos/${task.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.status === 200) {
        setShowModal(false);
        getData();
      }
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
            onClick={
              editMode
                ? editData
                : postData
            }
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
