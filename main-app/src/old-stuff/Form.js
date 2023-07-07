import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Question from '../components/Question';
import TextAnswer from './SurveyAnswer/TextAnswer';
import AddressAnswer from './SurveyAnswer/AddressAnswer';
import MultChoiceAnswer from './SurveyAnswer/MultChoiceAnswer';
import Question412 from './SurveyAnswer/Question4.1-2';


const surveyQuestions = [
    {   
        questionNum: 1,
        questionContent: "Have any papers been filed in this matter?",
        answerType: "multchoice",
        defaultAnswerValue: ""
    },
    {   
        questionNum: 2,
        questionContent: "Where do you currently reside?",
        answerType: "text",
        defaultAnswerValue: ""
    },
    {   
        questionNum: 3,
        questionContent: "Please enter your residence information",
        answerType: "address",
        defaultAnswerValue: {
            Address: "",
            City: "",
            County: "",
            State: ""
        }
    },
    {   
        questionNum: 4,
        questionContent: "Please select the statement(s) that best describes your current status",
        answerType: "multchoice",
        option1: "I am legally married and I am not separated from my spouse",
        option2: "I am legally married but currently separated",
        option3: "I am legally in a domestic partnership and our domestic partnership was established in California, and not separated",
        option4: "I am legally in a domestic partnership and our domestic partnership was established in California, and we are currently separated",
        option5: "I am legally in a domestic partnership and our domestic partnership was NOT established in California, and not separated.",
        option6: "I am legally in a domestic partnership and our domestic partnership was NOT established in California, and we are currently separated",
        defaultAnswerValue: ""
    },
    {
        questionNum:"",
    }
];



