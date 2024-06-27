import { OpenIcon } from "../../assets/icons";

const Tab = ({
  // selectedTab,
  setSelectedTab,
}: {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}) => {
  return (
    <div className="flex w-full items-center gap-2 justify-center h-3/5 border-2 p-1 text-sm rounded-xl">
      <a
        href="https://ukd.tsf.org.tr/ukdsorgulama.php"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-1/2 items-center transition-colors duration-300 hover:bg-white hover:text-primary group h-full justify-center font-semibold text-white rounded-lg"
      >
        UKD Sorgulama{" "}
        <OpenIcon
          width="20"
          height="20"
          className="ml-2 fill-white transition-colors duration-300 group-hover:fill-primary"
        />
      </a>
      <button
        onClick={() => setSelectedTab("AnalysisBoard")}
        className="flex bg-white w-1/2 h-full text-secondary items-center justify-center font-semibold rounded-lg"
      >
        Analiz Tahtası
      </button>
    </div>
  );
};

export default Tab;
