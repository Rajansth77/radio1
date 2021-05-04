import Link from "next/link";
import React from "react";

const PopularNews = ({ items = [], title }) => {
  return (
    <>
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>

      {items?.map((a, id) => (
        <Popular {...a} key={`popular-item-${id}`} />
      ))}
    </>
  );
};

export default PopularNews;

const Popular = ({ id, title }) => (
  <div className="item-news media">
    <Link href={`/videoDetail/${id}`}>
      <a title={title}>
        <figure className="mr-3">
          <img src="https://picsum.photos/150/150?random" alt={title} />
        </figure>
        <span className="media-body">
          <span className="main-title">{title}</span>
        </span>
      </a>
    </Link>
  </div>
);
