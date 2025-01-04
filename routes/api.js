const express = require("express");
const router = express.Router();
const jwtVerify = require("../middleware/jwt_verify");

const { createQuiz, getQuiz, submitAnswer, getResults } = require('../controllers/QuizController');

router.post('/quizzes', createQuiz);
router.get('/quizzes/:quizId', getQuiz);
router.post('/quizzes/:quizId/questions/:questionId/answer', submitAnswer);
router.get('/quizzes/:quizId/results/:userId', getResults);

module.exports = router;