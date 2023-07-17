import React from "react";
import { useTeams } from "../hooks/useTeams";
import Table from "../blocks/NBATable";

type BoxScoreProps = {
  sport: string;
};

export default function BoxScore({ sport }: BoxScoreProps) {
  const data = useTeams(sport);

  return (
    <Table data={data} />
  );
}