import 'remixicon/fonts/remixicon.css'




const Sidebar = () => {
  return (
    <div className="w-64 m-4 border-gray-600 border-2 rounded-2xl bg-slate-800 pt-5 pl-5 ">
      <h1 className="text-2xl  font-bold mb-8">
        SnapSort
      </h1>

      <ul className="space-y-10  ">
        <li className="bg-purple-600 p-4 rounded-l-2xl flex items-center gap-2"><i className="ri-dashboard-horizontal-fill text-xl"></i> Dashboard</li>
        <li className='p-4 rounded-l-2xl flex items-center gap-2'><i className="ri-multi-image-fill text-xl"></i> Screenshots</li>
        <li className='p-4 rounded-l-2xl flex items-center gap-2'><i className="ri-price-tag-3-fill text-xl"></i> Categories</li>
        <li className='p-4 rounded-l-2xl flex items-center gap-2'><i className="ri-bookmark-3-fill text-xl"></i> Favorites</li>
        <li className='p-4 rounded-l-2xl flex items-center gap-2'><i className="ri-line-chart-fill text-xl"></i> Analytics</li>
        <li className='p-4 rounded-l-2xl flex items-center gap-2'><i className="ri-delete-bin-5-fill text-xl"></i>Trash</li>
      </ul>
    </div>
  );    
};

export default Sidebar;