import { useEffect, useState } from "react";
import Chessground from "@react-chess/chessground";

import "chessground/assets/chessground.base.css";
import "chessground/assets/chessground.brown.css";
import "chessground/assets/chessground.cburnett.css";

import { Chess, SQUARES, Square } from "chess.js";
import { ButtonGroup, Card } from "./ui";
import { MoveParams } from "../types";

const AnalysisBoard = () => {
  const [boardRotation, setBoardRotation] = useState<boolean>(true);
  const [chess, setChess] = useState(new Chess());
  const [fen, setFen] = useState(chess.fen());
  const [history, setHistory] = useState<string[]>([chess.fen()]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);

  const onMove = ({ orig, dest }: MoveParams) => {
    const move = chess.move({ from: orig, to: dest });
    if (move) {
      const newHistory = history.slice(0, currentMoveIndex + 1);
      newHistory.push(chess.fen());
      setHistory(newHistory);
      setCurrentMoveIndex(newHistory.length - 1);
      setFen(chess.fen());
      setChess(new Chess(chess.fen()));
    }
  };

  const undoMove = () => {
    if (currentMoveIndex > 0) {
      const newIndex = currentMoveIndex - 1;
      const newFen = history[newIndex];
      setChess(new Chess(newFen));
      setFen(newFen);
      setCurrentMoveIndex(newIndex);
    }
  };

  const redoMove = () => {
    if (currentMoveIndex < history.length - 1) {
      const newIndex = currentMoveIndex + 1;
      const newFen = history[newIndex];
      setChess(new Chess(newFen));
      setFen(newFen);
      setCurrentMoveIndex(newIndex);
    }
  };

  const toDests = (chess: Chess) => {
    const dests = new Map();
    SQUARES.forEach((s: Square) => {
      const ms = chess.moves({ square: s, verbose: true });
      if (ms.length) {
        dests.set(
          s,
          ms.map((m: any) => m.to)
        );
      }
    });
    return dests;
  };

  console.log(chess.fen());

  const checkStatus = () => {
    if (chess.isCheck()) {
      return chess.turn() === "w" ? "white" : "black";
    }
    return undefined;
  };

  const responsiveWidth = window.innerWidth > 768 ? 680 : 320;
  const responsiveHeight = window.innerWidth > 768 ? 680 : 320;

  return (
    <Card
      id="chessboard_wrapper"
      className="w-[100%] flex flex-col items-center justify-center gap-4"
    >
      <Chessground
        width={responsiveWidth}
        height={responsiveHeight}
        config={{
          check: checkStatus(),
          orientation: boardRotation ? "white" : "black",
          fen: fen,
          turnColor: chess.turn() === "w" ? "white" : "black",
          highlight: {
            lastMove: false,
            check: true,
          },
          events: {
            move(orig, dest) {
              onMove({ orig, dest });
            },
          },
          movable: {
            free: false,
            color: chess.turn() === "w" ? "white" : "black",
            dests: toDests(chess),
          },
        }}
      />
      <ButtonGroup
        currentMoveIndex={currentMoveIndex}
        historyLength={history.length}
        rotation={boardRotation}
        setRotation={setBoardRotation}
        undo={undoMove}
        redo={redoMove}
      />
    </Card>
  );
};

export default AnalysisBoard;
