import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Question1 from './Questions/Question1';
import Question1a from './Questions/Question1a';
import Question2 from './Questions/Question2';
import Question3 from './Questions/Question3';
import Question4 from './Questions/Question4';
import Infotest from './Info/Infotest';
import NavMenu from './Nav/NavMenu';
import PDFButton from './PDFButton';

const progBarQuestions = {
    q1: "",
    q2: "",
    q3: "",
    q4: "",
};

const answers = {
    q1: "",
    q1a: "",
    q2: "",
    q3: "",
    q4: "",
};

class FormV3 extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
            currentQuestion: "q1",
            showInfoState: false,
            questionCounter: 0,
            progress: null,
            navButton: false,
        };
    }
    
    progressBar = () => {
        let numOfQuestionsAnswered = 0;
        let numOfQuestions = 0;

        for(const property in progBarQuestions){
            if(progBarQuestions[property].length > 0){
                numOfQuestionsAnswered++;
            }
            numOfQuestions++;
        }
        const progress = (numOfQuestionsAnswered / numOfQuestions);
        this.setState({
            progress: progress
        })
    }

    onNavButton = () => {
        if(this.state.navButton === false){
            this.setState({
                navButton: true
            })
        }
        else{
            this.setState({
                navButton: false
            })
        }
    }


    onBackButton = (event) => {
        event.preventDefault();
        
        const questions = this.getQuestions()
        const currentQIndex = questions.indexOf(this.state.currentQuestion);


        const lastQIndex = currentQIndex - 1;
        
        this.setState({
            currentQuestion: questions[lastQIndex],
            showInfoState: false,
        })
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

    jumpQuestions = (questionToGoTo) =>{
        const questions = this.getQuestions();
        const indexToGoTo = questions.indexOf(questionToGoTo)

        this.setState({
            currentQuestion: questions[indexToGoTo],
            showInfoState: false
        }, () => {this.progressBar()})

    }

    getQuestions = () => {
        const questions = ["q1"];

        if(answers["q1"] === "YES"){
            questions.push("q1a")
        }

        questions.push("q2");
        questions.push("q3");
        questions.push("q4");

        return questions;
    }

    onQuestionResponseChange = (questionName, questionAnswer) => {
        answers[questionName] = questionAnswer;
        if(progBarQuestions.hasOwnProperty(`${questionName}`)){
            progBarQuestions[questionName] = questionAnswer;
        }
    }

    onQuestionSubmit = (questionName, questionAnswer) => {
        
        console.log("Submitting " + questionName);
        answers[questionName] = questionAnswer;
        if(progBarQuestions.hasOwnProperty(`${questionName}`)){
            progBarQuestions[questionName] = questionAnswer;
        }

        // get question list
        const questions = this.getQuestions();
    
        // find the current question in list
        const currentQIndex = questions.indexOf(questionName);
    
        // find the next question in the list
        const nextQIndex = currentQIndex + 1;

        if(this.state.currentQuestion === questions[questions.length - 1]){
            console.log(answers);
        }

        this.setState({
            currentQuestion: questions[nextQIndex],
            showInfoState: false
        }, () => {this.progressBar()})
        

    }
   
    render() {

        const {currentQuestion} = this.state;
        
        const progressBarStylePercent = this.state.progress * 100;
        const progressBarPercentRounded = Math.round(progressBarStylePercent);

        return (
            <div>
                
                <div>
                    <h1>IN DEVELOPMENT------Form v3------IN DEVELOPMENT</h1>
                </div>

                <div>
                <form onSubmit={this.onSubmit}>

                    {this.state.currentQuestion === "q1" && (
                        <Question1 initialvalue={answers["q1"]} onSubmit={this.onQuestionSubmit} onChange={this.onQuestionResponseChange} user={this.props.user}></Question1>
                    )}
                    
                    
                    {this.state.currentQuestion === "q1a" && (
                        <Question1a initialvalue={answers["q1a"]} onSubmit={this.onQuestionSubmit} onChange={this.onQuestionResponseChange} user={this.props.user}></Question1a>
                    )}

                    {this.state.currentQuestion === "q2" && (
                        <Question2 initialvalue={answers["q2"]} onSubmit={this.onQuestionSubmit} onChange={this.onQuestionResponseChange} user={this.props.user}></Question2>
                    )}

                    {this.state.currentQuestion === "q3" && (
                        <Question3 initialvalue={answers["q3"]} onSubmit={this.onQuestionSubmit} onChange={this.onQuestionResponseChange} user={this.props.user}></Question3>
                    )}

                    {this.state.currentQuestion === "q4" && (
                        <Question4 initialvalue={answers["q4"]} onSubmit={this.onQuestionSubmit} onChange={this.onQuestionResponseChange} user={this.props.user}></Question4>
                    )}

                    <button type="button" className="last-question-btn" onClick={this.onBackButton} disabled={currentQuestion === "q1"}>Last Question</button>
                    <button type="button" className="info-btn" onClick={this.onInfoButton}>More Info</button>

                    <button type="button" className="open-navigation-btn" onClick={this.onNavButton}>Navigation</button>

                    <div className="progress-bar-stuff">
                        <div className="progress-bar-container">
                            <div className="progress-bar" style={{width: progressBarStylePercent + '%'}}>
                            </div>
                        </div>
                        <div className="progress-bar-label">{`${progressBarPercentRounded}%`}</div>  
                    </div>
                </form>
                
                {this.state.showInfoState && (
                    <Infotest currentQuestion={currentQuestion}></Infotest>
                )}
                {this.state.navButton && (
                    <NavMenu valueq1={answers["q1"]} valueq1a={answers["q1a"]} valueq2={answers["q2"]} valueq3={answers["q3"]} valueq4={answers["q4"]} onSubmit={this.jumpQuestions}></NavMenu>
                )}
                <PDFButton answers={answers} user={this.props.user}></PDFButton>
                </div>
            </div>
        )
    }
}

export default FormV3