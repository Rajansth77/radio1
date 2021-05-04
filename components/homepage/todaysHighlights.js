import Link from "next/link";
import React from "react";

const TodaysHighlights = ({ items = [], title }) => {
  return (
    <>
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>

      {items.todayHighlights?.map((a, id) => (
        <TodayHighlight item={a} key={`highlight-item-${id}`} />
      ))}
    </>
  );
};

export default TodaysHighlights;

const TodayHighlight = ({ item }) => {
  return (
    <div className="item-news media">
      <Link href={`/programDetail/${item.id}`}>
        <a title={item.name}>
          <figure className="mr-3">
            <img src="https://picsum.photos/150/150?random" alt={item.name} />
          </figure>
          <span className="media-body">
            <span className="main-title">{item.name}</span>
            <span className="start-time spinner">
              {item.start_time} - {item.end_time}
              <span className="float-right on-air">
                On Air <span className="double-bounce1"></span>
                <span className="double-bounce2"></span>
              </span>
            </span>
          </span>
        </a>
      </Link>
    </div>
  );
};
