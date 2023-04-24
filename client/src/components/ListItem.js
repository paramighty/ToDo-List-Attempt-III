const ListItem = ({ task }) => {
  return (
    <li className="list-item">
      <div className="info-container">
        <p className="task-title">
          {task.title}
        </p>
        <div className="button-container">
          <button className="edit">
            EDIT
          </button>
          <button className="delete">
            DELETE
          </button>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
