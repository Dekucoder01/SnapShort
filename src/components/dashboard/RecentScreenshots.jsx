import { recentScreenshots } from "../../data/recentScreenshots";

const RecentScreenshots = () => {
  return (
    <div className=" border-2 rounded-2xl border-gray-600 ">
      <div className="flex justify-between p-2 pt-4 px-4">
        <h1 className="font-bold text-xl">Recent Screenshot</h1>
        <button className="  border-2 border-gray-700 text-xs p-2 rounded-xl ">View All</button>
      </div>


      <div className="flex justify-between p-2 my-3 border-y-gray-800 border-x-0 border-2">
        <p>Preview</p>
        <p>Title</p>
        <p>Data</p>
        <p>Category</p>
        <p>Tags</p>
        <p><i className="ri-arrow-right-s-line"></i></p>
      </div>

      <div className="fl">
      {recentScreenshots.map((item) => (
        <div key={item.id}>
          <img src={item.previewImg} alt={item.title} />

          <h2>{item.title}</h2>

          <p>{item.date}</p>

          <p>{item.category}</p>

          <div>
            {item.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default RecentScreenshots;