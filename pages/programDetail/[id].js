import ProgramDetail from "components/programDetail/ProgramDetail";
import React from "react";
import { useRouter } from "next/router";
// import AbortController from "abort-controller"

// const abortC = new AbortController();
// const abortC1 = new AbortController();

const index = ({ DetailProgram }) => {
  const router = useRouter();

  return <ProgramDetail content={DetailProgram} />;
};

export default index;

export const getStaticPaths = async () => {
  const detailRes = await fetch(
    "https://www.uniquefm.com.np/api/get-program-detail/57"
    // ,{ signal: abortC.signal }
  );
  const detailData = await detailRes.json();

  const paths = detailData.otherPrograms.map((items) => {
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
    const schedule = await fetch(
      `https://www.uniquefm.com.np/api/get-program-detail/${id}`
      // ,{ signal: abortC1.signal }
    );
    const scheduleData = await schedule.json();

    return {
      props: {
        DetailProgram: scheduleData,
      },
    };
  } catch (error) {
    console.warn(error);
  }
};
