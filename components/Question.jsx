import {useContext} from 'react';
import {QuizContext} from '../context/quiz';

import Option from './Option';

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onSelectOption = (option)=>{
      dispatch({
        type: "CHECK_ANSWER",
        payload: {answer: currentQuestion.answer, option},
      });
    };

  return (
    <div id="Question">
    <p className='text-white font-semibold'>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
    <h2 className='text-blue-900' >{currentQuestion.question}</h2>
    <div id="option-container" className='text-white' >
        {currentQuestion.options.map((option)=>(
          <Option 
          option={option} 
          key={option} 
          answer = {currentQuestion.answer}
          selectOption = {()=> onSelectOption(option)}
          />
        ))}
    </div>
    {quizState.answerSelected &&(
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick ={()=> dispatch({type: "CHANGE_QUESTION"})}>
      Continuar
    </button>
    )}
  </div>

  );

};

export default Question;