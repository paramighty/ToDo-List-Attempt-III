const PORT = process.env.PORT ?? 8000;
const express = require("express");
const pool = require("./db");
const cors = require("cors");

const app = express(); //So, app has all the methods and properties now

app.use(cors());
//Get stuff
app.get("/", (req, res) => {
  res.send("Seems to be working");
});

app.get(
  "/todos/:userEmail",
  async (req, res) => {
    const userEmail =
      req.params.userEmail;
    //"give me the value of the 'userEmail' key from the params object inside the req object,
    // and assign it to a constant variable named userEmail"
    //Destructure it by doing { userEmail } = req.params when we have more params.

    console.log(userEmail);

    try {
      const todos = await pool.query(
        "SELECT * FROM todos WHERE user_email = $1",
        [userEmail]
      );
      res.json(todos.rows);
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
