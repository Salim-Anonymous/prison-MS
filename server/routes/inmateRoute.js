const express = require("express");
const inmateController = require("../controllers/inmateController");

const router = express.Router();

//handle login requests

router.get("/:type/:query", inmateController.searchInmate);

module.exports = router;