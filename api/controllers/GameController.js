/**
 * GameController
 *
 * @description :: Server-side logic for managing Games
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    MyGames: function(req, res) {
	Game.find({
		or: [
{ userid1: parseInt(req.param('id')) },
{ userid2: parseInt(req.param('id'))}
  ]
	    })
	    .populate('_player1','_player2')
  	.exec(function (err, response) {
		console.log(req.param('id'))
		return res.ok(response)
	    })
    }
};

