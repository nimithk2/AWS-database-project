const express = require("express");
const cors = require("cors");
const generalRoutes = require("./routes/generalRoutes");
const searchRoutes = require("./routes/searchRoutes");
const insertRoutes = require("./routes/insertRoutes");
const deleteRoutes = require("./routes/deleteRoutes");
const updateRoutes = require("./routes/updateRoutes");

const port = 3000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use("/", generalRoutes);
app.use("/", searchRoutes);
app.use("/", insertRoutes);
app.use("/", deleteRoutes);
app.use("/", updateRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
