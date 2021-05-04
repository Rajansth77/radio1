import Link from "next/link";
import React from "react";

const SpecialPrograms = ({ items = [], title }) => {
  return (
    <>
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>

      <div className="special-box pro-slide-box">
        <div className="pro-slider">
          {items?.map((a, id) => (
            <SpecialItems {...a} key={`special-item-${id}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SpecialPrograms;

const SpecialItems = ({ id, name, start_time, end_time, banner }) => {
  return (
    <div className="item-news">
      <Link href={`/programDetail/${id}`}>
        <a title={name}>
          <figure className="mr-3">
            <img src={banner} alt={name} />
          </figure>
          <span className="main-title">{name}</span>
          <span className="start-time spinner">
            {start_time} - {end_time}
            <span className="float-right on-air">
              On Air
              <span className="double-bounce1"></span>
              <span className="double-bounce2"></span>
            </span>
          </span>
        </a>
      </Link>
    </div>
  );
};
