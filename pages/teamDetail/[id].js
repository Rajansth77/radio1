import TeamDetail from "components/teamDetail/TeamDetail";
import React from "react";
import { useRouter } from "next/router";
// import AbortController from "abort-controller"

// const abortC = new AbortController();
// const abortC1 = new AbortController();

const DetailTeam = ({ SingleTeam }) => {
  const router = useRouter();

  return <TeamDetail content={SingleTeam && SingleTeam} />;
};

export const getStaticPaths = async () => {
  const TeamRes = await fetch(
    "https://www.uniquefm.com.np/api/get-member-detail/12"
    // ,{ signal: abortC.signal }
  );
  const dataTeam = await TeamRes.json();

  const paths = dataTeam.moreTeam.map((items) => {
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
    const SingleTeam = await fetch(
      `https://www.uniquefm.com.np/api/get-member-detail/${id}`
      // ,{ signal: abortC1.signal }
    );
    const TeamData = await SingleTeam.json();

    return {
      props: {
        SingleTeam: TeamData,
      },
    };
  } catch (error) {
    console.warn(error);
  }
};

export default DetailTeam;
