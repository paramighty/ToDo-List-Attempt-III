const PORT = process.env.PORT ?? 8000;
const express = require("express");
const pool = require("./db");

const app = express(); //So, app has all the methods and properties now

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

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});
