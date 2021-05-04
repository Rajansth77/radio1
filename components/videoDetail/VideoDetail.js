import Ad280 from "components/common/ads/ad-280x480";
import Sidebar from "components/common/sidebar/Sidebar";
import CountDown from "components/homepage/countDown";
import LatestPodcast from "components/homepage/latestPodcast";
import MostRead from "components/homepage/mostRead";
import PopularNews from "components/homepage/popularNews";
import RadioPresentors from "components/homepage/radioPresentors";
import SpecialPrograms from "components/homepage/specialPrograms";
import TodaysHighlights from "components/homepage/todaysHighlights";
import Link from "next/link";
import React from "react";
import SingleVideo from "./SingleVideo";

const VideoDetail = () => {
  return (
    <div className="container">
      <section className="section special-news cat-list">
        <SingleVideo />
      </section>

      <div className="row">
        <aside className="left-side col-sm-8 col-md-9">
          <span className="comment-title main-title">प्रतिक्रिया दिनुहोस्</span>

          <div className="video-comment comment-list">
            <span>The facebook comment plugin code goes here.</span>
          </div>

          <section className="section special-news cat-list samachar-box">
            <span className="cat-box">
              <span className="cat-tags">थप भिडियो ग्यालरी</span>
            </span>
            <div className="row video-list main-stories more-photos">
              <div className="items more-item col-md-6">
                <Link href="/photoDetail">
                  <a title="">
                    <figure>
                      <img src="https://picsum.photos/1280/960?random" alt="" />
                      <span className="main-title">
                        प्रधानन्यायाधीश पराजुलीले ४ बजे राष्ट्रपतिलाई सपथ
                        खुवाउँदै
                      </span>
                      <span className="video-play fa fa-youtube-play"></span>
                    </figure>
                  </a>
                </Link>
              </div>

              <div className="items more-item col-md-6">
                <Link href="/photoDetail">
                  <a title="">
                    <figure>
                      <img src="https://picsum.photos/1280/960" alt="" />
                      <span className="main-title">
                        दोस्रो बजारमा आइपिओसरहकै मूल्यमा पाइन्छ यी कम्पनीको सेयर
                      </span>
                      <span className="video-play fa fa-youtube-play"></span>
                    </figure>
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </aside>

        <div className="right-side col-sm-4 col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
