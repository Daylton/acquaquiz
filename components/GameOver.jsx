import { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";
import { ref, set } from "firebase/database";

import welldone from "../img/welldone.jpg";
import StartFirebase from "./firebaseConfig";
import { async } from "@firebase/util";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const [jogador, setJogador] = useState({
    name: "",
    score: "",
  });

  const [responseJogador, setResponseJogador] = useState({
    name: "",
    score: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setJogador({ ...jogador, [event.target.name]: value })
  }

  function writeUserData() {
    const db = StartFirebase();
    set(ref(db, "ranking"), {
      ...jogador
    });
  }

  const saveJogador = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://playtank-fa75d-default-rtdb.firebaseio.com/ranking.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jogador),
      },
    );
    const _jogador = await response.json();
    setResponseJogador(_jogador);
  };

  return (
    <div className="gameover" id="gameover">
      <h2 className="text-blue-500 text-xl">Fim de Jogo</h2>
      <p className="text-blue-500">Pontuação: {quizState.score}</p>
      <p className="text-blue-500">
        Você acertou {quizState.score} de 5 perguntas.
      </p>
      {/* <img className="img" src={welldone} alt="Fim do Quiz"></img> */}
      <div className="p-10">

        <div className="">
          <label>Insira seu nome</label>
        <div >
          <input 
          className="border mt-0 mb-4"
          type="text" 
          name="name"
          value={jogador.name}
          onChange={(e) => handleChange(e)}
           />
        </div>
        </div>
        <div className="">
          <label>Pontuação</label>
        <div >
          <input 
          className="border mt-0 mb-4 text-center"
          type="text" 
          name="name"
          value={quizState.score}
           />
        </div>
        </div>
        <div className="mb-10">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            // onClick={saveJogador}
          >
            Enviar pontuação
          </button>
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => dispatch({ type: "NEW_GAME" })}
          >
            Reiniciar Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
