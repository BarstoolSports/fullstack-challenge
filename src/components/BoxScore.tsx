import React from "react";
import Table from "../blocks/NBATable";
import useDataToTable from "../hooks/useDataToTable";

type BoxScoreProps = {
  sport: string;
};

export default function BoxScore({ sport }: BoxScoreProps) {
  const { header, rows, teams } = useDataToTable(sport);
  return (
    <Table header={header} rows={rows} teams={teams} />
  );
}