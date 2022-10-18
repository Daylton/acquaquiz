import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/question.png";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="welcome" id="welcome">
      <h2 className="text-blue-500 text-xl">Seja Bem-Vindo</h2>
      <p className="text-blue-500">Clique no botão abaixo para começar:</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={() => dispatch({ type: "CHANCE_STATE" })}>
        Iniciar
      </button>
      {/* <img src="../img/question.png" alt="Inicio do Quizz" /> */}
    </div>
  );
};

export default Welcome;
