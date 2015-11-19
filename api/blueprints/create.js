var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Create Record
 * POST /:model
 *
 * An API call to create and return a single model instance using the specified parameters.
 */
module.exports = function (req, res) {
    /*var Model = actionUtil.parseModel(req);
    var values = actionUtil.parseValues(req);

  Model
    .create(values)
    .then(res.created)
    .catch(res.serverError);
    */
   var Model = actionUtil.parseModel(req);

    // Create data object (monolithic combination of all parameters)
    // Omit the blacklisted params (like JSONP callback param, etc.)
    var data = actionUtil.parseValues(req);


    // Create new instance of model using data from params
    Model.create(data).exec(function created (err, newInstance) {

	    // Differentiate between waterline-originated validation errors
	    // and serious underlying issues. Respond with badRequest if a
	    // validation error is encountered, w/ validation info.
	    if (err) return res.negotiate(err);

	    // If we have the pubsub hook, use the model class's publish method
	    // to notify all subscribers about the created item
	    if (req._sails.hooks.pubsub) {
		if (req.isSocket) {
		    Model.subscribe(req, newInstance);
		    Model.introduce(newInstance);
		}
		Model.publishCreate(newInstance, !req.options.mirror && req);
	    }

	    // Send JSONP-friendly response if it's supported
	    // populate it first
    Model
	.findOne({id:newInstance.id})
	.populateAll()
	.exec(function(err, populatedInstance){
		if (err) return res.negotiate(err);

		res.created(populatedInstance);
	    });
	});
};