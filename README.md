Run with sequence to run program
npm i install
npm start

To Test
npm test 

API ENDPOINT

1.Create Quiz

curl --location 'localhost:7272/api/quizzes' \
--header 'Content-Type: application/json' \
--data '{
    "title": "General Knowledge Quiz",
    "questions": [
        {
            "text": "What is the capital of France?",
            "options": [
                "Berlin",
                "Madrid",
                "Paris",
                "Rome"
            ],
            "correct_option": 2
        },
        {
            "text": "Which planet is known as the Red Planet?",
            "options": [
                "Earth",
                "Mars",
                "Jupiter",
                "Saturn"
            ],
            "correct_option": 1
        }
    ]
}'

2. Get Quiz
curl --location --request POST 'localhost:7272/api/quizzes/6778b58592190504b3d3a116' \
--data '

3. Submit Quiz
curl --location 'localhost:7272/api/quizzes/6778baca0890f501ecd1f705/questions/6778baca0890f501ecd1f707/answer' \
--header 'Content-Type: application/json' \
--data '{
    "selected_option": 1,
    "user_id": "12345"
}'

4. Get Result
curl --location 'localhost:7272/api/quizzes/6778baca0890f501ecd1f705/results/12345'