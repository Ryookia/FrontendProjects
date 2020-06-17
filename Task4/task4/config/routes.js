/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/home': { view: 'pages/homepage' },

  '/': {view: 'pages/unitList' },

  '/unit/list': {
    controller: 'UnitController',
    action: 'listunits'
  },

  '/unit/create': {
    controller: 'UnitController',
    action: 'createunit'
  },

  '/unit/add': {
    controller: 'UnitController',
    action: 'addunit'
  },

  '/unit/delete/:id': {
    controller: 'UnitController',
    action: 'deleteunit'
  },

  '/unit/edit/:id': {
    controller: 'UnitController',
    action: 'editunit'
  },

  '/unit/update/:id': {
    controller: 'UnitController',
    action: 'updateunit'
  },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
