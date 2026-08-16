import { useState } from "react";
import { useDispatch } from "react-redux";
import { Search, X, ArrowUpRight } from "lucide-react";
import { setQuery } from "../features/searchSlice";

const SearchBar = () => {
  const [query, setQueryy] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const trimmedQuery = query.trim();

    if (trimmedQuery.length > 0) {
      dispatch(setQuery(trimmedQuery));
    }

    setQueryy("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="
        group relative
        flex w-full items-center
        rounded-2xl
        border border-white/10
        bg-white/[0.06]
        p-2
        shadow-2xl shadow-black/20
        backdrop-blur-xl
        transition-all duration-300

        focus-within:border-blue-400/40
        focus-within:bg-white/[0.08]
        focus-within:shadow-blue-500/10
        focus-within:ring-4
        focus-within:ring-blue-500/5
      "
    >
      {/* Search icon */}
      <div
        className="
          ml-3 flex h-11 w-11 shrink-0
          items-center justify-center
          rounded-xl
          bg-white/5
          text-white/40
          transition-all duration-300
          group-focus-within:bg-blue-500/10
          group-focus-within:text-blue-400
        "
      >
        <Search size={21} strokeWidth={2} />
      </div>

      {/* Input */}
      <input
        required
        type="text"
        placeholder="Search photos, videos, GIFs..."
        value={query}
        onChange={(e) => setQueryy(e.target.value)}
        className="
          min-w-0 flex-1
          bg-transparent
          px-4 py-3
          text-base
          text-white
          placeholder:text-white/30
          outline-none
        "
      />

      {/* Clear button */}
      {query && (
        <button
          type="button"
          onClick={() => setQueryy("")}
          className="
            mr-2
            flex h-9 w-9
            shrink-0
            items-center justify-center
            rounded-full
            text-white/30
            transition-all duration-200
            hover:bg-white/10
            hover:text-white
            active:scale-90
          "
          title="Clear"
        >
          <X size={17} />
        </button>
      )}

      {/* Search button */}
      <button
        type="submit"
        className="
          flex shrink-0
          items-center gap-2
          rounded-xl
          bg-white
          px-5 py-3
          text-sm font-semibold
          text-black

          shadow-lg shadow-black/20

          transition-all duration-300
          hover:-translate-y-0.5
          hover:bg-blue-50
          hover:shadow-xl

          active:translate-y-0
          active:scale-95
        "
      >
        <span className="hidden sm:block">Search</span>
        <ArrowUpRight size={17} />
      </button>
    </form>
  );
};

export default SearchBar;