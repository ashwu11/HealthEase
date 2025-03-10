// followed https://www.sitepoint.com/mediastream-api-record-audio/

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '');
  },
  filename(req, file, cb) {
    // const fileNameArr = file.originalname.split('.');
    // cb(null, `${Date.now()}.${fileNameArr[fileNameArr.length - 1]}`);
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.use(express.static('public/assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });

app.use(express.static('uploads'));

app.post('/record', upload.single('audio'), (req, res) => res.json({ success: true }));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});