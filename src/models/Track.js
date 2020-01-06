const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongooseSchema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    default: ''
  },
  locations: []
});