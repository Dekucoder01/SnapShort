import Layout from "../components/layout/Layout";
import Statscards from "../components/dashboard/Statscards";
import RecentScreenshots from "../components/dashboard/RecentScreenshots";
import Rightpanel from "../components/dashboard/Rightpanel";

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex gap-6">
        <div className="flex-1">
          <Statscards />

          <RecentScreenshots />
        </div>

        <Rightpanel />
      </div>
    </Layout>
  );
};

export default Dashboard;