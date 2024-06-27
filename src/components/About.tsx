import { useState } from "react";
import { Card } from "./ui";

const calculateUKDChange = (
  playerUKD: number,
  opponentUKD: number,
  score: number
) => {
  const K = 20; // Development coefficient

  // Adjust for the maximum difference of 350
  const adjustedOpponentUKD =
    opponentUKD > playerUKD + 350
      ? playerUKD + 350
      : opponentUKD < playerUKD - 350
      ? playerUKD - 350
      : opponentUKD;

  const expectedScore =
    1 / (1 + 10 ** ((adjustedOpponentUKD - playerUKD) / 400));
  const delta = K * (score - expectedScore);

  return delta;
};

const About = () => {
  const [player1UKD, setPlayer1UKD] = useState<number>(1000);
  const [player2UKD, setPlayer2UKD] = useState<number>(2000);
  const [result, setResult] = useState<number>(1); // 1: Win, 0.5: Draw, 0: Loss
  const [newPlayer1UKD, setNewPlayer1UKD] = useState<number | null>(null);
  const [newPlayer2UKD, setNewPlayer2UKD] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const deltaPlayer1 = calculateUKDChange(player1UKD, player2UKD, result);
    const deltaPlayer2 = calculateUKDChange(player2UKD, player1UKD, 1 - result);

    setNewPlayer1UKD(player1UKD + deltaPlayer1);
    setNewPlayer2UKD(player2UKD + deltaPlayer2);
  };

  return (
    <Card className="w-[100%] h-[100%]">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Player 1 UKD:
            <input
              type="number"
              value={player1UKD}
              onChange={(e) => setPlayer1UKD(Number(e.target.value))}
            />
          </label>
        </div>
        <div>
          <label>
            Player 2 UKD:
            <input
              type="number"
              value={player2UKD}
              onChange={(e) => setPlayer2UKD(Number(e.target.value))}
            />
          </label>
        </div>
        <div>
          <label>
            Result:
            <select
              value={result}
              onChange={(e) => setResult(Number(e.target.value))}
            >
              <option value={1}>Player 1 Win</option>
              <option value={0.5}>Draw</option>
              <option value={0}>Player 2 Win</option>
            </select>
          </label>
        </div>
        <button type="submit">Calculate New UKDs</button>
      </form>
      {newPlayer1UKD !== null && newPlayer2UKD !== null && (
        <div>
          <h3>New Player 1 UKD: {newPlayer1UKD.toFixed(2)}</h3>
          <h3>New Player 2 UKD: {newPlayer2UKD.toFixed(2)}</h3>
        </div>
      )}
    </Card>
  );
};

export default About;
