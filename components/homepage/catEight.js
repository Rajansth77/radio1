import Link from "next/link";
import React from "react";

const CatEight = ({ title, items = [] }) => {
  return (
    <div className="samachar-box cat-news-list normal-list">
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>

      <div className="row samachar-list">
        <div className="samachar-list more-list col-md-12">
          <div className="row cat-list-box big-feature side-section rochak-list">
            {items?.map((a, id) => (
              <NewsItem {...a} key={`news-item-${id}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatEight;

const NewsItem = ({ id, title }) => (
  <div className="item-list col-md-3">
    <Link href={`newsDetail/${id}`}>
      <a title={title}>
        <figure>
          <img src="https://picsum.photos/1280/960/?random" alt={title} />
          <span className="main-title">{title}</span>
        </figure>
      </a>
    </Link>
  </div>
);
