
// REQUIRED//
const fs = require('fs');
const express = require('express');
const  { notes }  = require('./data/notes.json')
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;
const uniqid = require('uniqid');

// ===================================//

// PARSE DATA//
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// =========================================//

// Access Public folders//
app.use(express.static('public'));
//===============================//


// FUNCTIONS//

function createNewNote(body, notes) {
    const note = body 
    notes.push(note)
    fs.writeFileSync(
      path.join(__dirname, './data/notes.json'),
      JSON.stringify({notes}, null, 2)
  );   
   
    return note
};


function deleteNotesUpdate(id, notes){
  console.log('before update', notes);
  const deleteID = id
  const updatedArray =  notes.filter(del => del.id != deleteID);
  notes=updatedArray
  console.log('new notes', notes);
  
  console.log('Updated Notes Object', notes);
  fs.writeFileSync(
    path.join(__dirname, './data/notes.json'),
    JSON.stringify({notes}, null , 2)    
    );    

  return 
  
};

// =========================================//


// LINK HTML PATHS and GET Request//
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));        
});

app.get('/notes', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.get('/api/notes', (req,res)=>{
    res.sendFile(path.join(__dirname, 'data', 'notes.json'));
 });


// ========================================//


// POST Request //
 app.post('/api/notes', (req, res) => {
   
  const uniqID = uniqid()
    req.body.id = uniqID;
    const note = createNewNote(req.body, notes);
    console.log(req.body);   

    res.json(req.body);     
 });
 
 //===========================================//

 //DELETE Request //
app.delete('/api/notes/:id', (req, res)=>{
  const getID = req.params.id;    
  const deleteNote = deleteNotesUpdate(getID, notes)  
  
  res.json(notes);
});






// ================LISTENER===================//

app.listen(PORT, () =>
{
    console.log(`API server now on port ${PORT}!`);
})