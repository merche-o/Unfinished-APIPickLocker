/**
* Player.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

	userid: {
	    type:'integer',
	    required: true
	},
	code: {
	    type:'string',
	    required:true
	},
	type: {
	    type:'string',
	    defaultsTo:"number",
      	},
	try: {
		type:'integer',
		defaultsTo:3
	},
	gameId: {
	    model:'Game',
	    required:true
	}
  }
};

