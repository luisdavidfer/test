const express = require('express');
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});

const app = express();
const PORT = 8000;

app.use(express.static('./'));

app.post('/upload', upload.single('photo'), (req, res) => {
    
//	console.log(req);
if(req.file) {
        res.json(req.file);
    }
   // else throw 'error';
});

app.listen(PORT, () => {
    console.log('Listening at ' + PORT );
});
