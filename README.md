# exam
## Debugging
---
1- Error: Cannot find module '../db'
* in index.js file line 5
> require("./db")
---
2-  Error: Cannot find module 'mongoose'
* mongoose was not installed
> npm i mongoose    
---
3- Error: Cannot find module './../../db/models/todos'
* in todos.js controller file،  line 1
> const todoModel = require("./../../db/models/todo");
---
4- Error: Cannot find module 'mongose'
* in todo.js models file, db , line 1
> const mongoose = require("mongoose");
---
5- TypeError: mongoose.module is not a function
* in todo.js models file, db, line 10
> const todoModel = mongoose.model("Todo", todoSchema);
---
6- Error: Route.get() requires a callback function but got a [object Undefined]
* routers/controllers/todos.js, line 96
> module.exports
---
7- Error: Route.put() requires a callback function but got a [object Undefined]
* routers/controllers/todos.js, updateTodo was not exported 
> module.exports = {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo,
  updateTodo
};
---
8- ReferenceError: morgan is not defined
* todoback/index.js 
> const morgan = require("morgan")
---
9- Error: listen EADDRINUSE: address already in use 4000;
* It workes no matter why 
---
10- TypeError: Cannot read property 'todo' of undefined
* in create todo the req (todo) but in the model (task), type should be String
* db/models/todo.js , line 4 
>    task: { type: String, required: true }
* const todo = req.body.todo;
>   const todo = req.body
* index.js, line 12 ()
> app.use(cors());
