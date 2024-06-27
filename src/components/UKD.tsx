import { useState } from "react";

const UKD = () => {
  const [playerUKD, setPlayerUKD] = useState<string>("");
  const [opponentUKD, setOpponentUKD] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const [calculated, setCalculated] = useState({
    player_result: "",
    rival_result: "",
  });

  const calculateUKD = async () => {
    // Send Form Data to Backend
    const formData = new FormData();
    formData.append("player_ukd", playerUKD);
    formData.append("rival_ukd", opponentUKD);
    formData.append("result", result);

    const response = await fetch(
      "https://www.mehmetaltinok.com/ukd-hesaplama/backend-calc.php",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    if (data.error) {
      alert(data.error);
      return;
    } else {
      setCalculated(data);
    }
  };
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="font-extrabold md:text-xl text-white/80">UKD Hesaplama</h1>
      {calculated.player_result && calculated.rival_result ? (
        <div className="flex flex-col gap-2">
          <h1 className="text-white/80 font-medium">
            Oyuncunun yeni UKD'si:{" "}
            <span className="font-extrabold italic underline underline-offset-2">
              {parseInt(playerUKD) + parseFloat(calculated.player_result)} ({" "}
              {calculated.player_result} )
            </span>
          </h1>
          <h1 className="text-white/80 font-medium">
            Rakibin Yeni UKD'si:{" "}
            <span className="font-extrabold italic underline underline-offset-2">
              {parseInt(opponentUKD) + parseFloat(calculated.rival_result)} ({" "}
              {calculated.rival_result} )
            </span>
          </h1>
          <button
            onClick={() => {
              setPlayerUKD("");
              setOpponentUKD("");
              setResult("");
              setCalculated({
                player_result: "",
                rival_result: "",
              });
            }}
            className="border-2 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700 w-1/2 mx-auto text-white/80 rounded-lg py-2 text-sm font-semibold transition-colors duration-300 hover:bg-white/80 hover:text-primary"
          >
            Yeniden Hesapla
          </button>
        </div>
      ) : (
        <form
          className="flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            calculateUKD();
          }}
        >
          <input
            type="number"
            value={playerUKD}
            onChange={(e) => setPlayerUKD(e.target.value)}
            placeholder="Oyuncu UKD'si"
            className="border-2 rounded-lg px-4 py-2 text-sm bg-transparent text-white/80 outline-none"
          />
          <input
            type="number"
            value={opponentUKD}
            onChange={(e) => setOpponentUKD(e.target.value)}
            placeholder="Rakip UKD'si"
            className="border-2 rounded-lg px-4 py-2 text-sm bg-transparent text-white/80 outline-none"
          />
          <select
            value={result}
            onChange={(e) => setResult(e.target.value)}
            className="border-2 rounded-lg px-4 py-2 text-sm bg-transparent text-white/80 outline-none"
          >
            <option className="bg-primary">Sonuç</option>
            <option defaultChecked className="bg-primary" value="1">
              Kazanma
            </option>
            <option className="bg-primary" value="0.5">
              Berabere
            </option>
            <option className="bg-primary" value="0">
              Kaybetme
            </option>
          </select>
          <button
            type="submit"
            disabled={!playerUKD || !opponentUKD || !result}
            className="border-2 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700 w-1/2 mx-auto text-white/80 rounded-lg py-2 text-sm font-semibold transition-colors duration-300 hover:bg-white/80 hover:text-primary"
          >
            Hesapla
          </button>
        </form>
      )}
    </div>
  );
};

export default UKD;
