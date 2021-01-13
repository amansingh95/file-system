const express = require('express');
const {createFolder, createFile, removeFolder } =require( '../controllers/fileController.js');

const router = express.Router();

router.route("/createfolder").post(createFolder);
router.route("/createFile").post(createFile);
router.route("/removeFolder").post(removeFolder);

module.exports = router;