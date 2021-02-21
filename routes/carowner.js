const express = require('express');
const router = express.Router();
const carowner = require('../models/carowner_model');

router.get('/', function(request, response) {
    carowner.get(function(err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});

router.get('/cars', function(request, response) {
    carowner.getCars( function(err, dbResult) {
        if (err) {
             response.json(err) ;
        } else {
             response.json(dbResult) ;
        } ;
    }) 
});

router.get('/:id?', function(request, response,) {
    if (request.params.id) {
        carowner.getById(request.params.id, function(err, dbResult) {
            if (err) {
            response.json(err);
            } else {
            response.json(dbResult);
            }
        });
    }
})

router.post('/', 
function(request, response) {
  carowner.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body);
    }
  } );
} );


router.delete('/:id', 
function(request, response) {
  carowner.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.put('/:id', 
function(request, response) {
  carowner.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;