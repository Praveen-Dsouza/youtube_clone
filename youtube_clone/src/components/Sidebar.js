import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/storeSlices/appSlice";
import homeInv from "../utils/icons/sidebar/homeInv.png";
import shortsInv from "../utils/icons/sidebar/shortsInv.png";
import subscriptionInv from "../utils/icons/sidebar/subscriptionInv.png";
import channelInv from "../utils/icons/sidebar/channelInv.png";
import history from "../utils/icons/sidebar/history.png";
import videosInv from "../utils/icons/sidebar/videosInv.png";
import likedInv from "../utils/icons/sidebar/likedInv.png";
import watchlaterInv from "../utils/icons/sidebar/watchlaterInv.png";
import downArrow from "../utils/icons/sidebar/downArrow.png";
import trendingInv from "../utils/icons/sidebar/trendingInv.png";
import shoppingInv from "../utils/icons/sidebar/shoppingInv.png";
import musicInv from "../utils/icons/sidebar/musicInv.jpg";
import moviesInv from "../utils/icons/sidebar/moviesInv.png";
import liveInv from "../utils/icons/sidebar/liveInv.png";
import gamingInv from "../utils/icons/sidebar/gamingInv.png";
import newspaperInv from "../utils/icons/sidebar/newspaperInv.jpg";
import sportsInv from "../utils/icons/sidebar/sportsInv.jpg";
import learningInv from "../utils/icons/sidebar/learningInv.png";
import fashionInv from "../utils/icons/sidebar/fashionInv.png";
import podcastInv from "../utils/icons/sidebar/podcastInv.png";
import ytpremium from "../utils/icons/sidebar/ytpremium.png";
import studio from "../utils/icons/sidebar/studio.png";
import ytmusic from "../utils/icons/sidebar/ytmusic.png";
import kids from "../utils/icons/sidebar/kids.png";
import settingsInv from "../utils/icons/sidebar/settingsInv.jpg";

const ListItem = ({ icon, text, customClass, path }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to={path ? `/results?search_query=${path}` : "/"}
      onClick={() => dispatch(closeMenu())}
    >
      <li className="flex py-1 my-2 cursor-pointer hover:bg-gray-100 rounded-lg">
        <img className={`h-5 w-5 ${customClass}`} src={icon} alt="icon" />
        <p
          className={
            "pl-7 text-sm mb-1 font-normal" + (text === "Home" && "font-bold")
          }
        >
          {text}
        </p>
      </li>
    </Link>
  );
};

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="px-8 py-10 fixed max-h-screen hover:overflow-y-scroll overflow-hidden overscroll-contain top-6 z-10 bg-white ">
      <ul className="shadow-sm">
        <ListItem icon={homeInv} text={"Home"} />
        <ListItem icon={shortsInv} text={"Shorts"} path={"shorts"} />
        <ListItem
          icon={subscriptionInv}
          text={"Subscriptions"}
          path={"subscriptions"}
        />
      </ul>
      <div></div>
      <h1 className=" py-4 text-lg font-semibold">You {">"} </h1>
      <ul className="shadow-sm">
        <ListItem
          icon={channelInv}
          text={"Your channel"}
          path={"yourchannel"}
        />
        <ListItem
          icon={history}
          text={"History"}
          path={"www.youtube.com/feed/you"}
        />
        <ListItem icon={videosInv} text={"Your videos"} path={"yourvideos"} />
        <ListItem
          icon={watchlaterInv}
          text={"Watch later"}
          path={"watchlater"}
        />
        <ListItem icon={likedInv} text={"Liked Videos"} path={"likedvideos"} />
        <ListItem icon={downArrow} text={"Show more"} path={"showmore"} />
      </ul>
      <h1 className=" pt-5 text-lg font-semibold">Explore</h1>
      <ul className="shadow-sm">
        <ListItem icon={trendingInv} text={"Trending"} path={"trending"} />
        <ListItem icon={shoppingInv} text={"Shopping"} path={"shopping"} />
        <ListItem icon={musicInv} text={"Music"} path={"music"} />
        <ListItem icon={moviesInv} text={"Movies"} path={"movies"} />
        <ListItem
          customClass={`h-5 w-6`}
          icon={liveInv}
          text={"Live"}
          path={"live"}
        />
        <ListItem icon={gamingInv} text={"Gaming"} path={"gaming"} />
        <ListItem icon={newspaperInv} text={"News"} path={"news"} />
        <ListItem icon={sportsInv} text={"Sports"} path={"sports"} />
        <ListItem icon={learningInv} text={"Learning"} path={"learning"} />
        <ListItem
          customClass={`h-6 w-6`}
          icon={fashionInv}
          text={"Fashion & Beauty"}
          path={"fashion"}
        />
        <ListItem
          customClass={`h-6 w-6`}
          icon={podcastInv}
          text={"Podcasts"}
          path={"podcasts"}
        />
      </ul>
      <h1 className=" pt-5 text-lg font-semibold">More from YouTube </h1>
      <ul className="shadow-sm pb-10">
        <ListItem
          icon={ytpremium}
          text={"YouTube Premium"}
          path={"youtubepremium"}
        />
        <ListItem
          icon={studio}
          text={"YouTube Studio"}
          path={"youtubestudio"}
        />
        <ListItem icon={ytmusic} text={"YouTube Music"} path={"youtubemusic"} />
        <ListItem icon={kids} text={"YouTube Kids"} path={"youtubekids"} />
        <ListItem icon={settingsInv} text={"Settings"} path={"settings"} />
      </ul>
    </div>
  );
};

export default Sidebar;
