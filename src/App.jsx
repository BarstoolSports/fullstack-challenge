import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorData, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, errorData };
};

function App() {
  const periodLengths = {
    MLB: 9,
    NBA: 4,
    NHL: 3,
    NFL: 4,
    NCAAF: 4,
    NCAAB: 2,
    MLS: 2,
  };

  const [selectedLeague, setSelectedLeague] = useState("MLB");
  const [awayScore, setAwayScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const { data, isLoading, errorData } = useApi(
    `http://localhost:8080/${selectedLeague}`,
  );

  useEffect(() => {
    setAwayScore(
      data?.away_period_scores.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      ),
    );

    setHomeScore(
      data?.home_period_scores.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      ),
    );
  }, [data]);

  const periods = Math.max(
    data?.away_period_scores?.length,
    data?.home_period_scores?.length,
  );

  const renderPeriodLabels = (league) => {
    const periodLabels = [];
    for (let i = 1; i <= periods; i += 1) {
      periodLabels.push(
        <td key={i} className="text-center p-1 border bg-gray-100 text-[12px]">
          {i}
        </td>,
      );
    }
    if (league === "MLB") {
      periodLabels.push(
        <th
          key="Runs"
          className="text-center p-1 border bg-gray-100 w-8 min-w-8 text-[12px]"
        >
          R
        </th>,
        <th
          key="Hits"
          className="text-center p-1 border bg-gray-100 w-8 min-w-8 text-[12px]"
        >
          H
        </th>,
        <th
          key="Errors"
          className="text-center p-1 border bg-gray-100 w-8 min-w-8 text-[12px]"
        >
          E
        </th>,
      );
    } else {
      periodLabels.push(
        <th
          key="Runs"
          className="text-center p-1 border bg-gray-100 w-8 min-w-8 text-[12px]"
        >
          T
        </th>,
      );
    }

    return periodLabels;
  };

  const renderScoreRow = (teamInfo, gameData) => {
    const team = teamInfo === "Home" ? gameData.home_team : gameData.away_team;
    const scores =
      teamInfo === "Home"
        ? gameData.home_period_scores
        : gameData.away_period_scores;
    const batterTotals =
      teamInfo === "Home"
        ? gameData.home_batter_totals
        : gameData.away_batter_totals;
    const errors =
      teamInfo === "Home" ? gameData.home_errors : gameData.away_errors;
    // Create an array of X periods filled with null
    const emptyInnings = new Array(periodLengths[gameData?.league]).fill(null);

    // Concatenate scores with emptyPeriods to ensure we have X periods
    const allInnings = scores.concat(emptyInnings.slice(scores.length));

    const renderTotals = () => {
      return gameData?.league === "MLB" ? (
        <>
          <th className="text-center border w-8 min-w-8 text-[12px]">
            {teamInfo === "Home" ? homeScore : awayScore}
          </th>
          <th className="text-center border w-8 min-w-8 text-[12px]">
            {batterTotals?.hits}
          </th>
          <th className="text-center border w-8 min-w-8 text-[12px]">
            {errors}
          </th>
        </>
      ) : (
        <th className="text-center border w-8 min-w-8 text-[12px]">
          {teamInfo === "Home" ? homeScore : awayScore}
        </th>
      );
    };

    return (
      <tr>
        <td className="text-center p-2 border text-[12px]">
          {gameData?.league === "MLB" ? team?.abbreviation : team?.last_name}
        </td>
        {allInnings.map((score, index) => (
          <td
            key={index}
            className="text-center border w-8 min-w-8 text-[12px]"
          >
            {score !== null ? score : ""}
          </td>
        ))}
        {renderTotals()}
      </tr>
    );
  };

  const displayPitchers = (allPitchers) => {
    return (
      <div className="text-[12px] flex ml-2 mt-3">
        <div className="mr-4">
          WP:{" "}
          {allPitchers.find((pitcher) => {
            return pitcher.win === true;
          })?.display_name || "n/a"}
        </div>
        <div>
          {" "}
          LP:{" "}
          {allPitchers.find((pitcher) => {
            return pitcher.loss === true;
          })?.display_name || "n/a"}
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (errorData) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error: {errorData.message}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="flex items-center justify-center mb-4">
        <label
          className="flex items-center pl-[0.15rem] hover:cursor-pointer"
          htmlFor="flexSwitchChecked"
        >
          <img
            src="./MLB.gif"
            alt="MLB"
            height="32px"
            width="32px"
            className="pr-2"
          />
          MLB | NBA
          <img src="./NBA.gif" alt="NBA" height="32px" width="32px" />
        </label>
      </div>
      <input
        className="h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-400  after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-blue-600 after:transition-[background-color_0.2s,transform_0.2s]  checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:transition-[transform_0.2s] hover:cursor-pointer"
        type="checkbox"
        role="switch"
        id="flexSwitchChecked"
        onChange={() =>
          setSelectedLeague(selectedLeague === "MLB" ? "NBA" : "MLB")
        }
      />
      <div className="bg-gray-50 p-6 shadow-xl rounded-lg mt-10">
        <div className="flex items-center justify-center">
          <div className="flex-1 bg-gray-50 p-4 text-center text-gray-700">
            <img
              src={`./${`${data?.away_team.first_name} ${data?.away_team.last_name}`}.gif`}
              alt="team"
            />
            <b>{data?.away_team.abbreviation}</b>
          </div>
          <div className="flex-1 bg-gray-50 text-[24px] text-center">
            {data?.away_period_scores.reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0,
            )}
          </div>
          <div className="flex-1 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="blue"
              className={`w-3 h-3 ${
                awayScore < homeScore &&
                data?.event_information.status === "completed"
                  ? "invisible"
                  : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="flex-1 bg-gray-50 text-blue-600  text-[14px] text-center">
            {data?.event_information?.status === "completed"
              ? "Final"
              : data?.event_information?.status}
          </div>
          <div className="flex-1 flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="blue"
              className={`w-3 h-3 ${
                homeScore < awayScore &&
                data?.event_information.status === "completed"
                  ? "invisible"
                  : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="flex-1 bg-gray-50 text-[24px] text-center">
            {data?.home_period_scores.reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0,
            )}
          </div>
          <div className="flex-1 bg-gray-50 p-4 text-center text-gray-700">
            <img
              src={`./${`${data?.home_team.first_name} ${data?.home_team.last_name}`}.gif`}
              alt="team"
            />
            <b>{data?.home_team.abbreviation}</b>
          </div>
        </div>
        <table className="w-full bg-white border">
          <thead>
            <tr>
              <td className="text-center bg-gray-100">{/* Empty Header */}</td>
              {renderPeriodLabels(data?.league)}
            </tr>
          </thead>
          <tbody>
            {renderScoreRow("Away", data)}
            {renderScoreRow("Home", data)}
          </tbody>
        </table>
        {data?.event_information?.status === "completed" &&
          data?.league === "MLB" &&
          displayPitchers(
            data?.away_pitchers && data?.home_pitchers
              ? [...data.away_pitchers, ...data.home_pitchers]
              : [],
          )}
      </div>
    </div>
  );
}

export default App;
