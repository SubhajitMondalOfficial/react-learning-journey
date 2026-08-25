import { useDispatch, useSelector } from "react-redux";
import { FetchPhotos, FetchVideos, FetchGif } from "../api/meadiaApi";
import { setLoading, setError, setResults } from "../features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";
import { LoaderCircle } from "lucide-react";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (Store) => Store.search,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab === "photos") {
          let response = await FetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html
          }));
        }
        if (activeTab === "videos") {
          let response = await FetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || `${query} video`,
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url
          }));
        }
        if (activeTab === "gif") {
          let response = await FetchGif(query); 
          data = response.data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title,
            thumbnail: item.images.fixed_height_small.url,
            src: item.images.original.url,
            url: item.url
            
          }));
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [query, activeTab]);

  if (error) return <h1>Error</h1>;
 if (loading) {
  return (
    <div className="flex min-h-[400px] items-center justify-center px-6">
      <div className="flex flex-col items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <LoaderCircle
            size={30}
            className="animate-spin text-blue-400"
          />
        </div>

        <div className="text-center">
          <h2 className="text-lg font-semibold text-white">
            Finding media...
          </h2>

          <p className="mt-1 text-sm text-white/40">
            Searching across multiple platforms
          </p>
        </div>
      </div>
    </div>
  );
}

  return (
    <div
      className="
    w-full
    grid
    grid-cols-[repeat(auto-fit,minmax(260px,1fr))]
    gap-6
    px-6 md:px-10
    pb-10
  "
    >
      {/* Come to change it */}
      {results.map((items) => (
        <div key={items.id} className="flex justify-center">
          <ResultCard item={items} /> 
        </div>
      ))}
    </div>
  );
};

export default ResultGrid;
