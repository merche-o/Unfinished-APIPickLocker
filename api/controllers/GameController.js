/**
 * GameController
 *
 * @description :: Server-side logic for managing Games
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    MyGames: function(req, res) {
	Game.find().where({
		  or: [
{ userid1: req.param('id') },
{ userid2: req.param('id') }
		       ]})
	.populate('_player1')
  	.exec(function (err, response) {
		console.log(response)
		return res.ok(response)
	    })
    }
};

