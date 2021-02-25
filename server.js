const express = require('express');
const app = express();
const path = require('path');
const db  = require('./data/db')
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// LINK HTML PATHS//

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});









// ================LISTENER===================//

app.listen(PORT, () =>
{
    console.log(`API server now on port ${PORT}!`);
})
