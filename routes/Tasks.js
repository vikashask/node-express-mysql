var express = require('express');
var router = express.Router();
var Task = require('../models/Task');

router.get('/:id?', function (req, res, next) {

    if (req.params.id) {

        Task.getTaskById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {

        Task.getAllTasks(function (err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
// add task
router.post('/', function (req, res, next) {

    Task.addTask(req.body, function (err, count) {

        //console.log(req.body);
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
});
// delete all task
router.post('/:id', function (req, res, next) {
    Task.deleteAll(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
// delete task by id
router.delete('/:id', function (req, res, next) {

    Task.deleteTask(req.params.id, function (err, count) {

        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }

    });
});
// update task by id
router.put('/:id', function (req, res, next) {

    Task.updateTask(req.params.id, req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;