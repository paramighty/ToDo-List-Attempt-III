import ListHeader from "./components/ListHeader";
import {
  useEffect,
  useState,
} from "react";
import ListItem from "./components/ListItem";

const App = () => {
  const [tasks, setTasks] =
    useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos/`
      );
      const json =
        await response.json();
      setTasks(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(tasks);

  const sortedTasks = tasks?.sort(
    (a, b) =>
      new Date(b.date) -
      new Date(a.date)
  );

  return (
    <div className="app">
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
    </div>
  );
};

export default App;
