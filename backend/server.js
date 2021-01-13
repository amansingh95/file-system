
const express = require('express');

const fileRoutes = require('./routes/filesRoutes');

const app = express();
app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Api is running Haahaa");
  });

  app.use("/api/files", fileRoutes);

app.listen(
  5000,
  console.log(
    `Server running on port 5000`
  )
);
