const Todo = require('./todo');

//restful para a variavel Todo
Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({new: true, runValidators: true});

module.exports = Todo;