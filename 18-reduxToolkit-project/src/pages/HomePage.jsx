 
import { useSelector } from "react-redux";
import {
  Search, 
  Sparkles,
  ArrowRight,
} from "lucide-react";

import ResultGrid from "../components/ResultGrid";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs"; 

const HomePage = () => {
  const { query } = useSelector((state) => state.search); 

  return (
    <div className="min-h-screen bg-[#070b14] text-white">

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
      </div>
 
      {/* Hero */}
      <main className="relative z-10">

        <section className="px-6 pt-6 pb-10 md:pt-12">

          <div className="mx-auto max-w-4xl text-center">

            {/* Small badge */}
            <div
              className="
                mx-auto mb-6
                inline-flex items-center gap-2
                rounded-full
                border border-blue-400/20
                bg-blue-400/5
                px-4 py-2
                text-xs font-medium
                text-blue-300
                backdrop-blur-md
              "
            >
              <Sparkles size={14} />
              Discover. Search. Save..
            </div>

            {/* Heading */}
            <h2
              className="
                text-4xl font-bold tracking-tight
                sm:text-5xl md:text-6xl
                leading-[1.05]
              "
            >
              Search the world's
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-blue-400
                  via-violet-400
                  to-pink-400
                  bg-clip-text
                  text-transparent
                "
              >
                visual universe.
              </span>
            </h2>

            <p
              className="
                mx-auto mt-6 max-w-2xl
                text-sm leading-6
                text-white/45
                md:text-base
              "
            >
              Search photos, videos and GIFs from multiple platforms
              in one beautiful place..
            </p>

            {/* Search */}
            <div className="mx-auto mt-10 max-w-3xl">
              <SearchBar />
            </div>

          </div>
        </section>

        {/* Results */}
        {query !== "" ? (
          <section className="pb-16">

            {/* Search info */}
            <div
              className="
                mx-auto mb-2
                flex max-w-7xl
                items-center justify-between
                px-6 md:px-10
              "
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-white/30">
                  Search results
                </p>

                <h3 className="mt-1 flex items-center gap-2 text-xl font-semibold">
                  {query}

                  <ArrowRight
                    size={18}
                    className="text-white/30"
                  />
                </h3>
              </div>
            </div>

            <Tabs />

            <ResultGrid />

          </section>
        ) : (
          /* Empty state */
          <section className="px-6 pb-20">
            <div
              className="
                mx-auto max-w-3xl
                rounded-3xl
                border border-white/10
                bg-white/[0.025]
                px-8 py-14
                text-center
                backdrop-blur-sm
              "
            >
              <div
                className="
                  mx-auto mb-5
                  flex h-16 w-16
                  items-center justify-center
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                "
              >
                <Search
                  size={28}
                  className="text-white/40"
                />
              </div>

              <h3 className="text-xl font-semibold">
                What are you looking for?
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-white/40">
                Search for anything to discover beautiful photos,
                videos and GIFs from across the web.
              </p>
            </div>
          </section>
        )}

      </main>
    </div>
  );
};

export default HomePage;