import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <section className="error-page">
      <section className="page_404">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 ">
              <div className=" col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>The page you are looking for is not available!</p>

                  <Link href="/">
                    <a className="link_404">← Take Me Home</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ErrorPage;
