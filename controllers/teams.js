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

router.delete('/:name', function(req, res) {
  // console.log("delete route name = ", req.params.name);
  teamService.deleteTeam(req.params.name);
  res.send();
});

// app.delete('/teams/:name', function(req, res) {
//   var teamToDelete = req.params.name;

//   // delete team here

  
//    * instead of rendering a page, send back JSON or text, which can be read
//    * in the .done() promise of the AJAX call
   
//   res.send({message: 'success'});
// });

// router.delete("/:id", function(req, res) {
//   console.log("delete route. ID = ", req.params.id);
//   db.article.destroy({
//     where: { id: req.params.id }
//   }).then(function(deleted){
//     console.log("deleted = ", deleted);
//     res.send("success");
//   }).catch(function(err) {
//     console.log("an error happened", err);
//     res.send("fail");
//   });
// });



router.get('/new', function(req, res) {
  res.render('teams/new');
});

router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);

  res.render('teams/show', { team: team });
});

module.exports = router;
