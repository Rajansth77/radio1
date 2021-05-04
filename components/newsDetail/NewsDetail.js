import Ad600 from "components/common/ads/ad-600x90";
import Sidebar from "components/common/sidebar/Sidebar";
import Link from "next/link";
import React from "react";


const NewsDetail = ({ content, summary }) => {
  return (
    <div className="container">
      <div className="row">
        <aside className="left-side col-sm-8 col-md-9">
          <section className="section content-editor col-md-12">
            <div className="tag-box">
              <span className="tags">
                {content.post.categories.map((c) => c.name)}
              </span>
              <ul className="breadcrumbs float-right">
                <li className="first">
                  <Link href="#!">
                    <a title="Home">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="#!">
                    <a title="News">
                      {content.post.categories.map((c) => c.name)}
                    </a>
                  </Link>
                </li>
                <li className="active">{content.post.title}</li>
              </ul>
            </div>

            <div className="title-names col-md-12">
              <span className="news-big-title">{content.post.title}</span>
              <section className="section full-ad">
                <Ad600 />
              </section>
              <span className="news-sub-heading">{summary}</span>

              <div className="row authors-box">
                <div className="items author-pic col-md-4">
                  <div className="media">
                    <div className="mr-3">
                      <img
                        src={content.post.authors.map((c) => c.image_link)}
                      />
                    </div>
                    <div className="media-body">
                      <span className="main-title">
                        {content.post.authors.map((c) => c.name)}
                      </span>
                      <span className="designation">{content.time}</span>
                    </div>
                  </div>
                </div>

                <div className="share-box col-md-8">
                  <div className="share-now sharethis-inline-share-buttons"></div>
                </div>
              </div>
            </div>
            <div className="row sif-images">
              <div className="featured-images col-md-12">
                <figure>
                  <img src={content.post.image_link} />
                  <figcaption className="caption-line">
                    {content.post.title}
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
          <div className="row">
            <div className="detail-box col-md-12">
              <div className="editor-box">
                <div className="insert-ad">
                  <div className="items">
                    <Link href="#">
                      <a title="">
                        <img src={content.post.image_link} />
                      </a>
                    </Link>
                  </div>
                </div>
                {content.post.content}
              </div>
              <div className="row published-box">
                <div className="published-date col-md-6">
                  <span className="pub-date">
                    प्रकाशित मिति: {content.post.time}
                  </span>
                </div>

                <div className="share-box col-md-6">
                  <div className="share-now sharethis-inline-share-buttons"></div>
                </div>
                <div className="related-tags col-md-12">
                  <span className="tags">
                    <Link href="#!">
                      <a>{content.post.tags.map((c) => c.name)}</a>
                    </Link>
                  </span>
                </div>

                <section className="section full-ad">
                  <Ad600 />
                </section>

                <div className="comment-box col-md-12">
                  <span className="comment-title main-title">
                    प्रतिक्रिया दिनुहोस्
                  </span>
                  <span>The facebook comment plugin code goes here.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row bishesh news-cat-list more-news samachar-box">
            <div className="extra-title col-md-12">
              <span className="cat-box">
                <span className="cat-tags">थप समाचार</span>
              </span>
            </div>
            {content.moreNews.map((news) => (
              <div className="items col-md-4" key={news.id}>
                <Link href={`/newsDetail/${news.id}`}>
                  <a title={news.title}>
                    <figure>
                      <img src={news.image_link} alt={news.title} />
                    </figure>

                    <span className="main-title">{news.title}</span>
                    <span className="comments-line">
                      <span className="left-icon fa fa-comments"></span>240
                      Comments
                    </span>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </aside>

        <div className="right-side innerpages col-sm-4 col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
