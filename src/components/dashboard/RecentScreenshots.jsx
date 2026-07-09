import RsData from "./RsData";
import RsHeader from "./RsHeader";
import RsTableHeading from "./RsTableHeading";

const RecentScreenshots = () => {
  return (
    <div className="border-2 bg-gray-900 border-gray-700  ml-3 rounded-2xl">

        <RsHeader/>
        <RsTableHeading/>
        <RsData/>
        </div>
  );
};

export default RecentScreenshots;