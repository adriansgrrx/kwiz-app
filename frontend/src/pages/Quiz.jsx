import QuizBody from "@/components/quiz-body"

function Quiz() {
    return(
        <div className="min-h-screen flex justify-center items-center bg-blue-50">
            <div className="card w-96 bg-base-100 shadow-sm">
                <QuizBody />
            </div>
        </div>
    )
}

export default Quiz