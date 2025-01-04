const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  question_id:      { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz.questions', required: true },
  question_text:    { type: String},
  selected_option:  { type: Number, required: true },
  is_correct:       { type: Boolean, required: true },
  user_id:          { type: String}
});

module.exports = mongoose.model('Answer', AnswerSchema);