import NewsList from "components/newsList/NewsList";
import React from "react";
import { useRouter } from "next/router";
// import AbortController from "abort-controller"

// const abortC = new AbortController();
// const abortC1 = new AbortController();

const ListNews = ({ SingleNews }) => {
  const router = useRouter();

  return <NewsList content={SingleNews} />;
};

export const getStaticPaths = async () => {
  const ListRes = await fetch(
    "https://www.uniquefm.com.np/api/get-news-list?page=1&per_page=30&catSlug=local-news"
    // ,{ signal: abortC.signal }
  );
  const ListData = await ListRes.json();

  const paths = ListData.posts.data.map((items) => {
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
      `https://www.uniquefm.com.np/api/get-news-list?page=1&per_page=30&catSlug=local-news`
      // ,{ signal: abortC1.signal }
    );
    const NewsListData = await SingleNews.json();

    return {
      props: {
        SingleNews: NewsListData,
      },
    };
  } catch (error) {
    console.warn(error);
  }
};

export default ListNews;
