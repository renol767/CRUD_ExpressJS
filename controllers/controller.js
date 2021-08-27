const Data = require('../models/model');

module.exports = {
    index: function (req, res) {
        Data.get(req.con, function (err, rows) {
            res.render('data/index', {data:rows})
        })
    },

    create: function (req, res) {
        res.render('data/create')
    },

    store: function (req, res) {
        Data.create(req.con, req.body, function (err) {
            res.redirect('/data')
        })
    },

    edit: function (req, res) {
        Data.getById(req.con, req.params.id, function (err, rows) {
            res.render('data/edit', {data: rows[0]})
        })
    },

    update: function (req, res) {
        Data.update(req.con, req.body, req.params.id, function (err) {
            res.redirect('/data')
        })
    },

    destroy: function (req, res) {
        Data.destroy(req.con, req.params.id, function (err) {
            res.redirect('/data')
        })
    }
}