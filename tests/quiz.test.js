const request = require('supertest');
const app = require('../app'); 

describe('POST /api/quizzes', () => {
  it('should create a new quiz', async () => {
    const response = await request(app)
      .post('/api/quizzes')
      .send({
        title: 'General Knowledge Quiz',
        questions: [
          {
            text: 'What is the capital of France?',
            options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            correct_option: 2
          },
          {
            text: 'Which planet is known as the Red Planet?',
            options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
            correct_option: 1
          }
        ]
      })
      .set('Accept', 'application/json');
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body.title).toBe('General Knowledge Quiz');
    expect(response.body.questions).toHaveLength(2);
    expect(response.body.questions[0]).toHaveProperty('_id');
  });
});

describe('GET /api/quizzes/:quizId', () => {
  it('should fetch a quiz by its ID', async () => {
    const quizId = '6778baca0890f501ecd1f705';
    
    const response = await request(app)
      .get(`/api/quizzes/${quizId}`)
      .set('Accept', 'application/json');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id', quizId);
    expect(response.body).toHaveProperty('title');
    expect(response.body.questions).toBeDefined();
    expect(response.body.questions[0]).toHaveProperty('options');
  });
});