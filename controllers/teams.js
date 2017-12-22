var express = require('express');
var fs = require('fs');
var teamService = require('../models/teamService');
var router = express.Router();

router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { teams: teams });
});

router.post('/', function(req, res) {
  teamService.addTeam(req.body);
    res.redirect('/teams');
});

router.put("/:name", function(req, res) {
  teamService.editTeam(req.params.name, req.body);
  console.log("name:", req.params.name);
  console.log("req.body is: ", req.body);
  res.send("Put Route");
});

router.delete('/:name', function(req, res) {
  teamService.deleteTeam(req.params.name);
  res.send();
});

router.get('/new', function(req, res) {
  res.render('teams/new');
});

router.get("/edit/:name", function(req, res) {
  var team = teamService.getTeam(req.params.name);
  res.render("teams/edit", { team: team });
});

router.get('/:name', function(req, res) {
  var team = teamService.getTeam(req.params.name);
  res.render('teams/show', { team: team });
});

module.exports = router;
