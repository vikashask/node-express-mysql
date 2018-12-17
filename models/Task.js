var db = require('../dbconnection'); //reference of dbconnection.js

var Task = {

    getAllTasks: function (callback) {

        return db.query("Select * from task", callback);

    },
    getTaskById: function (id, callback) {

        return db.query("select * from task where Id=?", [id], callback);
    },
    addTask: function (Task, callback) {
        // var Id = Task.Id?Task.Id:null;
        let meetingId = Task.Meeting_id
        return db.query("Insert into task (`Title`, `Status`, `Meeting_id`) values(?,?,?)", [Task.Title, Task.Status,meetingId], callback);
    },
    deleteTask: function (id, callback) {
        return db.query("delete from task where Id=?", [id], callback);
    },
    updateTask: function (id, Task, callback) {
        return db.query("update task set Title=?,Status=? where Id=?", [Task.Title, Task.Status, id], callback);
    }

};
module.exports = Task;