const express = require("express");
const app = expres();
const port = process.env.PORT || 8080;
const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${port}`);
});
