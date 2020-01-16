const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Gods.find(req.query)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findAllByClass: function(req, res) {
    db.Gods.find({ class: req.params.class })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOneByClass: function(req, res) {
    db.Gods.find({ class: req.params.class })
      .then(dbModel => {
        res.send(
          dbModel[0].class +
            ": " +
            dbModel[0].name[Math.floor(Math.random() * dbModel[0].name.length)]
        );
      })
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.Gods.find(req.query)
      .then(dbModel => {
        let randomclass = dbModel[Math.floor(Math.random() * dbModel.length)];
        res.send(
          randomclass.class +
            ": " +
            randomclass.name[
              Math.floor(Math.random() * randomclass.name.length)
            ]
        );
      })
      .catch(err => res.status(422).json(err));
  },
  findOneOfEachConq: function(req, res) {
    db.Gods.find(req.query)
      .then(dbModel => {
        let team = [];
        for (let i = 0; i < dbModel.length; i++) {
          team.push(
            dbModel[i].name[Math.floor(Math.random() * dbModel[i].name.length)]
          );
        }
        res.send(
          "Solo-" +
            team[0] +
            " || Sup-" +
            team[1] +
            " || Carry-" +
            team[2] +
            " || Jung-" +
            team[3] +
            " || Mid-" +
            team[4]
        );
      })
      .catch(err => res.status(422).json(err));
  },
  findOneOfEachJoust: function(req, res) {
    db.Gods.find(req.query)
      .then(dbModel => {
        let team = [];
        for (let i = 0; i < 3; i++) {
          let randomclass = dbModel[Math.floor(Math.random() * dbModel.length)];
          team.push(
            randomclass.name[
              Math.floor(Math.random() * randomclass.name.length)
            ]
          );
        }
        res.send(team[0] + " || " + team[1] + " || " + team[2]);
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Gods.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Gods.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Gods.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
