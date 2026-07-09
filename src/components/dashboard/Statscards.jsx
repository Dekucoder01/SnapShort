const Statscards = () => {
  return (
    <div className="grid grid-cols-4 gap-5 mt-14 ml-3 mb-6">

      <div className="bg-slate-900 p-5 border-2 border-gray-700 rounded-xl flex items-center justify-between">
        <div>
          <p className="text-gray-400">Screenshots</p>
          <h1 className="text-3xl font-bold text-white">1,121</h1>
        </div>
        <i className="ri-gallery-fill text-4xl text-blue-400"></i>
      </div>

      <div className="bg-slate-900 p-5 border-2 border-gray-700 rounded-xl flex items-center justify-between"> 
        <div>
            <p className="text-gray-400">Ai Organized</p>
          <h1 className="text-3xl font-bold text-white">930</h1>
        </div>
          <i className="ri-image-ai-line  text-4xl text-blue-400"></i>
         </div>

       <div className="bg-slate-900 p-5 border-2 border-gray-700 rounded-xl flex items-center justify-between"> 
        <div>
            <p className="text-gray-400">Categories</p>
          <h1 className="text-3xl font-bold text-white">40</h1>
        </div>
          <i className="ri-book-shelf-line  text-4xl text-blue-400"></i>
         </div>

        <div className="bg-slate-900 p-5 border-2 border-gray-700 rounded-xl flex items-center justify-between"> 
        <div>
            <p className="text-gray-400">Storage used</p>
          <h1 className="text-3xl font-bold text-white">900</h1>
        </div>
          <i className="ri-hard-drive-3-fill  text-4xl text-blue-400"></i>
         </div>
    </div>
  );
};

export default Statscards;
