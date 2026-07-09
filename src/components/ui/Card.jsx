const Card = ({ children }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-5">
      {children}
    </div>
  );
};

export default Card;