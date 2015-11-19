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
{ userid1: req.param('id_user') },
{ userid2: req.param('id_user')}
  ]
	    })
	    .populate('_player1','_player2')
	    .populate('_player2')
	    .exec(function (err, response) {
		console.log(req.param('id'))
		return res.ok(response)
	    })
    },

GamesAvailable: function(req, res) {
    Game.find({userid1: {not : req.param('id_user')}},
	      {userid2: -1}
	    )
	    .populate('_player1','_player2')
  	.exec(function (err, response) {
		console.log(req.param('id'))
		return res.ok(response)
	    })
    }

};

