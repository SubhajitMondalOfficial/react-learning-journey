const Card = ({ val, index }) => {
  return (
    <a href={val.url} target="_blank" rel="noreferrer" className="group block">
      <div
        className="bg-white/10 backdrop-blur-md
                   border border-white/10
                   rounded-2xl overflow-hidden
                   shadow-lg shadow-black/20
                   hover:-translate-y-2
                   hover:border-white/20
                   hover:shadow-2xl hover:shadow-blue-900/20
                   transition-all duration-300"
      >
        {/* Image */}
        <div className="h-64 overflow-hidden">
          <img
            className="h-full w-full object-cover
                       group-hover:scale-110
                       transition-transform duration-500"
            src={val.download_url}
            alt={val.author}
            loading="lazy"
          />
        </div>

        {/* Card information */}
        <div className="p-4">
          <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-1">
            Photographer
          </p>

          <h2 className="text-lg font-semibold text-white truncate">
            {val.author}
          </h2>

          <div className="flex items-center justify-between mt-3">
            <span className="text-sm text-gray-400">Image #{index + 1}</span>

            <span className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
              View →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
