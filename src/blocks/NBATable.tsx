// The Table component
import React from 'react';

type TableCell = string | number | JSX.Element;

type TableProps = {
  header: TableCell[];
  rows: TableCell[][];
  teams: TableCell[][];
};

export default function Table({ header, rows, teams }: TableProps) {
  console.log("HEADER ", header);
  console.log("ROWS ", rows);
  console.log("TEAMS ", teams);
  return (
    <table>
      <thead>
        <tr>
          <th>Team</th>
          {Array.from({ length: header.periods }, (_, index) => (
            <th>
              {index + 1}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {teams.awayTeam}
          </td>
          {rows.awayTeamScores.map(((score, index) => (
            <td key={index}>
              {score}
            </td>
          )))}
        </tr>

        <tr>
          <td>{teams.homeTeam}</td>
          {rows.homeTeamScores.map(((score, index) => (
            <td key={index}>
              {score}
            </td>
          )))}
        </tr>
      </tbody>
    </table >
  );
}
