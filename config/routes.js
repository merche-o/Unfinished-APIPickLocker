/**
 * Route Mappings
 *
 * Your routes map URLs to views and controllers
 */

module.exports.routes = {
    '/v1/mygames/:id_user': {
	controller: 'GameController',
	action: 'myGames',
    },
    'v1/gameswaiting/:id_user':{
	controller: 'GameController',
	action:'GamesAvailable', 
    }
};
