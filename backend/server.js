const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");
const config = require("config");
const helmet = require("helmet");
const http = require("http");
const cors = require("cors")

//DB config
const db = config.get("MONGO_URI");
const app = express();
const cors = require("cors");

// set a bunch of http headers on the site and secure them prevent click jacking
app.use(helmet());

app.use(cors())


const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`server is running on port ${PORT}`));
app.get("./routes/api/users", (req, res) => {
  console.log("hello from 8080");
});

const addUser = require("./routes/api/users");
const authenticateUser = require("./routes/api/auth");
const blogpost = require("./routes/api/blog");
const profileImg = require("./routes/Profileimg");
//************************************ */
// ************mongod DB*************
mongoose
  .connect(db || "mongodb://localhost/Identification", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongoose is connected"))
  .catch((err) => console.log(err));

// mongoose.connection.on("connected", () => {
//   console.log("mongoose is connected");
// });
//data parsing
app.use(express.json());
app.use(express.urlencoded( {extended: false }));
//********************* */
//*******routes******** */
app.use(morgan('dev'));
app.use(morgan("tiny"));
//Use routes
app.use("/api/users", addUser);
app.use("/api/auth", authenticateUser);
app.use("/api/blog", blogpost);

app.use("/uploade", profileImg);
app.listen(PORT, console.log(`server is running on port ${PORT}`));

