import Link from "next/link";
import React from "react";
import Pagination from "./Pagination";

const LatestNews = ({ content, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="row bishesh news-cat-list">
        {content.posts.data.map((i) => (
          <div className="items col-md-4">
            <div key={i.id}>
              <Link href="newsDetail">
                <a title={i.title}>
                  <figure>
                    <img src={i.image_link} alt={i.title} />
                  </figure>

                  <span className="main-title">{i.title}</span>
                  <span className="comments-line">
                    <span className="left-icon fa fa-comments"></span>240
                    Comments
                  </span>
                </a>
              </Link>
            </div>
          </div>
        ))}

        <Pagination content={content} />
      </div>
    </>
  );
};

export default LatestNews;
