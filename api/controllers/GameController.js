/**
 * GameController
 *
 * @description :: Server-side logic for managing Games
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    MyGames: function(req, res) {
	Game.find()
	.where({_player1: {userid:req.id}})
	.exec(function (err, response) {
		console.log(err)
	    });
    
    }
};

