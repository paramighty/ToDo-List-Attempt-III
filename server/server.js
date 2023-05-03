const PORT = process.env.PORT ?? 8000;
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const pool = require("./db");
const cors = require("cors");

const app = express(); //So, app has all the methods and properties now

app.use(cors());
app.use(express.json());

//Get stuff
app.get("/", (req, res) => {
  res.send("Seems to be working");
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await pool.query(
      "SELECT * FROM todos"
    );
    res.json(todos.rows);
  } catch (error) {
    console.error(error);
  }
});

//create a new todo

app.post("/todos", async (req, res) => {
  const { title, date } = req.body;
  console.log(title, date);
  const id = uuidv4();
  try {
    const newTodo = await pool.query(
      `INSERT INTO todos(id, title, date) VALUES($1, $2, $3)`,
      [id, title, date]
    );
    res.json(newTodo);
  } catch (error) {
    console.error(error);
  }
});

//edit a new todo

app.put(
  "/todos/:id",
  async (req, res) => {
    const { id } = req.params;
    const { title, date } = req.body;
    try {
      const editTodo = await pool.query(
        "UPDATE todos SET title = $1, date = $2 WHERE id = $3;",
        [title, date, id]
      );
      res.json(editTodo);
    } catch (error) {
      console.error(error);
    }
  }
);

//delete a todo

app.delete(
  "/todos/:id",
  async (req, res) => {
    const { id } = req.params;

    try {
      const deleteTodo =
        await pool.query(
          "DELETE FROM todos WHERE id = $1;",
          [id]
        );
      res.json(deleteTodo);
    } catch (error) {
      console.error(error);
    }
  }
);

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});
