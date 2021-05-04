import Link from "next/link";
import React from "react";

const CatTwo = ({ title, title1, items = [] }) => {
  return (
    <div className="samachar-box cat-news-list">
      <div className="row samachar-list">
        <div className="cat-list-box big-feature half-section col-md-6">
          <span className="cat-box">
            <span className="cat-tags">{title}</span>
          </span>

          <div className="item-list">
            {items
              ?.map((a, id) => <ItemList {...a} key={`item-${id}`} />)
              .slice(0, 1)}
          </div>

          <div className="side-list">
            {items
              ?.map((a, id) => <SideList {...a} key={`side-item-${id}`} />)
              .slice(0, 3)}
          </div>
        </div>

        <div className="cat-list-box big-feature half-section col-md-6">
          <span className="cat-box">
            <span className="cat-tags">{title1}</span>
          </span>

          <div className="item-list">
            {items
              ?.map((a, id) => <ItemList {...a} key={`item-${id}`} />)
              .slice(0, 1)}
          </div>

          <div className="side-list">
            {items
              ?.map((a, id) => <SideList {...a} key={`side-item-${id}`} />)
              .slice(0, 3)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatTwo;

const ItemList = ({ id, title }) => (
  <Link href={`newsDetail/${id}`}>
    <a title={title}>
      <figure>
        <img src="https://picsum.photos/1280/960/?random" alt={title} />
        <span className="main-title">{title}</span>
      </figure>
    </a>
  </Link>
);

const SideList = ({ id, title }) => (
  <div className="media">
    <Link href={`newsDetail/${id}`}>
      <a title={title}>
        <figure className="mr-3">
          <img src="https://picsum.photos/150/150" alt={title} />
        </figure>
        <span className="media-body">
          <span className="main-title">{title}</span>
        </span>
      </a>
    </Link>
  </div>
);
