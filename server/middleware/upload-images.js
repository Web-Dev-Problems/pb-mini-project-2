require("dotenv").config()
const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
var storage = new GridFsStorage({
  url: `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ex86f.mongodb.net/Project-Beam?retryWrites=true&w=majority`,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    console.log("Logging req, file", file)
    const match = ["image/png", "image/jpeg"];
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-bezkoder-${file.originalname}`;
      return filename;
    }
    return {
      bucketName: "images",
      filename: `${Date.now()}-bezkoder-${file.originalname}`,
      contentType: `${file.mimetype}`
    };
  }
});
var uploadFiles = multer({ storage: storage }).any("images");
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;