import Link from "next/link";
import React from "react";

const CatOne = ({ title, items = [] }) => {
  return (
    <div className="samachar-box cat-news-list">
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>

      <div className="row samachar-list">
        <div className="cat-list-box big-feature col-md-6">
          {items
            ?.map((a, id) => <BigItem {...a} key={`Big-item-${id}`} />)
            .slice(0, 1)}
        </div>

        <div className="side-list col-md-6">
          {items
            ?.map((a, id) => <SideItem {...a} key={`Big-item-${id}`} />)
            .slice(0, 3)}
        </div>
      </div>
    </div>
  );
};

export default CatOne;

const BigItem = ({ id, title }) => (
  <div className="item-list">
    <Link href={`newsDetail/${id}`}>
      <a title={title}>
        <figure>
          <img src="https://picsum.photos/1280/960/?random" alt="" />
          <span className="main-title">{title}</span>
        </figure>
      </a>
    </Link>
  </div>
);

const SideItem = ({ id, title }) => (
  <div className="media">
    <Link href={`newsDetail/${id}`}>
      <a title={title}>
        <figure className="mr-3">
          <img src="https://picsum.photos/150/150" alt="" />
        </figure>
        <span className="media-body">
          <span className="main-title">{title}</span>
        </span>
      </a>
    </Link>
  </div>
);
