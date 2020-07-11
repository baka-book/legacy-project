const express = require("express");
const router = express.Router();
const multer = require("multer");
const { pathToFileURL } = require("url");
const path = require("path");

const storage = multer.diskStorage({
  destination: "../src/assets/img/theme/",
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
  //  fileFilter: function(req, file, cb){
  //  checkFileType(file, cb);
  //  }
});



router.post("/", upload.single("myFile"), (req, res, next) => {
  if (req.file == undefined) {
    console.log("no file selected");
  } else {
    console.log(`./uploads/${req.file.filename}`);
    //  res.sendFile(`../uploads/myFile-1594290416928.jpg`)
    let myPath = req.file.filename;
    res.send({myPath:myPath});
  }
});

module.exports = router;
