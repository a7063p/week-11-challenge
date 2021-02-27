const router = require('express').Router();
const { deleteNotesUpdate, createNewNote} =  require('../../lib/notes');
const { notes } = require('../../data/notes.json');
const uniqid = require('uniqid');



// POST Request //
router.post('/notes', (req, res) => {
   
    const uniqID = uniqid()
      req.body.id = uniqID;
      const note = createNewNote(req.body, notes);
      console.log(req.body);   
  
      res.json(req.body);     
   });
   
   //===========================================//
  
   //DELETE Request //
  router.delete('/notes/:id', (req, res)=>{
    const getID = req.params.id;    
    const deleteNote = deleteNotesUpdate(getID, notes)  
    
    res.json(notes);
  });

  module.exports = router;

