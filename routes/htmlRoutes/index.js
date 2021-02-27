const path = require('path');
const router = require('express').Router();


// LINK HTML PATHS and GET Request//
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));        
});

router.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('/api/notes', (req,res)=>{
    res.sendFile(path.join(__dirname, '../../data/notes.json'));
 });

 module.exports = router;
 