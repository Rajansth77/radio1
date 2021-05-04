import Sidebar from "components/common/sidebar/Sidebar";
import React from "react";
import LatestNews from "./LatestNews";

const NewsList = ({ content }) => {
  return (
    <div className="container">
      <div className="row">
        <aside className="left-side col-sm-8 col-md-9">
          <section className="section special-news cat-list">
            <LatestNews content={content} />
          </section>
        </aside>

        <div className="right-side col-sm-4 col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsList;
