var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Create Record
 * POST /:model
 *
 * An API call to create and return a single model instance using the specified parameters.
 */
module.exports = function (req, res) {

  var Model = actionUtil.parseModel(req);
  var populate = req.param('populate') ? req.param('populate').replace(/ /g, '').split(',') : [];
  var values = actionUtil.parseValues(req);

  Model
    .create(values)
    .then(res.created)
    .catch(res.serverError);
};
