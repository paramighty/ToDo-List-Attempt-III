const PORT = process.env.PORT ?? 8000;
const express = require("express");


const app = express(); //So, app has all the methods and properties now

//Get stuff
app.get("/", (req, res) => {
  res.send("Seems to be working");
});

app.get("/todos", async (req, res) => {
  try { await
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});
