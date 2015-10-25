/**
* Game.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	status_room : {type:'string', defaultsTo:"waiting"},
	status_game:  {type:'string', defaultsTo: "waiting"},
	nb_turn:  {type:'integer', defaultsTo: 0},
	  _player1 : {
	    model:'Player',

	     },
	  _player2 : {
	      model:'Player',
	  },
	history : {
	    model:'History'
	}
  }
};

