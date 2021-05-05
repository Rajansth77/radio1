import NewsDetail from "components/newsDetail/NewsDetail";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import useFetch from "api/useFetch";
// import AbortController from "abort-controller"

// const abortC = new AbortController();
// const abortC1 = new AbortController();

const DetailNews = ({ SingleNews }) => {
  const router = useRouter();

  const { data, error, isPending } = useFetch(
    "https://www.uniquefm.com.np/api/get-seo-data"
  );

  return (
    <>
      {isPending && <> </>}
      {error && <div>{error}</div>}

      <Head>
        {data && (
          <>
            <title>{data.ogtitle}</title>
            <meta name="description" content={data.ogdescription} />

            <meta charSet="utf-8" />

            <meta property="og:description" content={data.ogdescription} />

            <meta property="og:image" content={data.ogimage} />
            <meta property="og:title" content={data.ogtitle} />
            <meta property="og:image:width" content="180" />
            <meta property="og:image:height" content="110" />
            <meta
              property="og:url"
              content={`https://www.news@uniquefm.com.np`}
            />
            <meta property="og:type" content="article" />
            <meta name="twitter:card" content={data.ogdescription} />
            <meta
              name="twitter:url"
              content={`https://twitter.com/unique976fm`}
            />
            <meta name="twitter:title" content={data.ogtitle} />
            <meta name="twitter:description" content={data.ogdescription} />
            <meta
              name="twitter:image"
              content={`https://twitter.com/unique976fm`}
            />
          </>
        )}
      </Head>

      <NewsDetail content={SingleNews && SingleNews} />
    </>
  );
};

export const getStaticPaths = async () => {
  const NewsRes = await fetch(
    "https://www.uniquefm.com.np/api/get-news-detail/39"
    // ,{ signal: abortC.signal }
  );
  const dataNews = await NewsRes.json();

  const paths = dataNews.moreNews.map((items) => {
    return {
      params: { id: items.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  try {
    const SingleNews = await fetch(
      `https://www.uniquefm.com.np/api/get-news-detail/${id}`
      // ,{ signal: abortC1.signal }
    );
    const NewsData = await SingleNews.json();

    return {
      props: {
        SingleNews: NewsData,
      },
    };
  } catch (error) {
    console.warn(error);
  }
};

export default DetailNews;
