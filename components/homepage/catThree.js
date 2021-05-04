import Link from "next/link";
import React from "react";

const CatThree = ({ title, items = [] }) => {
  return (
    <div className="samachar-box cat-news-list">
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>
      <div className="row samachar-list pradesh-list">
        {items?.map((a, id) => (
          <NewsItem {...a} key={`news-item-${id}`} />
        ))}
      </div>
    </div>
  );
};

export default CatThree;

const NewsItem = ({ id, title }) => (
  <div className="news-item col-md-4">
    <Link href={`newsDetail/${id}`}>
      <a title={title}>
        <figure className="mr-3">
          <img src="https://picsum.photos/1280/960/?random" alt={title} />
        </figure>
        <span className="main-title">{title}</span>
      </a>
    </Link>
  </div>
);
