const express = require('express');
const CampingLocation = require('../models/camping');
const cors = require('./cors');

const campingRouter = express.Router();

campingRouter
  .route('/')
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    CampingLocation.find()
      .then((campinginfo) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campinginfo);
      })
      .catch((err) => next());
  })
  .post((req, res, next) => {
    CampingLocation.create(req.body)
      .then((campinginfo) => {
        console.log('Camping Document Created ', campinginfo);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campinginfo);
      })
      .catch((err) => next(err));
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /camping');
  })
  .delete((req, res, next) => {
    CampingLocation.deleteMany()
      .then((response) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
      })
      .catch((err) => next(err));
  });

module.exports = campingRouter;
