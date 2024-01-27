import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/storeSlices/appSlice";
import home from "../utils/icons/sidebar/home.jpg";
import homeInv from "../utils/icons/sidebar/homeInv.png";
import shortsInv from "../utils/icons/sidebar/shortsInv.png";
import shorts from "../utils/icons/sidebar/shorts.png";
import subscriptionInv from "../utils/icons/sidebar/subscriptionInv.png";
import subscription from "../utils/icons/sidebar/subscription.png";
import channelInv from "../utils/icons/sidebar/channelInv.png";
import channel from "../utils/icons/sidebar/channel.png";
import historyInv from "../utils/icons/sidebar/historyInv.png";
import history from "../utils/icons/sidebar/history.png";
import videosInv from "../utils/icons/sidebar/videosInv.png";
import likedInv from "../utils/icons/sidebar/likedInv.png";
import liked from "../utils/icons/sidebar/liked.png";
import watchlaterInv from "../utils/icons/sidebar/watchlaterInv.png";
import watchlater from "../utils/icons/sidebar/watchlater.png";
import downArrow from "../utils/icons/sidebar/downArrow.png";
import trendingInv from "../utils/icons/sidebar/trendingInv.png";
import trending from "../utils/icons/sidebar/trending.png";
import shoppingInv from "../utils/icons/sidebar/shoppingInv.png";
import shopping from "../utils/icons/sidebar/shopping.png";
import musicInv from "../utils/icons/sidebar/musicInv.jpg";
import music from "../utils/icons/sidebar/music.jpg";
import moviesInv from "../utils/icons/sidebar/moviesInv.png";
import movies from "../utils/icons/sidebar/movies.png";
import liveInv from "../utils/icons/sidebar/liveInv.png";
import live from "../utils/icons/sidebar/live.png";
import gamingInv from "../utils/icons/sidebar/gamingInv.png";
import gaming from "../utils/icons/sidebar/gaming.png";
import newspaperInv from "../utils/icons/sidebar/newspaperInv.jpg";
import newspaper from "../utils/icons/sidebar/newspaper.jpg";
import sportsInv from "../utils/icons/sidebar/sportsInv.jpg";
import sports from "../utils/icons/sidebar/sports.jpg";
import learningInv from "../utils/icons/sidebar/learningInv.png";
import learning from "../utils/icons/sidebar/learning.png";
import fashionInv from "../utils/icons/sidebar/fashionInv.png";
import fashion from "../utils/icons/sidebar/fashion.png";
import podcastInv from "../utils/icons/sidebar/podcastInv.png";
import podcast from "../utils/icons/sidebar/podcast.png";
import ytpremium from "../utils/icons/sidebar/ytpremium.png";
import studio from "../utils/icons/sidebar/studio.png";
import ytmusic from "../utils/icons/sidebar/ytmusic.png";
import kids from "../utils/icons/sidebar/kids.png";
import settingsInv from "../utils/icons/sidebar/settingsInv.jpg";
import settings from "../utils/icons/sidebar/settings.jpg";

