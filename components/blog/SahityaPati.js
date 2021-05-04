import Link from "next/link";
import React from "react";

const SahityaPati = () => {
  return (
    <>
      <h1>साहित्यपाटी</h1>
      <div className="media bichar-item">
        <Link href="/bichar-detail">
          <a title="">
            <figure>
              <img
                src="https://setopati.com/wp-content/uploads/2017/07/bidhya-110x110.png"
                className="author rounded-circle"
                alt=""
              />
            </figure>
            <span className="main-title">आँखा सामुन्ने एउटा साँझ</span>
            <span className="author-name">निर्भीकजङ्ग रायमाझी</span>
          </a>
        </Link>
      </div>

      <div className="media bichar-item">
        <Link href="/bichar-detail">
          <a title="">
            <figure>
              <img
                src="https://setopati.com/wp-content/uploads/2017/11/jeewan-subedi-110x110.jpg"
                className="author rounded-circle"
                alt=""
              />
            </figure>
            <span className="main-title">संक्रमण</span>
            <span className="author-name">जीवन सुवेदी</span>
          </a>
        </Link>
      </div>

      <div className="media bichar-item">
        <Link href="/bichar-detail">
          <a title="">
            <figure>
              <img
                src="https://setopati.com/wp-content/uploads/2017/06/sarada_dahal-110x110.jpg"
                className="author rounded-circle"
                alt=""
              />
            </figure>
            <span className="main-title">चियावाली</span>
            <span className="author-name">सारदा दाहाल</span>
          </a>
        </Link>
      </div>

      <div className="media ad-item">
        <Link href="/bichar-detail">
          <a title="">
            <img
              src="https://setopati.com/wp-content/uploads/2018/02/244x150_PPTMT.gif"
              alt=""
            />
          </a>
        </Link>
      </div>
    </>
  );
};

export default SahityaPati;

const BicharItem = () => {
  return (
    <div className="media bichar-item">
      <Link href="/bichar-detail">
        <a title="">
          <figure>
            <img
              src="https://setopati.com/wp-content/uploads/2017/07/bidhya-110x110.png"
              className="author rounded-circle"
              alt=""
            />
          </figure>
          <span className="main-title">आँखा सामुन्ने एउटा साँझ</span>
          <span className="author-name">निर्भीकजङ्ग रायमाझी</span>
        </a>
      </Link>
    </div>
  );
};
