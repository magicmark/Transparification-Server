'use strict';
var information = require( './information' );

module.exports = function(app) {


  app.get('/info/:site', function(req, res) {
    console.log(req.get('API-Version'));
    var site = information.getInfo(req.params.site);
    res.json({
      'success' : (!!site),
      'info': site
    });

  });


}