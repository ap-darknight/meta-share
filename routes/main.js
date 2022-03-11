const router = require('express').Router();
const File = require('../models/file');

router.get('/', (req, res) => {
   res.send("META - SHARE --- FOUND!");
});


module.exports = router;