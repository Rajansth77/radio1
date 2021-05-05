import ProgramSchedule from "components/programSchedule/ProgramSchedule";
import React from "react";
import { useRouter } from "next/router";
// import AbortController from "abort-controller"

// const abortC = new AbortController();

const ProgramSchedules = ({ ProgramTime, listItems }) => {
  const router = useRouter();
  return <ProgramSchedule day={ProgramTime} list={listItems} />;
};

export default ProgramSchedules;

export const getStaticProps = async () => {
  try {
    const programSchedule = await fetch(
      `https://www.uniquefm.com.np/api/get-program-list`
      // ,{ signal: abortC.signal }
    );
    const programScheduleData = await programSchedule.json();

    const programList = await fetch(
      "https://www.uniquefm.com.np/api/get-program-by-schedule/6"
      // ,{ signal: abortC.signal }
    );
    const programListData = await programList.json();
    return {
      props: {
        listItems: programListData,
        ProgramTime: programScheduleData,
      },
    };
  } catch (error) {
    console.warn(error);
  }
};
