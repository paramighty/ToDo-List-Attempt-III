import ListHeader from "./components/ListHeader";
import { useEffect } from "react";

const App = () => {
  const getData = async () => {
    const userEmail = "satta@test.com";
    try {
      const response = await fetch(
        `http://localhost:8000/todos/${userEmail}`
      );
      const json =
        await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getData, []);

  return (
    <div className="app">
      <ListHeader
        listName={"Todo-Ticks"}
      />
    </div>
  );
};

export default App;
