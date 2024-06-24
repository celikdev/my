import { NextIcon, TurnIcon, UndoIcon } from "../../assets/icons";
import Card from "./Card";

interface ButtonGroupProps {
  rotation: boolean;
  setRotation: (rotation: boolean) => void;
  undo: () => void;
  redo: () => void;
  currentMoveIndex: number;
  historyLength: number;
}

const ButtonGroup = ({
  rotation,
  setRotation,
  undo,
  redo,
  currentMoveIndex,
  historyLength,
}: ButtonGroupProps) => {
  return (
    <Card className="md:w-1/4 w-1/2  flex items-center justify-center !bg-primary">
      <div className="flex items-center justify-between w-full">
        <button
          disabled={currentMoveIndex <= 0}
          className="group"
          onClick={undo}
        >
          <UndoIcon className="fill-gray-400 transition-colors duration-100 group-hover:fill-gray-300 group-disabled:fill-gray-600" />
        </button>
        <button onClick={() => setRotation(!rotation)} className="group">
          <TurnIcon className="stroke-gray-400 transition-colors duration-100 group-hover:stroke-gray-300" />
        </button>
        <button
          disabled={currentMoveIndex === historyLength - 1}
          className="group"
          onClick={redo}
        >
          <NextIcon className="fill-gray-400 transition-colors duration-100 group-hover:fill-gray-300 group-disabled:fill-gray-600" />
        </button>
      </div>
    </Card>
  );
};

export default ButtonGroup;
