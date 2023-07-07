import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Question1 from '../components/Questions/Question1';
import Question1a from '../components/Questions/Question1a';
import Question2 from '../components/Questions/Question2';
import Infotest from '../components/Info/Infotest';

let nextQuestions =[

];

const questionsAnswered = [
    "q1",
    "q2",
]

const answers = {
    //need to define answer for input field questions to stop error: "A component is changing an uncontrolled input of type text"
    q1: "",
    q1a: "",
    q2: "",
};

const questionHistory = [
{
    questionName: "q1",
    nextQuestionsHistory: ["q1"]
},
];

class FormV2 extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
            currentQuestion: "q1",
            showInfoState: false,
            questionCounter: 0,
            progress: null,
        };
    }
    
    progressBar = () => {
        const numQuestions = questionsAnswered.length;
        const progress = (this.state.questionCounter / numQuestions);
        this.setState({
            progress: progress
        })
    }

    onBackButton = (event) => {
        event.preventDefault();
        
        questionHistory.pop();
        const lastQuestion = questionHistory[questionHistory.length-1];
        nextQuestions = lastQuestion.nextQuestionsHistory.concat();
        console.log("onbkbtn"); 
        console.log("nextQuestions on back", nextQuestions);
        this.setState({
            currentQuestion: lastQuestion.questionName,
            showInfoState: false,
            questionCounter: this.state.questionCounter-1
        }, () => {
            if(answers[lastQuestion.questionName]){
                return;
            }
            this.progressBar();
        })
        // console.dir(nextQuestions);
        // console.dir(questionHistory);
    }

    onInfoButton = (event) =>{
        event.preventDefault();
        if(this.state.showInfoState === false){
            this.setState({
                showInfoState: true
            })
        }

        if(this.state.showInfoState === true){
            this.setState({
                showInfoState: false
            })
        }
    }

    onQuestionSubmit = (questionName, answer, nextQs) => {
        answers[questionName] = answer;

        if(answers.q1 === "NO"){
            answers.q1a = "";
        }

        //------------PROGRESS BAR STUFF--------------------------
        
        if(questionsAnswered.includes(this.state.currentQuestion)){
            this.setState({
                questionCounter: this.state.questionCounter+1
            })
        }
        //------------------------------------------------------
        
        console.log("Submitting " + questionName);

        console.log("nextQuestions on Submit", nextQuestions);
        // Remove current question from the next questions list
        nextQuestions.shift();
        
        // Push any new questions that results from answering this question onto next questions
        nextQuestions.push(...nextQs);
        console.log("nextQuestions after Submit", nextQuestions);
        console.log("history after submit", questionHistory.map(h => h.nextQuestionsHistory.join(",")).join("|"));

        this.loadNextQuestion();

        // console.log(questionName, answer);
        // console.dir(answers);
    }

    loadNextQuestion = () => {

        const nextQuestion = nextQuestions[0];

        questionHistory.push({
            questionName: nextQuestion,
            nextQuestionsHistory: nextQuestions.concat()
        });

        this.setState({
            currentQuestion: nextQuestion,
            showInfoState: false,
        }, () => {this.progressBar()})
    }
   
    render() {
       
        const {currentQuestion} = this.state;
        
        const progressBarStylePercent = this.state.progress * 100;
        const progressBarPercentRounded = Math.round(progressBarStylePercent);

        return (
            <div>
                
                <div>
                    <h1>Form v2</h1>
                </div>

                <div>
                <form onSubmit={this.onSubmit}>
                    
                    <h5>Question {currentQuestion}</h5>

                    {this.state.currentQuestion === "q1" && (
                        <Question1 initialvalue={answers["q1"]} onSubmit={this.onQuestionSubmit}></Question1>
                    )}
                    
                    
                    {this.state.currentQuestion === "q1a" && (
                        <Question1a initialvalue={answers["q1a"]} onSubmit={this.onQuestionSubmit}></Question1a>
                    )}

                    {this.state.currentQuestion === "q2" && (
                        <Question2 initialvalue={answers["q2"]} onSubmit={this.onQuestionSubmit}></Question2>
                    )}

                    <button type="button" className="last-question-btn" onClick={this.onBackButton} disabled={questionHistory.length === 1}>Go Back</button>
                    <button type="button" className="info-btn" onClick={this.onInfoButton}>More Info</button>
                    <div className="progress-bar-stuff">
                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{width: progressBarStylePercent + '%'}}>
                            </div>
                        </div>
                        <div className="progress-bar-label">{`${progressBarPercentRounded}%`}</div>  
                    </div>
                </form>
                {this.state.showInfoState && (
                        <Infotest></Infotest>
                    )}
                </div>
            </div>
        )
    }
}

export default FormV2