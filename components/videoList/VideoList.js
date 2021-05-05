import Ad280 from "components/common/ads/ad-280x480";
import Sidebar from "components/common/sidebar/Sidebar";
import CountDown from "components/homepage/countDown";
import LatestPodcast from "components/homepage/latestPodcast";
import MostRead from "components/homepage/mostRead";
import PopularNews from "components/homepage/popularNews";
import RadioPresentors from "components/homepage/radioPresentors";
import SpecialPrograms from "components/homepage/specialPrograms";
import TodaysHighlights from "components/homepage/todaysHighlights";
import React from "react";
import VideosLists from "./VideosLists";

const VideoList = () => {
  return (
    <div className="container">
      <div className="row">
        <aside className="left-side col-sm-8 col-md-9">
          <section className="section special-news cat-list">
            <VideosLists />
          </section>
        </aside>

        <div className="right-side col-sm-4 col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default VideoList;
