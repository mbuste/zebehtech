var express = require('express');
var router = express.Router();
var Photo = require('../models/image');

router.get('/', function (req, res, next) {
    Photo.find({})
    .then(function (photo) {
      res.send(photo);
    }).catch(next)

});

router.get('/birthdayphotos',(req,res,next)=>{
    Photo.find({category : 'birthdays'})
    .then(function (photo) {
      res.send(photo);
    }).catch(next)
})

router.get('/lifestylephotos',(req,res,next)=>{
    Photo.find({category : 'lifestyle'})
    .then(function (photo) {
      res.send(photo);
    }).catch(next)
})

router.get('/partiesphotos',(req,res,next)=>{
    Photo.find({category : 'parties'})
    .then(function (photo) {
      res.send(photo);
    }).catch(next)
})

router.get('/potraitphotos',(req,res,next)=>{
    Photo.find({category : 'potraits'})
    .then(function (photo) {
      res.send(photo);
    }).catch(next)
})

router.get('/weddingphotos',(req,res,next)=>{
    Photo.find({category : 'weddings'})
    .then(function (photo) {
      res.send(photo);
    }).catch(next)
})


module.exports = router;
