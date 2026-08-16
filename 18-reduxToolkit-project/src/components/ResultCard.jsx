import { Bookmark } from "lucide-react";
import {useDispatch} from 'react-redux'
import { addCollection, addedToast } from "../features/collectionSlice";


const ResultCard = ({ item }) => {

  const dispatch = useDispatch()

  const addToCollection = (item) => { 
   dispatch(addCollection(item))
   dispatch(addedToast())
  }
  return (
    <div
      className="
        group relative
        w-[280px] h-[360px]
        overflow-hidden
        rounded-2xl
        bg-zinc-900
        border border-white/10
        shadow-lg shadow-black/20
        transition-all duration-500 ease-out
        hover:-translate-y-2
        hover:shadow-2xl hover:shadow-black/40
      "
    >
      {/* Media */}
      <a
        target="_blank"
        href={item.url}
        className="h-full w-full overflow-hidden"
      >
        {item.type === "photo" && (
          <img
            className="
              h-full w-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-110
            "
            src={item.src}
            alt={item.title}
          />
        )}

        {item.type === "video" && (
          <video
            className="
              h-full w-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-110
            "
            autoPlay
            loop
            muted
            playsInline
            src={item.src}
          />
        )}

        {item.type === "gif" && (
          <img
            className="
              h-full w-full object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-110
            "
            src={item.src}
            alt={item.title}
          />
        )}
      </a>

      {/* Dark gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/90
          via-black/20
          to-transparent
          opacity-90
        "
      />

      {/* Type badge */}
      <div
        className="
          absolute top-4 left-4
          rounded-full
          border border-white/20
          bg-black/40
          px-3 py-1
          text-[10px] font-bold
          uppercase tracking-widest
          text-white
          backdrop-blur-md
        "
      >
        {item.type}
      </div>

      {/* Video indicator */}
      {item.type === "video" && (
        <div
          className="
            absolute top-4 right-4
            flex h-9 w-9
            items-center justify-center
            rounded-full
            bg-white/20
            text-white
            backdrop-blur-md
            border border-white/20
            transition-all duration-300
            group-hover:scale-110
            group-hover:bg-white/30
          "
        >
          ▶
        </div>
      )}

      {/* Bottom content */}
      <div
        className="
          absolute bottom-0 left-0 w-full
          p-5 pt-16
          translate-y-2
          transition-transform duration-500
          group-hover:translate-y-0
        "
      >
       <div className="flex items-end justify-between gap-4">
  <h2
    className="
      line-clamp-2
      text-lg
      font-semibold
      capitalize
      leading-snug
      text-white
      drop-shadow-lg
    "
  >
    {item.title || `${item.type} result`}
  </h2>

  <button
    onClick={() => {
      addToCollection(item)
    }}
    className="
      group/save
      flex shrink-0 items-center justify-center
      h-10 w-10
      rounded-full
      border border-white/20
      bg-white/10
      text-white
      backdrop-blur-md
      shadow-lg
      transition-all duration-300
      hover:scale-110
      active:bg-white/20
      active:border-white/40
      active:scale-95
    "
    title="Save"
  >
    <Bookmark
      size={19}
      strokeWidth={1.8}
      className="
        transition-all duration-300
        group-hover/save:fill-white
      "
    />
  </button>
</div>

        {/* Small bottom detail */}
        <div
          className="
            mt-3
            flex items-center gap-2
            text-xs
            text-white/60
            opacity-0
            transition-opacity duration-500
            group-hover:opacity-100
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          Explore media
        </div>
      </div>

      {/* Hover border */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-2xl
          border border-white/0
          transition-all duration-500
          group-hover:border-white/20
        "
      />
    </div>
  );
};

export default ResultCard;
