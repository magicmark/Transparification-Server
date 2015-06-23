'use strict';
var information = require( './information' );

module.exports = function(app) {


  app.get('/info/:site', function(req, res) {
    
    var site = information[req.params.site];
    res.json({
      'success' : (!!site),
      'info': site
    });

  });


}