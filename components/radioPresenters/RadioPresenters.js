import CountDown from "components/homepage/countDown";
import LatestPodcast from "components/homepage/latestPodcast";
import SpecialPrograms from "components/homepage/specialPrograms";
import TodaysHighlights from "components/homepage/todaysHighlights";
import TeamList from "components/ourTeam/TeamList";
import Link from "next/link";
import React from "react";

const RadioPresenters = () => {
  return (
    <div className="container">
      <div className="row">
        <aside className="left-side team-rj col-sm-12 col-md-12">
          <section className="section content-editor col-md-12">
            <div className="tag-box">
              <span className="tags">Our Team</span>
              <ul className="breadcrumbs float-right">
                <li className="first">
                  <Link href="#!">
                    <a title="Home">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="#!">
                    <a title="Our Team">Our Team</a>
                  </Link>
                </li>
                <li className="active">Radio Presenters</li>
              </ul>
            </div>
            <div className="title-names special-title col-md-12">
              <span className="news-big-title">
                Radio Presenters
                <div className="share-box">
                  <div className="share-now sharethis-inline-share-buttons"></div>
                </div>
              </span>
            </div>
          </section>

          <section className="section special-news special-programmes">
            <TeamList />
          </section>

          <div className="row right-side horizontal-layout team-right">
            <div className="items col-md-3 samachar-box">
              <LatestPodcast />
            </div>

            <div className="items col-md-3 samachar-box todays">
              <TodaysHighlights />
            </div>

            <div className="items col-md-3 samachar-box countdown">
              <CountDown />
            </div>

            <div className="items col-md-3 samachar-box">
              <SpecialPrograms />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default RadioPresenters;
