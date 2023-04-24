import ListHeader from "./components/ListHeader";
import Auth from "./components/Auth";
import {
  useEffect,
  useState,
} from "react";
import ListItem from "./components/ListItem";

const App = () => {
  const userEmail = "satta@test.com";
  const [tasks, setTasks] =
    useState(null);
  const authToken = false;

  const getData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`
      );
      const json =
        await response.json();
      setTasks(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (authToken) {
      getData();
    }
  }, []);

  console.log(tasks);

  const sortedTasks = tasks?.sort(
    (a, b) =>
      new Date(b.date) -
      new Date(a.date)
  );

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && (
        <>
          <ListHeader
            listName={"Todo-Ticks"}
            getData={getData}
          />
          {sortedTasks?.map((task) => (
            <ListItem
              key={task.id}
              task={task}
              getData={getData}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
