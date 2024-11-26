import { useState } from "react";

import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { WinnerModal } from "./components/WinnerModal"
import { TURNS } from "./logic/constants";
import { checkWinner, checkEndGame } from "./logic/board";

function App() {
  const [board, setBoard] = useState(Array(3 * 3).fill(null))
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(3 * 3).fill(null))
    setWinner(null)
    setTurn(TURNS.X)
  }

  const updateBoard = (index) => {
    //si ya tiene algo la posición no actualizamos
    if (board[index] || winner) return;
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    const newBoard = [...board];
    //cambio de turno
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(newTurn);

    // TODO: guardar partida con LocalStorage

    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar partida</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />

    </main>
  );
}

export default App;
