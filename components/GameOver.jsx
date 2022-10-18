import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import welldone from "../img/welldone.jpg";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="gameover" id="gameover">
      <h2 className="text-blue-500 text-xl">Fim de Jogo</h2>
      <p className="text-blue-500">Pontuação: {quizState.score}</p>
      <p className="text-blue-500">
        Você acertou {quizState.score} de 5{" "}
        perguntas.
      </p>
      {/* <img className="img" src={welldone} alt="Fim do Quiz"></img> */}
      <div className="p-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => dispatch({ type: "NEW_GAME" })}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default GameOver;
