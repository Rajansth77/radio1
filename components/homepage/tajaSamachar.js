import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import "node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "node_modules/owl.carousel/dist/assets/owl.theme.default.css";

const DynamicOwl = dynamic(() => import("react-owl-carousel"), { ssr: false });

const TajaSamachar = ({ items, title }) => {
  const options = {
    rewind: true,
    loop: false,
    items: 4,
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
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <div className="samachar-box taja-samachar">
      <span className="cat-tags">{title}</span>

      <div className="row boundary taja-box">
        <DynamicOwl className="owl-theme" {...options}>
          {items?.map((item, id) => (
            <TajaNews key={`taja-news-${id}`} {...item} />
          ))}
        </DynamicOwl>
      </div>
    </div>
  );
};

export default TajaSamachar;

const TajaNews = ({ id, categories, title }) => {
  return (
    <div className="items">
      <Link href={`/newsDetail/${id}`}>
        <a title={title}>
          <span className="tags">{categories.map((c) => c.name)}</span>
          <span className="main-title">{title}</span>
        </a>
      </Link>
    </div>
  );
};
