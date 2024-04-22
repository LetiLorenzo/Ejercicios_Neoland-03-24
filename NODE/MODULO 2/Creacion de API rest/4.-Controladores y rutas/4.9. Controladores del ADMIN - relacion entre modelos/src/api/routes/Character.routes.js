const express = require("express");
const { toggleLikeCharacter } = require("../controllers/Character.controllers");
const { isAuth } = require("../../middleware/auth.middleware");
const CharacterRoutes = express.Router();

CharacterRoutes.patch("/like/character/:idCharacter", [isAuth], toggleLikeCharacter);

module.exports = CharacterRoutes;