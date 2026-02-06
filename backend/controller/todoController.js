const Todo = require("../models/todo");
exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { task } = req.body;
    if (task === undefined)
      return res.status(401).json({ message: "Task not found" });
    const todos = await Todo.create({
      task,
      completed: false,
    });
    res.status(201).json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
  // const {task} =req.body;
  // const newTodo={
  //     id:id++,
  //     task,
  //     Completed:false
  // }
  // todos.push(newTodo)
  // res.json(newTodo)
};

exports.updateTodo = async (req, res) => {
  try {
    const todos = await Todo.findById(req.params.id);
    if (!todos) {
      res.json({ message: "Todo not found" });
    }
    todos.task = req.body.task || todos.task;
    todos.completed =
      req.body.completed === undefined ? todos.completd : req.body.completed;
    await todos.save();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task Deleted Successfully" });
  } catch {
    res.status(500).send(err);
  }
};
