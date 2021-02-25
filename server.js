const express = require('express');
const app = express();
const path = require('path');
const db  = require('./data/db')

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

app.listen(3001, () =>
{
    console.log('API server now on port 3001!');
})
