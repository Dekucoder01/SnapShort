import { recentScreenshots } from "../../Data/recentScreenshots";
import React from "react";

const categoryColors = {
  Coding: "bg-blue-500/20 text-blue-400",
  "UI Design": "bg-pink-500/20 text-pink-400",
  Portfolio: "bg-green-500/20 text-green-400",
  "Web App": "bg-orange-500/20 text-orange-400",
};

const RsData = () => {
  return (
    <div id="no-scrollbar" className="h-96  overflow-y-auto">
      {recentScreenshots.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-6 items-center px-4 py-4 border-b border-gray-700 hover:bg-gray-800 transition"
        >
          <img
            src={item.previewImg}
            alt={item.title}
            className="w-16 h-10 rounded object-cover"
          />

          <h2 className="font-medium">{item.title}</h2>

          <p className="text-gray-400">{item.date}</p>

          <p
            className={`p-2 rounded-xl text-xs font-semibold w-fit ${
              categoryColors[item.category] || "bg-gray-700 text-gray-300"
            }`}
          >
            {item.category}
          </p>

          <div className="flex gap-2 flex-wrap">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <button className="justify-self-end text-xl hover:text-blue-400">
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default RsData;
