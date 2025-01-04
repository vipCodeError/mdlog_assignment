const Quiz = require('../models/QuizeModel');
const Answer = require('../models/AnswerModel');
const Result = require('../models/ResultModel');

exports.createQuiz = async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create quiz' });
  }
};

exports.getQuiz = async (req, res) => {
    try {
      const quiz = await Quiz.findById(req.params.quizId).select('-questions.correct_option');
      if (!quiz) {
        return res.status(404).json({ error: 'Quiz not found' });
      }
      res.json(quiz);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch quiz' });
    }
  };


exports.submitAnswer = async (req, res) => {
  //try {
    const { quizId, questionId } = req.params;
    const { selected_option, user_id} = req.body;

    const quiz = await Quiz.findById(quizId);
    const question = quiz.questions.id(questionId);

    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const is_correct = question.correct_option === selected_option;
    const answer = new Answer({
      question_id: questionId,
      selected_option,
      is_correct,
      user_id,
      question_text : question.text,
    });

    var answerResult = await answer.save();

    const result = new Result({
      quiz_id: quizId,
      user_id: "12345",
      score: 1,
      answers: answerResult,
    });

    await result.save();


    res.json({
      is_correct,
      correct_answer: is_correct ? undefined : question.options[question.correct_option],
    });
  // } catch (err) {
  //   res.status(500).json({ error: 'Failed to submit answer' });
  // }
};

exports.getResults = async (req, res) => {
    try {
      const { quizId, userId } = req.params;
      const result = await Result.findOne({ quiz_id: quizId, user_id: userId });
  
      if (!result) {
        return res.status(404).json({ error: 'Result not found' });
      }
  
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch results' });
    }
  };