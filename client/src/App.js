import ListHeader from "./components/ListHeader";
import {
  useEffect,
  useState,
} from "react";
import ListItem from "./components/ListItem";

const App = () => {
  const userEmail = "satta@test.com"; //What is the difference of this being here as opposed to line 7
  const [tasks, setTasks] =
    useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/todos/${userEmail}`
      );
      const json =
        await response.json();
      setTasks(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => getData, []);
  console.log(tasks);

  //Sory by Date

  const sortedTasks = tasks?.sort(
    (a, b) =>
      new Date(b.date) -
      new Date(a.date)
  );

  return (
    <div className="app">
      <ListHeader
        listName={"Todo-Ticks"}
      />
      {sortedTasks?.map((task) => (
        <ListItem
          key={task.id}
          task={task} //confusing.
        />
      ))}
    </div>
  );
};

export default App;
