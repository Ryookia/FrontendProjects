/**
 * UnitController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  listunits: async (request, response) => {
    try {
      let units = await Unit.find({});
      if (!units){
        return response.notFound('Database search error');
      }
      response.view("list", { units });
    } catch (err) {
      response.serverError(err);
    }
  },

  addunit: (request, response) => {
    response.view("create");
  },

  createunit: (request, response) => {
    var name = request.body.name;
    var damage = request.body.damage;
    var health = request.body.health;
    var cost = request.body.cost
    var type = request.body.type;

    if (cost == null || cost == ''){
      cost = 0;
    }

    if (damage == null || damage == ''){
      damage = 0;
    }

    Unit.create({
      name: name,
      damage: damage,
      health: health,
      cost: cost,
      type: type
    }).exec(function(err){
      if (err) {
        response.send(500, {error: err});
      }
      response.redirect("/unit/list");
    });
  },

  deleteunit: function (request, response) {
    Unit.destroy( {id: request.params.id}).exec(function(err) {
      if (err) {
        response.send(500, {error: 'Database failure'})
      }
      response.redirect('/unit/list');
    });

    return false;
  },

  editunit: function (request, response) {
    Unit.findOne( request.params.id, function unitFound(err, unit) {
      if (err) {
        response.send(500, {error: 'Database error'});
      }
      if (!unit) return response.send("Unit not found", 404);
      response.view("edit", {unit});
    });
  },

  updateunit: function(request, response) {
    var name = request.body.name;
    var damage = request.body.damage;
    var health = request.body.health;
    var cost = request.body.cost;
    var type = request.body.type;

    if (cost == null || cost == ''){
      cost = 0;
    }

    if (damage == null || damage == ''){
      damage = 0;
    }

    Unit.update({id: request.params.id}, {name: name, damage: damage, health:health, cost:cost, type:type}).exec(function(err){
      if (err){
        response.send(500, {error: "Database error"});
      }
      response.redirect("/unit/list");
    });
    return false;
  }
};
