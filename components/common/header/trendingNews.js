import useFetch from "api/useFetch";
import Link from "next/link";
import { useRouter } from "next/router";

const TrendingNews = ({ title = "Trending" }) => {
  const { data: trending, error, isPending } = useFetch(
    "https://www.uniquefm.com.np/api/get-trending-data"
  );

  return (
    <ul className="trending-news">
      {isPending && <></>}
      {error && <div>{error}</div>}
      <li className="trending-title">
        <span className="trend-title">{title}</span>
      </li>
      <TrendingMenu url="/" label={`# ${trending && trending["1"]}`} />
      <TrendingMenu url="/" label={trending && trending["2"]} />
      <TrendingMenu url="/" label={trending && trending["3"]} />
      <TrendingMenu url="/" label={trending && trending["4"]} />
      <TrendingMenu url="/" label={trending && trending["5"]} />
      <TrendingMenu url="/" label={trending && trending["6"]} />
      <TrendingMenu url="/" label={trending && trending["7"]} />
      <TrendingMenu url="/" label={trending && trending["8"]} />
      <TrendingMenu url="/" label={trending && trending["9"]} />
      <TrendingMenu url="/" label={trending && trending["10"]} />
    </ul>
  );
};

export default TrendingNews;

const TrendingMenu = ({ url = "/", label = "" }) => {
  const router = useRouter();
  return (
    <li>
      <Link href={url}>
        <a title={label}>{label}</a>
      </Link>
    </li>
  );
};
