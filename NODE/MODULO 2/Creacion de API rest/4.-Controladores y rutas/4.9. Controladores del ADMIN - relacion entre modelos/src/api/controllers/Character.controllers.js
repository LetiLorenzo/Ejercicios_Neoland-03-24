const Character = require("../models/Character.model");
const Chat = require("../models/Chat.model");
const Menssage = require("../models/Message.model");
const Movie = require("../models/Movie.model");
const User = require("../models/User.model");


const toggleLikeCharacter = async (req, res, next) => {
    try {
      const { idCharacter } = req.params;
      // vamos a tener el middleware de auth por lo cual se crea req.user
      const { _id } = req.user;
  
      if (req.user.charactersFav.includes(idCharacter)) {
        try {
          await User.findByIdAndUpdate(_id, {
            $pull: { charactersFav: idCharacter },
          });
  
          try {
            await Character.findByIdAndUpdate(idCharacter, {
              $pull: { likes: _id },
            });
  
            return res.status(200).json({
              action: "disliked",
              user: await User.findById(_id).populate("charactersFav"),
              character: await Character.findById(idCharacter).populate("likes"),
            });
          } catch (error) {
            return res.status(404).json({
              error: "no update character - likes",
              message: error.message,
            });
          }
        } catch (error) {
          return res.status(404).json({
            error: "no update user-  charactersFav",
            message: error.message,
          });
        }
      } else {
        try {
          await User.findByIdAndUpdate(_id, {
            $push: { charactersFav: idCharacter },
          });
  
          try {
            await Character.findByIdAndUpdate(idCharacter, {
              $push: { likes: _id },
            });
  
            return res.status(200).json({
              action: "like",
              user: await User.findById(_id).populate("charactersFav"),
              character: await Character.findById(idCharacter).populate("likes"),
            });
          } catch (error) {
            return res.status(404).json({
              error: "no update character - likes",
              message: error.message,
            });
          }
        } catch (error) {
          return res.status(404).json({
            error: "no update user-  charactersFav",
            message: error.message,
          });
        }
      }
    } catch (error) {
      return res.status(404).json(error.message);
    }
  };
  
  module.exports = { toggleLikeCharacter };