import Link from "next/link";
import React from "react";

const CatFour = ({ title, items = [] }) => {
  return (
    <div className="samachar-box cat-news-list manoranjan">
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>

      <div className="row samachar-list">
        <div className="cat-list-box big-feature col-md-8">
          {items
            ?.map((a, id) => <BigItem {...a} key={`Big-item-${id}`} />)
            .slice(0, 1)}
        </div>

        <div className="cat-list-box big-feature side-section col-md-4">
          {items
            ?.map((a, id) => <SideItem {...a} key={`Big-item-${id}`} />)
            .slice(0, 2)}
        </div>
      </div>
    </div>
  );
};

export default CatFour;

const BigItem = ({ id, title }) => (
  <div className="item-list">
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

const SideItem = ({ id, title }) => (
  <div className="item-list">
    <Link href={`newsDetail/${id}`}>
      <a title={title}>
        <figure>
          <img src="https://picsum.photos/150/150" alt={title} />
          <span className="main-title">{title}</span>
        </figure>
      </a>
    </Link>
  </div>
);
