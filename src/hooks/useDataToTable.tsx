import { useEffect, useState } from "react";
import { sports } from "../constants/sports";

interface TableHeader {
  label: string;
}

interface TableRow {
  scores: (string | number)[];
}

type MLBScores = [
  team: string,
  ...inningScores: number[],
  runs: number,
  hits: number,
  errors: number,
];

interface MLBRow {
  scores: MLBScores;
}

interface GameInfo {
  awayTeam: {
    lastName: string;
  };
  homeTeam: {
    lastName: string;
  };
  status: string;
  inning?: number;
}

export default function useDataToTable(sport: string) {
  const [header, setHeader] = useState<TableHeader[]>([]);
  const [rows, setRows] = useState<(TableRow | MLBRow)[]>([]);
  const [gameInfo, setGameInfo] = useState<GameInfo>({
    awayTeam: {
      lastName: "",
    },
    homeTeam: {
      lastName: "",
    },
    status: "",
    inning: undefined
  });

  useEffect(() => {
    fetch(`${process.env.API_URL}/api/${sport}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          throw new Error("No data received from API");
        }
        // add team color here but JSON data doesn't support that
        setGameInfo({
          awayTeam: {
            lastName: data.away_team.last_name,
          },
          homeTeam: {
            lastName: data.home_team.last_name,
          },
          status: data.event_information.status
        });
        if (sport === sports.NBA) {
          const periodHeaders =
            data.home_period_scores.map((_: undefined, index: number) => (
              {
                label: `${index + 1}`
              }
            ));
          setHeader([{ label: '' }, ...periodHeaders]);
          setRows([
            {
              scores: [
                data.away_team.abbreviation,
                ...data.away_period_scores
              ]
            },
            {
              scores: [
                data.home_team.abbreviation,
                ...data.home_period_scores
              ]
            }
          ]);
        } else if (sport === sports.MLB) {
          const inningHeaders = data.home_period_scores.map(
            (_: undefined, index: number) => (
              { label: `${index + 1}` }
            )
          );
          setHeader([
            { label: '' },
            ...inningHeaders,
            { label: 'R' },
            { label: 'H' },
            { label: 'E' }
          ]
          );
          setRows([
            {
              scores: [
                data.away_team.abbreviation,
                ...data.away_period_scores,
                data.away_batter_totals.runs,
                data.away_batter_totals.hits,
                data.away_errors
              ] as MLBScores
            },
            {
              scores: [
                data.home_team.abbreviation,
                ...data.home_period_scores,
                data.home_batter_totals.runs,
                data.home_batter_totals.hits,
                data.home_errors
              ] as MLBScores
            }
          ]);
          setGameInfo({
            ...gameInfo,
            inning: data.home_period.scores.length
          });
        } else if (sport === sports.NFL) { // add more sports as needed
        }
      })
      .catch((error) => console.log(error));
  }, [sport]);

  return { header, rows, gameInfo };
}
