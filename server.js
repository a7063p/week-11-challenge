const express = require('express');
const app = express();
app.listen(3001, () =>
{
    console.log('API server now on port 3001!');
})
const db  = require('./data/db')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/api/db', (req,res) => {
    let results = db
    console.log(req.query)
    res.json(results)
});
