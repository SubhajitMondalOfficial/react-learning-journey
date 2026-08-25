import { useSelector, useDispatch } from "react-redux";
import { Trash2, Bookmark, Play, ExternalLink } from "lucide-react";
import { clearCollection, removeCollection, removeToast } from "../features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((State) => State.collection.items);
  const dispatch = useDispatch();

  const removefromCollection = (item) => {
    dispatch(removeCollection(item));
    dispatch(removeToast());
  };


  const removeAllItem = () => {
    dispatch(clearCollection())
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070b14] px-6 py-10 text-white md:px-10">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute bottom-[-200px] left-1/3 h-[450px] w-[450px] rounded-full bg-pink-600/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {/* Small label */}
            <div className="mb-3 flex items-center gap-2 text-blue-400">
              <Bookmark size={17} />
              <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                Your Collection
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Saved Media
            </h1>

            <p className="mt-3 max-w-lg text-sm leading-6 text-white/40">
              Everything you've saved in one place. Explore your favorite
              photos, videos and GIFs whenever you wants.
            </p>
          </div>

          <div>
            <div>
              <button
              onClick={() => {
                removeAllItem()
              }}
                className="
        group cursor-pointer
        flex items-center gap-2
        rounded-xl
        border border-red-400/20
        bg-red-500/5
        px-4 py-2.5
        text-sm font-medium
        text-red-400
        backdrop-blur-xl

        shadow-lg shadow-black/10

        transition-all duration-300 ease-out

        hover:border-red-400/40
        hover:bg-red-500/10
        hover:text-red-300
        hover:shadow-red-500/10

        active:scale-95
      "
              >
                <Trash2
                  size={16}
                  className="
          transition-transform duration-300
          group-hover:scale-110
        "
                />

                <span>Clear Collections</span>
              </button>
            </div>

            <div

              className=" 
      flex w-fit items-center gap-3
      rounded-2xl mt-5
      border border-white/10
      bg-white/[0.04]
      px-5 py-3
      shadow-xl shadow-black/20
      backdrop-blur-xl
    "
            >
              <div
                className="
        flex h-10 w-10 items-center justify-center
        rounded-xl
        bg-blue-500/10
        text-blue-400
      "
              >
                <Bookmark size={18} />
              </div>

              <div>
                <p className="text-xl font-bold leading-none">
                  {collection.length}
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/30">
                  Saved items
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= EMPTY STATE ================= */}
        {collection.length === 0 ? (
          <div
            className="
            flex min-h-[420px]
            flex-col items-center justify-center
            rounded-3xl
            border border-white/10
            bg-white/[0.025]
            px-6
            text-center
            shadow-2xl shadow-black/20
            backdrop-blur-xl
          "
          >
            <div
              className="
              mb-6
              flex h-20 w-20
              items-center justify-center
              rounded-3xl
              border border-white/10
              bg-gradient-to-br from-blue-500/10 to-violet-500/10
              shadow-lg shadow-blue-500/5
            "
            >
              <Bookmark size={32} className="text-white/30" />
            </div>

            <h2 className="text-2xl font-semibold">Your collection is empty</h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
              Start exploring and save the media you love. Your saved photos,
              videos and GIFs will appear here.
            </p>
          </div>
        ) : (
          /* ================= COLLECTION GRID ================= */
          <div
            className="
            grid
            grid-cols-[repeat(auto-fit,minmax(260px,1fr))]
            gap-7
          "
          >
            {collection.map((item, idx) => {
              return (
                <div key={idx} className="flex justify-center">
                  {/* ================= CARD ================= */}
                  <div
                    className="
                      group relative
                      h-[370px] w-[280px]
                      overflow-hidden
                      rounded-3xl

                      border border-white/10
                      bg-zinc-900

                      shadow-xl
                      shadow-black/30

                      transition-all
                      duration-500
                      ease-out

                      hover:-translate-y-3
                      hover:border-white/20
                      hover:shadow-2xl
                      hover:shadow-black/50
                    "
                  >
                    {/* Media */}
                    <a
                      target="_blank"
                      href={item.url}
                      className="absolute inset-0 block overflow-hidden"
                    >
                      {item.type === "photo" && (
                        <img
                          className="
                            h-full w-full object-cover
                            transition-transform
                            duration-700
                            ease-out
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
                            transition-transform
                            duration-700
                            ease-out
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
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-110
                          "
                          src={item.src}
                          alt={item.title}
                        />
                      )}
                    </a>

                    {/* ================= GRADIENT ================= */}
                    <div
                      className="
                      pointer-events-none
                      absolute inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/20
                      to-transparent
                      opacity-90
                    "
                    />

                    {/* ================= TOP BADGE ================= */}
                    <div
                      className="
                      absolute left-4 top-4
                      flex items-center gap-2
                      rounded-full
                      border border-white/15
                      bg-black/40
                      px-3 py-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-white
                      backdrop-blur-xl
                    "
                    >
                      <span
                        className="
                        h-1.5 w-1.5
                        rounded-full
                        bg-blue-400
                        shadow-[0_0_8px_rgba(96,165,250,0.8)]
                      "
                      />

                      {item.type}
                    </div>

                    {/* ================= VIDEO ICON ================= */}
                    {item.type === "video" && (
                      <div
                        className="
                        absolute right-4 top-4
                        flex h-10 w-10
                        items-center justify-center
                        rounded-full
                        border border-white/20
                        bg-black/40
                        text-white
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:bg-white/20
                      "
                      >
                        <Play size={16} fill="currentColor" />
                      </div>
                    )}

                    {/* ================= OPEN ICON ================= */}
                    <div
                      className="
                      absolute right-4 bottom-24
                      flex h-9 w-9
                      translate-y-2
                      items-center justify-center
                      rounded-full
                      border border-white/20
                      bg-black/30
                      text-white/70
                      opacity-0
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                    >
                      <ExternalLink size={15} />
                    </div>

                    {/* ================= BOTTOM CONTENT ================= */}
                    <div
                      className="
                      absolute bottom-0 left-0 w-full
                      p-5
                    "
                    >
                      <div
                        className="
                        mb-4
                        h-px
                        w-full
                        bg-white/10
                      "
                      />

                      <div
                        className="
                        flex
                        items-end
                        justify-between
                        gap-3
                      "
                      >
                        {/* Title */}
                        <h2
                          className="
                          line-clamp-2
                          flex-1
                          text-base
                          font-semibold
                          capitalize
                          leading-snug
                          text-white
                          drop-shadow-lg
                        "
                        >
                          {item.title || `${item.type} result`}
                        </h2>

                        {/* Delete */}
                        <button
                          onClick={() => {
                            removefromCollection(item);
                          }}
                          className="
                            flex
                            h-10 w-10
                            shrink-0
                            items-center
                            justify-center
                            cursor-pointer

                            rounded-full
                            border
                            border-red-400/20

                            bg-black/40
                            text-white/60

                            backdrop-blur-xl

                            transition-all
                            duration-300

                            hover:scale-110
                            hover:border-red-400/50
                            hover:bg-red-500/20
                            hover:text-red-400

                            active:scale-90
                          "
                          title="Remove from collection"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>

                      {/* Bottom info */}
                      <div
                        className="
                        mt-3
                        flex
                        items-center
                        gap-2
                        text-[11px]
                        text-white/40
                      "
                      >
                        <span
                          className="
                          h-1.5 w-1.5
                          rounded-full
                          bg-emerald-400
                          shadow-[0_0_7px_rgba(52,211,153,0.7)]
                          "
                        />
                        Saved to collection
                      </div>
                    </div>

                    {/* ================= HOVER BORDER ================= */}
                    <div
                      className="
                      pointer-events-none
                      absolute inset-0
                      rounded-3xl
                      border border-transparent
                      transition-all duration-500
                      group-hover:border-white/20
                    "
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
