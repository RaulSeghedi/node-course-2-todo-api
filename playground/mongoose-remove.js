const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5a0bfabd9a96bba846e05158'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5a0bfabd9a96bba846e05158').then((todo) => {
    console.log(todo);
});