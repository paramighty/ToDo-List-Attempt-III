const ListHeader = ({ listName }) => {
  const signOut = () => {
    console.log("signout"); //this is for later to cover
  };
  return (
    <div className="list-header">
      <h1> {listName}</h1>
      <div className="button-container">
        <button className="new-task">
          ADD NEW TASK
        </button>
        <button
          className="sign-out"
          onClick={signOut}
        >
          I'M OUT
        </button>
      </div>
    </div>
  );
};

export default ListHeader;
