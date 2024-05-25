import multer from "multer";
import path from "path";

function checkFileType(file, callback) {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return callback(null, true);
  } else {
    return callback("Error: File type is not supported!");
  }
}

const storage = multer.diskStorage({
  destination: "public/images",
  filename: function (_, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

export const uploadSingle = multer({
  storage,
  limits: { fileSize: 1000000 * 10 }, // max 10 mb
  fileFilter: function (req, file, callback) {
    checkFileType(file, callback);
  },
}).single("coverImage");
