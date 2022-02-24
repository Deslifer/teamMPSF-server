const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  mail: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = {Task};
