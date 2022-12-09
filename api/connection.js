const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost:27017/e-comm", { useNewUrlparser: true })
//   .then(() => console.log("connected to mongodb"))
//   .catch((err) => console.log(err));

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));
mongoose.connection.on("error", (err) => {
  console.log(err);
});
