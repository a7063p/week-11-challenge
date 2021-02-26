
// REQUIRED//
const express = require('express');
const fs = require('fs');
const {notes}  = require('./data/notes')
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;
const uniqid = require('uniqid');

// ===================================//

// PARSE DATA//
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// =========================================//


function createNewNote(body, notesArray) {
    const note = body    
    notes.push(note)
    fs.writeFileSync(
        path.join(__dirname, './data/notes.json'),
        JSON.stringify({ notesArray: notes }, null, 2)
    );  
   
    return note
};

// LINK HTML PATHS//
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    console.log(notes);    
});

app.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.get('/api/notes', (req,res)=>{
    res.sendFile(path.join(__dirname, 'data', 'notes.json'));
 });

 app.post('/api/notes', (req, res) => {
    req.body.id = uniqID;
    console.log(uniqID); 
    const note = createNewNote(req.body, notes);
    console.log(req.body);
    

    res.json(req.body); 
    
 });


// Need to add event listener and add to save button to call//
 const uniqID = uniqid()





// ================LISTENER===================//

app.listen(PORT, () =>
{
    console.log(`API server now on port ${PORT}!`);
})

