const PORT = process.env.PORT ?? 8000;
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const pool = require("./db");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express(); //So, app has all the methods and properties now

app.use(cors());
app.use(express.json());

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

//create a new todo

app.post("/todos", async (req, res) => {
  const { user_email, title, date } =
    req.body;
  console.log(user_email, title, date);
  const id = uuidv4();
  try {
    const newTodo = await pool.query(
      `INSERT INTO todos(id, user_email, title, date) VALUES($1, $2, $3, $4)`,
      [id, user_email, title, date]
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
    const { user_email, title, date } =
      req.body;
    try {
      const editTodo = await pool.query(
        "UPDATE todos SET user_email = $1, title = $2, date = $3 WHERE id = $4;",
        [user_email, title, date, id]
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

// signup

app.post(
  "/signup",
  async (req, res) => {
    const { email, password } =
      req.body;

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword =
      bcrypt.hashSync(password, salt);

    try {
      const signUp = await pool.query(
        `INSERT INTO users (email, hashed_password) VALUES($1, $2)`,
        [email, hashedPassword]
      );

      const token = jwt.sign(
        { email },
        "secret",
        {
          expiresIn: "1hr",
        }
      );

      res.json({ email, token });
    } catch (error) {
      console.error(error);

      if (error) {
        res.json({
          detail: error.detail,
        });
      }
    }
  }
);

//login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
  } catch (error) {
    console.error(error);
    if (error) {
      res.json(error);
    }
  }
});

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});
