const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  const env = {
    APP_NAME: process.env.APP_NAME,
    LOG_LEVEL: process.env.LOG_LEVEL,
  };

  res.json({
    message: "Hello from Node js, Environment Variables",
    env: env,
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
