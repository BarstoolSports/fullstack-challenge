import { useEffect, useState } from "react";
import { sports } from "../constants/sports";

interface TableHeader {
  periods: number;
}

interface TableRow {
  awayTeamScores: number[];
  homeTeamScores: number[];
}

interface TeamInfo {
  awayTeam: string;
  homeTeam: string;
}

export default function useDataToTable(sport: string) {
  const [header, setHeader] = useState<TableHeader>({ periods: 0 });
  const [rows, setRows] = useState<TableRow>({
    awayTeamScores: [], homeTeamScores: []
  });
  const [teams, setTeams] = useState<TeamInfo>({
    awayTeam: "", homeTeam: ""
  });

  useEffect(() => {
    fetch(`${process.env.API_URL}/api/${sport}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA ", data);
        setHeader({ periods: data.home_period_scores.length });
        setRows(
          {
            awayTeamScores: data.away_period_scores,
            homeTeamScores: data.home_period_scores,
          },
        );
        if (sport === sports.NBA) {
          setTeams(
            {
              awayTeam: data.away_team.abbreviation,
              homeTeam: data.home_team.abbreviation,
            },
          );
        } else if (sport === sports.MLB) {

          setTeams(
            {
              awayTeam: data.away_team.abbreviation,
              homeTeam: data.home_team.abbreviation,
            },
          );
        } else if (sport === sports.NFL) {
          // Add more sports as needed
        }
      })
      .catch((error) => console.log(error));
  }, [sport]);

  return { header, rows, teams };
}
