const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.render('index.html');
});

router.post('/upload', (req, res)=>{
    res.send('Subido');
});

module.exports = router;