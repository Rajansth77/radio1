import Link from "next/link";
import React from "react";

const CatSix = ({ title, items = [] }) => {
  return (
    <div className="samachar-box cat-news-list videos-list">
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>

      <div className="row samachar-list">
        {items?.map((a, id) => (
          <ItemList {...a} key={`item-list-${id}`} />
        ))}
      </div>
    </div>
  );
};

export default CatSix;

const ItemList = ({ id, title }) => (
  <div className="cat-list-box big-feature col-md-6">
    <div className="item-list">
      <Link href={`newsDetail/${id}`}>
        <a title={title}>
          <figure>
            <img src="https://picsum.photos/1280/960/?random" alt="" />
            <span className="video-play fa fa-youtube-play"></span>
            <span className="main-title">{title}</span>
          </figure>
        </a>
      </Link>
    </div>
  </div>
);
