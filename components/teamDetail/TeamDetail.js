import Sidebar1 from "components/common/sidebar/Sidebar1";
import LatestPodcast from "components/homepage/latestPodcast";
import SpecialPrograms from "components/homepage/specialPrograms";
import TodaysHighlights from "components/homepage/todaysHighlights";
import React from "react";
import SingleDetail from "./SingleDetail";

const TeamDetail = ({ content }) => {
  return (
    <div className="container">
      <div className="row">
        <section className="section content-editor full-content col-md-12">
          <div className="title-names special-title col-md-12">
            <span className="news-big-title">
              {content.teamInfo.member_type.title}
              <div className="share-box">
                <div className="share-now sharethis-inline-share-buttons"></div>
              </div>
            </span>
          </div>
        </section>
        <aside className="left-side col-sm-8 col-md-9">
          <section className="section special-news special-programmes">
            <SingleDetail content={content} />
          </section>
        </aside>

        <div className="right-side col-sm-4 col-md-3">
          <Sidebar1 />
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
