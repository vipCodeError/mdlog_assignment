# Quiz

A RESTful API backend service to manage and execute quizzes.

---

## **Installation and Setup**

### **Run the Application**
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the application:
   ```bash
   npm start
   ```

Run Tests:
To execute the unit tests:
   ```bash
    npm test
   ```

API Endpoints

1. Create Quiz
Create a new quiz with questions and answer options.



```bash
    Endpoint: POST /api/quizzes
    curl --location 'http://localhost:7272/api/quizzes' \
    --header 'Content-Type: application/json' \
    --data '{
        "title": "General Knowledge Quiz",
        "questions": [
        {
            "text": "What is the capital of France?",
            "options": ["Berlin", "Madrid", "Paris", "Rome"],
            "correct_option": 2
        },
        {
            "text": "Which planet is known as the Red Planet?",
            "options": ["Earth", "Mars", "Jupiter", "Saturn"],
            "correct_option": 1
        }
        ]
    }'
```

2. Get Quiz
Fetch a quiz by its ID. The correct answers will not be revealed.

```bash
Endpoint: GET /api/quizzes/:quizId
    curl --location 'http://localhost:7272/api/quizzes/6778b58592190504b3d3a116'
```

3. Submit Answer
Submit an answer for a specific question in a quiz. Returns immediate feedback on correctness.

Endpoint: POST /api/quizzes/:quizId/questions/:questionId/answer
    
```bash
    curl --location 'http://localhost:7272/api/quizzes/6778baca0890f501ecd1f705/questions/6778baca0890f501ecd1f707/answer' \
    --header 'Content-Type: application/json' \
    --data '{
        "selected_option": 1,
        "user_id": "12345"
    }'
```

4. Get Results
Retrieve the user's results for a specific quiz. The response includes the score and a summary of answers.

Endpoint: GET /api/quizzes/:quizId/results/:userId
    
```bash
    {
    "id": "6778b58592190504b3d3a116",
    "title": "General Knowledge Quiz",
    "questions": [
            {
            "id": "6778b58592190504b3d3a117",
            "text": "What is the capital of France?",
            "options": ["Berlin", "Madrid", "Paris", "Rome"]
            },
            {
            "id": "6778b58592190504b3d3a118",
            "text": "Which planet is known as the Red Planet?",
            "options": ["Earth", "Mars", "Jupiter", "Saturn"]
            }
        ]
    }
```