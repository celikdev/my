const Tab = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}) => {
  return (
    <div className="tabs">
      <input
        type="radio"
        id="css"
        name="fav_language"
        value="AnalysisBoard"
        onChange={(e) => setSelectedTab(e.target.value)}
        checked={selectedTab === "AnalysisBoard"}
      />
      <label htmlFor="css">Analiz Tahtası</label>
    </div>
  );
};

export default Tab;