class Form extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
            currentQuestionIndex: 0,
            currentAnswerValue: surveyQuestions[0].defaultAnswerValue,
            user: null,
            question3: ""
        };
    }
    
    handleLastQuestionBtn = () => {
        const {currentQuestionIndex} = this.state;
        
        this.setState({
            currentQuestionIndex: currentQuestionIndex - 1,
            currentAnswerValue: surveyQuestions[currentQuestionIndex-1].defaultAnswerValue
        })
    }

    handleQuestionOneOption1 = (value) =>{
        this.setState({
            currentAnswerValue: value,
        });
        
        surveyQuestions.splice(1, 0, {
            questionNum: 1.1,
            questionContent: "Please select the statement that best describes the status of the papers that have been filed?",
            answerType: "multchoice",
            defaultAnswerValue: ""
        })
    }

    handleQuestionOneOption2 = (value) => {
        this.setState({
            currentAnswerValue: value,
        });
        if(surveyQuestions[1].questionNum === 1.1){
            surveyQuestions.splice(1, 1);
        }
    }

    handleQuestionTwoResponse = (value) => {
        this.setState({
            currentAnswerValue: value
        });
    }



    handleQuestionThreeResponse = (value) => {
        this.setState({
            currentAnswerValue: value
        });
    }


    handleQuestionFourOption1 = (value) =>{
        this.setState({
            currentAnswerValue: value,
        });
        if(surveyQuestions[4].questionNum === 4.1 || surveyQuestions[4].questionNum === 4.2){
            surveyQuestions.splice(4, 1, {
                questionNum: 4.1,
                questionContent: "",
                answerType: "text",
                defaultAnswerValue: {
                    marriageDate: "",
                    marriagePlaceCity: "",
                    marriagePlaceCounty: "",
                    marriagePlaceState: "",
                    separationDate: "",
                }
            })
        }
        else{
            surveyQuestions.splice(4, 0, {
                questionNum: 4.1,
                questionContent: "",
                answerType: "text",
                defaultAnswerValue: {
                    marriageDate: "",
                    marriagePlaceCity: "",
                    marriagePlaceCounty: "",
                    marriagePlaceState: "",
                    separationDate: "",
                }
            })
        }
        
    }

    handleQuestionFourOption2 = (value) =>{
        this.setState({
            currentAnswerValue: value,
        });
        if(surveyQuestions[4].questionNum === 4.1 || surveyQuestions[4].questionNum === 4.2){
            surveyQuestions.splice(4, 1, {
                questionNum: 4.2,
                questionContent: "",
                answerType: "text",
                defaultAnswerValue: {
                    marriageDate: "",
                    marriagePlaceCity: "",
                    marriagePlaceCounty: "",
                    marriagePlaceState: "",
                    separationDate: "",
                }
            })
        }
        else{
            surveyQuestions.splice(4, 0, {
                questionNum: 4.2,
                questionContent: "",
                answerType: "text",
                defaultAnswerValue: {
                    marriageDate: "",
                    marriagePlaceCity: "",
                    marriagePlaceCounty: "",
                    marriagePlaceState: "",
                    separationDate: "",
                }
            })
        }
    }

    handleQuestionFourOption3 = (value) =>{
        this.setState({
            currentAnswerValue: value,
        });
        if(surveyQuestions[4].questionNum === 4.1 || surveyQuestions[4].questionNum === 4.2){
            surveyQuestions.splice(4, 1);
        }
    }

    handleQuestionFourOption4 = (value) =>{
        this.setState({
            currentAnswerValue: value,
        });
        if(surveyQuestions[4].questionNum === 4.1 || surveyQuestions[4].questionNum === 4.2){
            surveyQuestions.splice(4, 1);
        }
    }
    
    handleQuestionFourOption5 = (value) =>{
        this.setState({
            currentAnswerValue: value,
        });
        if(surveyQuestions[4].questionNum === 4.1 || surveyQuestions[4].questionNum === 4.2){
            surveyQuestions.splice(4, 1);
        }
    }
    
    handleQuestionFourOption6 = (value) =>{
        this.setState({
            currentAnswerValue: value,
        });
        if(surveyQuestions[4].questionNum === 4.1 || surveyQuestions[4].questionNum === 4.2){
            surveyQuestions.splice(4, 1);
        }
    }

    handleQ412Response = (value) => {
        this.setState({
            currentAnswerValue: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();


        const {currentQuestionIndex, currentAnswerValue} = this.state;

        surveyQuestions[currentQuestionIndex].defaultAnswerValue = currentAnswerValue;
        console.log(currentQuestionIndex, currentAnswerValue);

        if (currentQuestionIndex === surveyQuestions.length - 1) {
            console.log("Survey complete");
        } else {
            this.setState({
                currentQuestionIndex: currentQuestionIndex + 1,
                currentAnswerValue: surveyQuestions[currentQuestionIndex + 1].defaultAnswerValue
            });
        }
    }
    
   
    render() {
       
        const {currentQuestionIndex} = this.state;
        const currentQuestion = surveyQuestions[currentQuestionIndex];
        
        return (
            <div>
                
                <div>
                    <h1>Form</h1>
                </div>
                
                {this.props.user && (
                        <div>{this.props.user.name}</div>
                    )}


                <div>
                <form onSubmit={this.onSubmit}>
                    
                    <h5>Question {currentQuestionIndex + 1}</h5>
                    <Question id={`question-${currentQuestionIndex}`} content={currentQuestion.questionContent}></Question>

                    {currentQuestion.questionNum === 1 && (
                        <div>
                            <MultChoiceAnswer value="YES" text="YES"  handleMultChoiceResponse={this.handleQuestionOneOption1}></MultChoiceAnswer>
                            <MultChoiceAnswer value="NO" text= "NO"  handleMultChoiceResponse={this.handleQuestionOneOption2}></MultChoiceAnswer>
                        </div>
                    )}

                    {currentQuestion.questionNum === 1.1 && (
                        <div>
                            <TextAnswer value={this.state.currentAnswerValue} handleTextResponse={this.handleQuestionTwoResponse} answerLabel={currentQuestion.questionContent}></TextAnswer>
                        </div>
                    )}

                    {currentQuestion.questionNum === 2 && (
                        <TextAnswer value={this.state.currentAnswerValue} handleTextResponse={this.handleQuestionTwoResponse} answerLabel={currentQuestion.questionContent}></TextAnswer>
                    )}
                    
                    {currentQuestion.questionNum === 3 && (
                         <AddressAnswer value={this.state.currentAnswerValue} handleAddressResponse={this.handleQuestionThreeResponse}></AddressAnswer>
                    )}

                    {currentQuestion.questionNum === 4 && (
                         <div>
                            <MultChoiceAnswer value={currentQuestion.option1} text={currentQuestion.option1}  handleMultChoiceResponse={this.handleQuestionFourOption1} className="questionFour"></MultChoiceAnswer>
                            <MultChoiceAnswer value={currentQuestion.option2} text={currentQuestion.option2}  handleMultChoiceResponse={this.handleQuestionFourOption2} className="questionFour"></MultChoiceAnswer>
                            <MultChoiceAnswer value={currentQuestion.option3} text={currentQuestion.option3}  handleMultChoiceResponse={this.handleQuestionFourOption3} className="questionFour"></MultChoiceAnswer>
                            <MultChoiceAnswer value={currentQuestion.option4} text={currentQuestion.option4}  handleMultChoiceResponse={this.handleQuestionFourOption4} className="questionFour"></MultChoiceAnswer>
                            <MultChoiceAnswer value={currentQuestion.option5} text={currentQuestion.option5}  handleMultChoiceResponse={this.handleQuestionFourOption5} className="questionFour"></MultChoiceAnswer>
                            <MultChoiceAnswer value={currentQuestion.option6} text={currentQuestion.option6}  handleMultChoiceResponse={this.handleQuestionFourOption6} className="questionFour"></MultChoiceAnswer>
                         </div>
                    )}

                    {currentQuestion.questionNum === 4.1 && (
                        <div>
                            <Question412 value={this.state.currentAnswerValue} separation="false" handleQ412Response={this.handleQ412Response} answerLabel={currentQuestion.questionContent}></Question412>
                        </div>
                    )}

                    {currentQuestion.questionNum === 4.2 && (
                        <div>
                            <Question412 value={this.state.currentAnswerValue} separation="true" handleQ412Response={this.handleQ412Response} answerLabel={currentQuestion.questionContent}></Question412>
                        </div>
                    )}
                    
          
                    <button type="button" id="last-question-btn" onClick={this.handleLastQuestionBtn}>Go Back</button>
                    <button type="submit" id="next-question-btn">Next Question</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Form
