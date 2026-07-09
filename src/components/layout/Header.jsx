const Header = () => {
  return (
    <header className="bg-gray-900 p-3.5  flex justify-between">
      <div className="relative w-96">
  <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>

  <input
    type="text"
    placeholder="Search screenshots..."
    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none"
  />
</div>

      <div className="inline-flex  space-x-4 items-center  mr-3 p-1 rounded-2xl">
        <img src="https://i.pinimg.com/736x/ac/4b/df/ac4bdf0c8a175ffb9044cdf170ed8243.jpg" className="w-12 h-12 rounded-full" alt="" />
      </div>
    </header>
  );
};

export default Header;