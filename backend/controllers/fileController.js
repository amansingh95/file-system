const path = require("path");
const fs = require("fs");

//create folder
const createFolder = (req, res) => {
  const folderName = req.body.folderName;

  fs.mkdir(`./${folderName}`, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log(`New directory ${folderName} successfully created.`);
      
    }
  });res.status(200);
};

// create file
const createFile = (req,res)=>{
    const fileName = req.body.fileName;
    var createStream = fs.createWriteStream(`${fileName}`);
    createStream.end();
}

// remove folder
const removeFolder=(req,res)=>{
    const folderToRemove = req.body.folderToRemove;
    fs.rmdir(folderToRemove, function(err) {
        if (err) {
          throw err
        } else {
          console.log(`Successfully removed ${folderToRemove} directory!`)
        }
      })
}

module.exports = { createFolder, createFile, removeFolder };

