import Link from "next/link";
import React from "react";

const RadioPresentors = ({ items = [], title }) => {
  return (
    <>
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>
      {items?.map((a, id) => (
        <PresentorsList {...a} key={`presenter-num-${id}`} />
      ))}
    </>
  );
};

export default RadioPresentors;

const PresentorsList = ({ name, image_link, id }) => {
  return (
    <div className="item-news media">
      <Link href={`/teamDetail/${id}`}>
        <a title={name}>
          <figure className="mr-3">
            <img src={image_link} alt={name} />
          </figure>
          <span className="media-body">
            <span className="main-title">{name}</span>
            <span className="start-time">Yo Maya Bhanne Chij Yastai Ho</span>
          </span>
        </a>
      </Link>
    </div>
  );
};
