const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true,
  },
  question_text: {
    type: String,
    required: true,
  },
  selected_option: {
    type: Number,
    required: true,
  },
  is_correct: {
    type: Boolean,
    required: true,
  },
});


const ResultSchema = new mongoose.Schema({
  quiz_id:    { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  user_id:    { type: String, required: true },
  score:      { type: Number, required: true },
  answers:    { type: [AnswerSchema], required: true },
});

module.exports = mongoose.model('Result', ResultSchema);