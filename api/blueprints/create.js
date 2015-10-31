var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * Create Record
 * POST /:model
 *
 * An API call to create and return a single model instance using the specified parameters.
 */
module.exports = function (req, res) {
  _.set(req.options, 'criteria.blacklist', ['limit', 'skip', 'sort', 'populate', 'fields']);
  var fields = req.param('fields') ? req.param('fields').replace(/ /g, '').split(',') : [];
  var populate = req.param('populate') ? req.param('populate').replace(/ /g, '').split(',') : [];
  var values = actionUtil.parseValues(req);

  Model
    .create(values)
    .then(res.created)
    .catch(res.serverError);
};
