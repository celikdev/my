const Tab = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}) => {
  //   <input
  //     type="radio"
  //     id="css"
  //     name="fav_language"
  //     value="UKD"
  //     onChange={(e) => setSelectedTab(e.target.value)}
  //     checked={selectedTab === "UKD"}
  //   />
  //   <label htmlFor="css">UKD Hesaplama</label>
  return (
    <div className="tabs">
      <input
        type="radio"
        id="cssa"
        name="fav_languagez"
        value="AnalysisBoard"
        onChange={(e) => setSelectedTab(e.target.value)}
        checked={selectedTab === "AnalysisBoard"}
      />
      <label htmlFor="cssa">Analiz Tahtası</label>
    </div>
  );
};

export default Tab;
