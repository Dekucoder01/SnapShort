const Rightpanel = () => {
  return (
    <div className="space-y-5  mt-5">
      {/* Today's Summary */}
      <div className="w-80 bg-slate-900 border-2 border-gray-700 rounded-xl p-5">
        <h1 className="text-2xl font-bold mb-5">Today's Summary</h1>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="flex items-center gap-2">
              <i className="ri-camera-fill text-2xl text-blue-400"></i>
              Screenshots Added
            </p>
            <span className="font-semibold">28</span>
          </div>

          <div className="flex justify-between items-center">
            <p className="flex items-center gap-2">
              <i className="ri-ai-generate text-2xl text-green-400"></i>
              AI Organized
            </p>
            <span className="font-semibold">26</span>
          </div>

          <div className="flex justify-between items-center">
            <p className="flex items-center gap-2">
              <i className="ri-delete-bin-6-fill text-2xl text-red-400"></i>
              Duplicates Removed
            </p>
            <span className="font-semibold">4</span>
          </div>

          <div className="flex justify-between items-center">
            <p className="flex items-center gap-2">
              <i className="ri-hard-drive-fill text-2xl text-yellow-400"></i>
              Storage Saved
            </p>
            <span className="font-semibold">320 MB</span>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="w-80 bg-slate-800 rounded-xl p-5">
        <h1 className="text-xl font-bold">Recent Activity</h1>
      </div>
    </div>
  );
};

export default Rightpanel;