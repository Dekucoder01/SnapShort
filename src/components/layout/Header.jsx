const Header = () => {
  return (
    <header className="bg-slate-800 p-5 rounded-2xl m-4 flex justify-between">
      <input
        type="text"
        placeholder="Search..."
        className="bg-slate-700 p-2 rounded w-80"
      />

      <div>
        👤 Ensan
      </div>
    </header>
  );
};

export default Header;