//react, componentes, estáticos
import { useContext, useEffect } from 'react';
import { QuizContext } from '../context/quiz';

import Welcome from '../components/Welcome';
import Question from '../components/Question';
import GameOver from '../components/GameOver';

function Jogo() {
  const [quizState, dispatch] = useContext(QuizContext);  

  useEffect(()=>{
    dispatch({ type: "REORDER_QUESTIONS"});
    //embaralhar as perguntas
  }, [])

  return (
    <div className="jogo">
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}      
    </div>
  );
}

export default Jogo;
