var repo = function (data) {

  return {
    get: function(id) {
          console.log('getting task' + id);
          return {
            name: 'new task from db'
            }
        }
     }

}

module.exports = repo();


//main.js

var Repo = require('./taskRepository')'
var task1 = new Tak(Repo.get(1));

//task.js
var Task = function (data) {
  this.name = data.name;
  this.completed = false;
  }
  
  Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
  };
  
  Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
    
   };
   
   module.exports = Task;
