import { useDispatch, useSelector } from "react-redux";
import {
  Image,
  Video,
  Film,
} from "lucide-react";
import { setActiveTab } from "../features/searchSlice";

// Three tabs Tabs 
const Tabs = () => {
  const tabs = [
    {
      name: "photos",
      label: "Photos",
      icon: Image,
    },
    {
      name: "videos",
      label: "Videos",
      icon: Video,
    },
    {
      name: "gif",
      label: "GIFs",
      icon: Film,
    },
  ];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="mb-10 gap-4 mx-auto flex w-fit items-center rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.name;

        return (
          <button
            key={tab.name}
            onClick={() => dispatch(setActiveTab(tab.name))}
            className={`
              relative
              flex items-center gap-2
              rounded-xl
              px-5 py-2.5
              text-sm font-medium
              transition-all duration-300 ease-out
              active:scale-95
              ${
                isActive
                  ? "bg-white text-black shadow-lg shadow-black/20"
                  : "text-white/45 hover:bg-white/10 hover:text-white"
              }
            `}
          >
            <Icon
              size={17}
              strokeWidth={isActive ? 2.2 : 1.8}
              className="transition-transform duration-300"
            />

            <span>{tab.label}</span>

            {isActive && (
              <span className="absolute -bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-500" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;