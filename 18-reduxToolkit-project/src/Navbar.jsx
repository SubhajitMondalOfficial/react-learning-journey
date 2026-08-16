import { Link,   } from "react-router-dom";
import {
  Search,
  Bookmark,
  Sparkles, 
} from "lucide-react";


const Navbar = () => {
  return (
    <div>
         {/* Navbar */}
      <header
        className="
          sticky top-0 z-50
          border-b border-white/10
          bg-[#070b14]/75
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto flex max-w-7xl
            items-center justify-between
            px-6 py-4 md:px-10
          "
        >

          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3"
          >
            <div
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                bg-gradient-to-br from-blue-500 to-violet-600
                shadow-lg shadow-blue-500/20
                transition-all duration-300
                group-hover:scale-110
              "
            >
              <Sparkles size={20} />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight">
                Media<span className="text-blue-400">Search</span>
              </h1>

              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Explore everything
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav
            className="
              flex items-center gap-1
              rounded-full
              border border-white/10
              bg-white/[0.04]
              p-1
              backdrop-blur-md
            "
          >
            <Link
              to="/"
              className={`
                flex items-center gap-2
                rounded-full
                px-4 py-2
                text-sm font-medium
                transition-all duration-300
                ${
                  location.pathname === "/"
                    ? "bg-white text-black shadow-lg"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              <Search size={16} />
              Search
            </Link>

            <Link
              to="/collection"
              className={`
                flex items-center gap-2
                rounded-full
                px-4 py-2
                text-sm font-medium
                transition-all duration-300
                ${
                  location.pathname === "/collection"
                    ? "bg-white text-black shadow-lg"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              <Bookmark size={16} />
              Collection
            </Link>
          </nav>
        </div>
      </header>

    </div>
  )
}

export default Navbar