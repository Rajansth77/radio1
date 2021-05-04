import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import "node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "node_modules/owl.carousel/dist/assets/owl.theme.default.css";

const DynamicOwl = dynamic(() => import("react-owl-carousel"), { ssr: false });

const MukhyaSamachar = ({ items = [], title }) => {
  const options = {
    rewind: true,
    loop: false,
    items: 1,
    responsiveRefreshRate: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    autoplaySpeed: 2000,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <div className="samachar-box mukhya-samachar">
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>

      <div className="row main-stories main-story-slider">
        <DynamicOwl className="owl-theme" {...options}
        >
          {items?.map((item, id) => (
            <MukhyaNews key={`mukhya-news-${id}`} {...item} />
          ))}
        </DynamicOwl>
        {items?.map((item, id) => (
          <MukhyaSubNews key={`mukhya-subNews-${id}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MukhyaSamachar;

const MukhyaNews = ({ id, title }) => {
  return (
    <div className="items">
      <Link href={`/newsDetail/${id}`}>
        <a title={title}>
          <figure>
            <img src="https://picsum.photos/1280/960/?random" alt="" />
            <span className="main-title">{title}</span>
          </figure>
        </a>
      </Link>
    </div>
  );
};

const MukhyaSubNews = ({ id, title }) => {
  return (
    <div className="items more-item col-md-6">
      <Link href={`/newsDetail/${id}`}>
        <a title={title}>
          <figure>
            <img src="https://picsum.photos/1280/960?random" alt="" />
            <span className="main-title">{title}</span>
          </figure>
        </a>
      </Link>
    </div>
  );
};
