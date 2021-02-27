
const fs = require("fs");
const path = require("path");

// FUNCTIONS//

function createNewNote(body, notes) {
    const note = body 
    notes.push(note)
    fs.writeFileSync(
      path.join(__dirname, '../data/notes.json'),
      JSON.stringify({notes}, null, 2)
  );   
   
    return note
};


function deleteNotesUpdate(id, notes){
  
  const deleteID = id
  updatedArray = notes
  
  if(deleteID) {
      for( let i = 0; i < updatedArray.length; i++ ){
          if(updatedArray[i].id == deleteID){
              updatedArray.splice(i,1)
          }
      }
  }  
  
  fs.writeFileSync(
    path.join(__dirname, '../data/notes.json'),
    JSON.stringify({notes}, null , 2)    
    );    
  return 
};


module.exports = {
    createNewNote,
    deleteNotesUpdate
}
