import BreakingNews from "components/homepage/breakingNews";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import staticTitles from "staticTitles";
import TajaSamachar from "components/homepage/tajaSamachar";
import Ad600 from "components/common/ads/ad-600x90";
import MukhyaSamachar from "components/homepage/mukhyaSamachar";
import CatOne from "components/homepage/catOne";
import CatTwo from "components/homepage/catTwo";
import CatThree from "components/homepage/catThree";
import CatFour from "components/homepage/catFour";
import CatFive from "components/homepage/catFive";
import CatSix from "components/homepage/catSix";
import CatSeven from "components/homepage/catSeven";
import CatEight from "components/homepage/catEight";
import PopularNews from "components/homepage/popularNews";
import TodaysHighlights from "components/homepage/todaysHighlights";
import SpecialPrograms from "components/homepage/specialPrograms";
import Ad280 from "components/common/ads/ad-280x480";
import LatestPodcast from "components/homepage/latestPodcast";
import CountDown from "components/homepage/countDown";
import RadioPresentors from "components/homepage/radioPresentors";
import MostRead from "components/homepage/mostRead";
// import AbortController from "abort-controller"

// const abortC = new AbortController();
// const abortC1 = new AbortController();
// const abortC2 = new AbortController();
// const abortC3 = new AbortController();
// const abortC4 = new AbortController();
// const abortC5 = new AbortController();

const Index = ({
  bNewsOne,
  popular,
  highlight,
  special,
  latestPodcast,
  rj,
}) => {
  const router = useRouter();
  useEffect(() => {
    if (!status) {
    }
    // return () => {
    //   abortC.abort();
    //   abortC1.abort();
    //   abortC2.abort();
    //   abortC3.abort();
    //   abortC4.abort();
    //   abortC5.abort();
    // };
  }, []);
  return (
    <main>
      <Head>
        <title>{staticTitles.home}</title>
        <meta name="description" content="Radio Template One" />
        <link
          rel="canonical"
          href={process.env.NEXT_PUBLIC_ORIGINAL_SITE_URL}
        />
      </Head>

      <div className="container">
        <section className="section breaking-news">
          <BreakingNews items={bNewsOne?.slice(0, 4)} />
        </section>

        <section className="section taja-samachar-section">
          <TajaSamachar items={bNewsOne} title="ताजा समाचार" />
        </section>

        <section className="section full-ad">
          <Ad600 />
        </section>

        <div className="row content-section">
          <aside className="left-side col-sm-8 col-md-9">
            <section className="section common-section photo-section">
              <MukhyaSamachar
                items={bNewsOne.slice(0, 2)}
                title="मुख्य समाचार"
              />
            </section>

            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatOne items={bNewsOne.slice(0, 4)} title="राजनीति" />
            </section>

            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatTwo items={bNewsOne} title="अर्थ बाणिज्य" title1="खेलकुद" />
            </section>

            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatThree items={bNewsOne.slice(0, 6)} title="प्रदेश समाचार" />
            </section>
            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatFour items={bNewsOne} title="मनोरञ्जन" />
            </section>

            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatFive items={bNewsOne} title="विश्व" />
            </section>

            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatSix items={bNewsOne.slice(0, 4)} title="भिडियो ग्यालरी" />
            </section>

            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatSeven items={bNewsOne} title="फोटो ग्यालरी" />
            </section>

            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatEight items={bNewsOne} title="रोचक समाचार" />
            </section>
          </aside>

          <div className="right-side col-sm-4 col-md-3">
            <div className="items samachar-box">
              <PopularNews items={popular} title="Popular News" />
            </div>
            <div className="items adbox">
              <Ad280 />
            </div>

            <div className="items samachar-box todays">
              <TodaysHighlights items={highlight} title="Today's Highlights" />
            </div>

            <div className="items adbox">
              <Ad280 />
            </div>

            <div className="items samachar-box">
              <SpecialPrograms items={special} title="Special Programmes" />
            </div>

            <div className="items adbox">
              <Ad280 />
            </div>

            <div className="items samachar-box">
              <LatestPodcast items={latestPodcast} title="Latest Podcast" />
            </div>

            <div className="items adbox">
              <Ad280 />
            </div>

            <div className="items samachar-box countdown">
              <CountDown />
            </div>

            <div className="items adbox">
              <Ad280 />
            </div>

            <div className="items samachar-box rjs">
              <RadioPresentors items={rj} title="Radio Presentors" />
            </div>

            <div className="items adbox">
              <Ad280 />
            </div>

            <div className="items samachar-box">
              <MostRead />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps = async () => {
  try {
    const latest = await fetch(
      "https://www.uniquefm.com.np/api/get-latest-news-data"
      // ,{ signal: abortC.signal }
    );
    const latestData = await latest.json();

    const popular = await fetch(
      "https://www.uniquefm.com.np/api/get-sidebar1-popular-news-data"
      // ,{ signal: abortC1.signal }
    );
    const popularData = await popular.json();

    const highlight = await fetch(
      "https://www.uniquefm.com.np/api/get-sidebar1-today-highlight-data"
      // ,{ signal: abortC2.signal }
    );
    const highlightData = await highlight.json();

    const special = await fetch(
      "https://www.uniquefm.com.np/api/get-sidebar1-special-program-data"
      // ,{ signal: abortC3.signal }
    );
    const specialData = await special.json();

    const latestPodcast = await fetch(
      "https://www.uniquefm.com.np/api/get-sidebar1-latest-podcast-data"
      // ,{ signal: abortC4.signal }
    );
    const latestPodcastData = await latestPodcast.json();

    const rj = await fetch(
      "https://www.uniquefm.com.np/api/get-sidebar1-radio-presenter-data"
      // ,{ signal: abortC5.signal }
    );
    const rjData = await rj.json();

    return {
      props: {
        bNewsOne: latestData,
        popular: popularData,
        highlight: highlightData,
        special: specialData,
        latestPodcast: latestPodcastData,
        rj: rjData,
      },
    };
  } catch (error) {
    console.warn(error);
  }
};

export default Index;
