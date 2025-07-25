const express = require('express');
const multer = require('multer');
const path = require('path');
const { createVideo } = require('../controllers/videoController');

const router = express.Router();


// Multer setup
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });


// Create Video route with local upload (video + thumbnail)

router.post('/', upload.fields([
    {name: "video", maxCount: 1},
    {name: "thumbnail", maxCount: 1}
]), createVideo
);



module.exports = router;