const ListItem = ({ icon, text, customClass, path, selectedPath }) => {
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(closeMenu());
  };

  return (
    <Link
      to={path ? `/results?search_query=${path}` : "/"}
      onClick={() => toggleMenu}
    >
      <li className="flex py-1 my-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <img className={`h-5 w-5 ${customClass}`} src={icon} alt="icon" />
        <p
          className={`pl-7 text-sm mb-1 ${
            (selectedPath === path) || (path === undefined && selectedPath === null) ? "font-bold" : "font-normal"
          }`}
        >
          {text}
        </p>
      </li>
    </Link>
  );
};

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);
  const [searchParams] = useSearchParams();
  let searchQuery = searchParams.get("search_query");
  const [activeParams, setActiveParams] = useState("home");

  useEffect(() => {
      setActiveParams(searchQuery)
  }, [searchQuery]);

  if (!isMenuOpen) return null;

  function setIcon(query) {
    switch(query) {
      case "shorts":
        return shorts
      case "subscriptions":
        return subscription
      case "yourchannel":
        return channel
      case "history":
        return historyInv
      case "likedvideos":
        return liked
      case "watchlater":
        return watchlater
      case "trending":
        return trending
      case "shopping":
        return shopping
      case "music":
        return music
      case "movies":
        return movies
      case "live":
        return live
      case "gaming":
        return gaming
      case "news":
        return newspaper
      case "sports":
        return sports
      case "learning":
        return learning
      case "fashion":
        return fashion
      case "podcasts":
        return podcast
      case "settings":
        return settings
      default: 
        return home
    }
  }

  return (
    <div className="px-8 py-10 fixed max-h-screen hover:overflow-y-scroll overflow-hidden overscroll-contain top-6 z-10 bg-white ">
      <ul className="shadow-sm">
        <ListItem icon={searchQuery === null? setIcon(searchQuery) : homeInv} text={"Home"} selectedPath={searchQuery} />
        <ListItem icon={searchQuery === "shorts" ? setIcon(searchQuery): shortsInv} text={"Shorts"} path={"shorts"} selectedPath={activeParams}  />
        <ListItem
          icon={searchQuery === "subscriptions"? setIcon(searchQuery) : subscriptionInv}
          text={"Subscriptions"}
          path={"subscriptions"}
          selectedPath={activeParams} 
        />
      </ul>
      <div></div>
      <h1 className=" py-4 text-lg font-semibold">You {">"} </h1>
      <ul className="shadow-sm">
        <ListItem
          icon={searchQuery === "yourchannel"? setIcon(searchQuery): channelInv}
          text={"Your channel"}
          path={"yourchannel"}
          selectedPath={activeParams} 
        />
        <ListItem icon={searchQuery === "history"? setIcon(searchQuery): history} text={"History"} path={"history"} selectedPath={activeParams}  />
        <ListItem icon={searchQuery === "yourvideos"? setIcon(searchQuery): videosInv} text={"Your videos"} path={"yourvideos"} selectedPath={activeParams}  />
        <ListItem
          icon={searchQuery === "watchlater"? setIcon(searchQuery): watchlaterInv}
          text={"Watch later"}
          path={"watchlater"}
          selectedPath={activeParams} 
        />
        <ListItem icon={searchQuery === "likedvideos"? setIcon(searchQuery): likedInv} text={"Liked Videos"} path={"likedvideos"} selectedPath={activeParams}  />
        <ListItem icon={downArrow} text={"Show more"} path={"showmore"} selectedPath={activeParams} />
      </ul>
      <h1 className=" pt-5 text-lg font-semibold">Explore</h1>
      <ul className="shadow-sm">
        <ListItem icon={searchQuery === "trending"? setIcon(searchQuery): trendingInv} text={"Trending"} path={"trending"} selectedPath={activeParams}  />
        <ListItem icon={searchQuery === "shopping"? setIcon(searchQuery): shoppingInv} text={"Shopping"} path={"shopping"} selectedPath={activeParams} />
        <ListItem icon={searchQuery === "music"? setIcon(searchQuery): musicInv} text={"Music"} path={"music"} selectedPath={activeParams}  />
        <ListItem icon={searchQuery === "movies"? setIcon(searchQuery): moviesInv} text={"Movies"} path={"movies"} selectedPath={activeParams}  />
        <ListItem
          customClass={`h-5 w-6`}
          icon={searchQuery === "live"? setIcon(searchQuery): liveInv}
          text={"Live"}
          path={"live"}
          selectedPath={activeParams} 
        />
        <ListItem icon={searchQuery === "gaming"? setIcon(searchQuery): gamingInv} text={"Gaming"} path={"gaming"} selectedPath={activeParams}  />
        <ListItem icon={searchQuery === "news"? setIcon(searchQuery): newspaperInv} text={"News"} path={"news"} selectedPath={activeParams}  />
        <ListItem icon={searchQuery === "sports"? setIcon(searchQuery): sportsInv} text={"Sports"} path={"sports"} selectedPath={activeParams}  />
        <ListItem icon={searchQuery === "learning"? setIcon(searchQuery): learningInv} text={"Learning"} path={"learning"} selectedPath={activeParams} />
        <ListItem
          customClass={`h-6 w-6`}
          icon={searchQuery === "fashion"? setIcon(searchQuery): fashionInv}
          text={"Fashion & Beauty"}
          path={"fashion"}
          selectedPath={activeParams} 
        />
        <ListItem
          customClass={`h-6 w-6`}
          icon={searchQuery === "podcasts"? setIcon(searchQuery): podcastInv}
          text={"Podcasts"}
          path={"podcasts"}
          selectedPath={activeParams} 
        />
      </ul>
      <h1 className=" pt-5 text-lg font-semibold">More from YouTube </h1>
      <ul className="shadow-sm pb-10">
        <ListItem
          icon={ytpremium}
          text={"YouTube Premium"}
          path={"youtubepremium"}
          selectedPath={activeParams} 
        />
        <ListItem
          icon={studio}
          text={"YouTube Studio"}
          path={"youtubestudio"}
          selectedPath={activeParams} 
        />
        <ListItem icon={ytmusic} text={"YouTube Music"} path={"youtubemusic"} selectedPath={activeParams}  />
        <ListItem icon={kids} text={"YouTube Kids"} path={"youtubekids"} selectedPath={activeParams}  />
        <ListItem icon={searchQuery === "settings"? setIcon(searchQuery): settingsInv} text={"Settings"} path={"settings"} selectedPath={activeParams} />
      </ul>
    </div>
  );
};

export default Sidebar;
