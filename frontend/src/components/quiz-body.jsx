import { useState } from "react"

function QuizBody() {
    const questionBank = [
        {
            "question": "Which planet is known as the 'Red Planet'?",
            "options": ["Venus", "Mars", "Jupiter", "Saturn"],
            "answer": "Mars"
        },
        {
            "question": "What is the capital city of France?",
            "options": ["London", "Berlin", "Madrid", "Paris"],
            "answer": "Paris"
        },
        {
            "question": "Which element has the chemical symbol 'O'?",
            "options": ["Gold", "Silver", "Oxygen", "Iron"],
            "answer": "Oxygen"
        },
        {
            "question": "Who painted the 'Mona Lisa'?",
            "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            "answer": "Leonardo da Vinci"
        },
        {
            "question": "What is the largest ocean on Earth?",
            "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            "answer": "Pacific Ocean"
        }
    ]


    const initialAnswers = [null];
    const [userAnswers, setUserAnswers] = useState(initialAnswers)
    {console.log(userAnswers)}
    const [currentQuestion, setCurrentQuestion] = useState(0)
    // const [userSelect, setUserSelect] = useState("None");
    const selectedAnswer = userAnswers[currentQuestion]


    function handleSelectOption(option) {
        // setUserSelect(option);
        const _userAnswers = [...userAnswers]
        _userAnswers[currentQuestion] = option
        setUserAnswers(_userAnswers);
    };

    function goNext() {
        setCurrentQuestion(currentQuestion + 1);
    }
    
    function goPrev() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    return (
        <div className="card-body">

            <header className="flex justify-between items-center mb-5 gap-2">
                <h2 className="text-3xl font-bold z-10">Quiz App</h2>
                <span className="badge badge-outline badge-xs badge-warning">React Practice</span>
                {/* <span className="text-xl">Question {currentQuestion + 1}</span> */}
            </header>


            <div className="text-lg text-start mb-2">
                <span className="font-semibold">
                    Question {currentQuestion + 1}{". "}
                </span>
                <span>
                    {questionBank[currentQuestion].question}
                </span>
            </div>

            
            {questionBank[currentQuestion].options.map((option, index) => (
                <button 
                        className={"text-start btn btn-soft btn-primary" + (selectedAnswer === option ? " btn-active" : "")} 
                        onClick={() => handleSelectOption(option)}
                    >
                    {option}
                </button>
            ))}

            {/* <span>User Select: {userSelect}</span>
            <span>Selected Answer: {selectedAnswer}</span>
            <span>Correct Answer: {questionBank[currentQuestion].answer}</span> */}

            {/* <span>c: {currentQuestion}</span>
            <span>n: {questionBank.length - 1}</span> */}

            <div className="flex justify-between mt-4">
                <button className={"btn btn-primary" + (currentQuestion === 0 ? " hidden": "") } onClick={goPrev}
                    >Previous
                </button>
                <button className={"btn btn-primary" + (currentQuestion === 0 ? " w-full": "")} onClick={goNext} disabled={!selectedAnswer}>
                    {currentQuestion === questionBank.length - 1 ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    )
}

export default QuizBody