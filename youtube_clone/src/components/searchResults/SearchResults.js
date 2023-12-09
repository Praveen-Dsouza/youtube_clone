import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YT_SEARCH_RESULTS_API } from "../../utils/constants";
import SearchResultCard from "./SearchResultCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchVideos, setSearchVideos] = useState([]);

  let searchQuery = searchParams.get("search_query");

  useEffect(() => {
    getSearchResultVideoList();
  }, [searchQuery]);

  const getSearchResultVideoList = async () => {
    const data = await fetch(YT_SEARCH_RESULTS_API + searchQuery);
    const json = await data.json();
    setSearchVideos(json?.items);
  };

  return (
    <div className="justify-center">
      <div className="py-2 ">
        {searchVideos?.map((video) =>
          // Only show videos (no channels)
          video?.id.videoId ? (
            <Link
              key={video?.id?.videoId || video?.id?.playlistId}
              to={"/watch?v=" + (video?.id?.videoId || video?.id?.playlistId)}
            >
              <SearchResultCard video={video} />
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default SearchResults;
