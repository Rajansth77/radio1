import Sidebar from "components/common/sidebar/Sidebar";
import Link from "next/link";
import React from "react";
import PhotoViewer from "./PhotoViewer";

const PhotoDetail = () => {
  return (
    <div className="container">
      <section className="section special-news cat-list">
        <PhotoViewer />
      </section>

      <div className="row">
        <aside className="left-side col-sm-8 col-md-9">
          <section className="section special-news cat-list samachar-box">
            <span className="cat-box">
              <span className="cat-tags">थप फोटो ग्यालरी</span>
            </span>
            <div className="row main-stories more-photos">
              <div className="items more-item col-md-6">
                <Link href="photoDetail">
                  <a title="">
                    <figure>
                      <img src="https://picsum.photos/1280/960?random" alt="" />
                      <span className="main-title">
                        प्रधानन्यायाधीश पराजुलीले ४ बजे राष्ट्रपतिलाई सपथ
                        खुवाउँदै
                      </span>
                    </figure>
                  </a>
                </Link>
              </div>

              <div className="items more-item col-md-6">
                <Link href="photoDetail">
                  <a title="">
                    <figure>
                      <img src="https://picsum.photos/1280/960" alt="" />
                      <span className="main-title">
                        दोस्रो बजारमा आइपिओसरहकै मूल्यमा पाइन्छ यी कम्पनीको सेयर
                      </span>
                    </figure>
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </aside>

        <div className="right-side col-sm-4 col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
