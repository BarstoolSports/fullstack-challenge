import React from "react";
import Table from "../blocks/Table";
import useDataToTable from "../hooks/useDataToTable";

type BoxScoreProps = {
  sport: string;
};

export default function BoxScore({ sport }: BoxScoreProps) {
  const { header, rows } = useDataToTable(sport);
  return (
    <Table header={header} rows={rows} />
  );
}