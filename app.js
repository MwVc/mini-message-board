const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const indexRouter = require("./routes/indexRouter");

app.use(express.urlencoded({ extended: true }));

// ejs application properties
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
