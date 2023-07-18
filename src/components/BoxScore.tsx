import React from "react";
import Table from "../blocks/Table";
import useDataToTable from "../hooks/useDataToTable";
import { sports } from "../constants/sports";

type BoxScoreProps = {
  sport: typeof sports.NBA | typeof sports.MLB | typeof sports.NFL;
};

export default function BoxScore({ sport }: BoxScoreProps) {
  const { header, rows, gameInfo } = useDataToTable(sport);
  const titleStyle = "uppercase text-3xl font-bold w-1/2 text-center";

  return (
    <div className="w-4/5 mx-auto mb-8">
      <Table header={header} rows={rows} />
      <div className="flex items-center justify-between py-2">
        <h3 className={`${titleStyle}`}>{gameInfo.awayTeam.lastName}</h3>
        <div>
          <p className="text-sm font-bold uppercase">
            {gameInfo.status}
          </p>
        </div>
        <h3 className={`${titleStyle}`}>{gameInfo.homeTeam.lastName}</h3>
      </div>
    </div>
  );
}