var _ = require('lodash');
var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Update One Record
 * PUT /:model/:id
 *
 * An API call to update a model instance with the specified `id`, treating the other unbound parameters as attributes.
 */
module.exports = function (req, res) {
  var Model = actionUtil.parseModel(req);
  var PK = actionUtil.requirePk(req);
  var values = actionUtil.parseValues(req);

    // Create new instance of model using data from params
  Model.update(PK, _.omit(values,'id')).exec(function updated (err, newInstance) {

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
		Model.publishUpdate(newInstance, !req.options.mirror && req);
	    }

	    // Send JSONP-friendly response if it's supported
	    // populate it first
    Model
	.findOne({id:newInstance.id})
	.populateAll()
	.exec(function(err, populatedInstance){
		if (err) return res.negotiate(err);

		res.updated(populatedInstance);
	    });
	});
  /*
  Model
    .update(PK, _.omit(values, 'id'))
    .populateAll()
    .then(function (records) {
      return records[0] ? res.ok(records[0]) : res.serverError();
    })
    .catch(res.serverError);*/
};
