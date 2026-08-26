import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`,
    );
    setUserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-gray-900">
      <div className="w-10 h-10 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>

      <h3 className="text-gray-400 text-lg font-semibold">
        Bringing the pixels to life...
      </h3>
    </div>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (val, idx) {
      return (
        <div key={idx}>
          <Card val={val} index={idx} />
        </div>
      );
    });
  }  if (userData.length > 0) {
    printUserData = userData.map(function (val, idx) {
      return (
        <div key={idx}>
          <Card val={val} index={idx} />
        </div>
      );
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-slate-950 text-white px-5 py-8 md:px-10 lg:px-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold mb-3">
          Explore
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Image Gallery
        </h1>

        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Browse beautiful images fetched dynamically from the Picsum API.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {printUserData}
      </div>

      {/* Pagination */}
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 mt-12 pb-6">
        <button
          className="group flex items-center gap-2 px-5 py-2.5
                     bg-white/10 backdrop-blur-md
                     border border-white/10
                     text-gray-200 rounded-xl
                     font-medium
                     hover:bg-white/20
                     hover:border-white/20
                     active:scale-95
                     transition-all duration-200
                     disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={() => {
            if (index > 1) setIndex(index - 1);
          }}
          disabled={index === 1}
        >
          <span className="text-lg group-hover:-translate-x-1 transition-transform">
            ←
          </span>
          Previous
        </button>

        <div
          className="min-w-[90px] px-4 py-2.5 rounded-xl
                        bg-blue-600/20
                        border border-blue-500/30
                        text-blue-300
                        font-semibold text-center"
        >
          Page {index}
        </div>

        <button
          className="group flex items-center gap-2 px-5 py-2.5
                     bg-blue-600
                     text-white rounded-xl
                     font-medium shadow-lg shadow-blue-600/20
                     hover:bg-blue-500
                     hover:shadow-blue-500/30
                     active:scale-95
                     transition-all duration-200"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          Next
          <span className="text-lg group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;
