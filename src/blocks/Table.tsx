import React from "react";

interface TableProps {
  header: { label: string; }[];
  rows: { scores: (string | number)[]; }[];
}

export default function Table({ header, rows }: TableProps) {
  if (!header.length || !rows.length) return null;

  const headerStyle = header.map((_, index) =>
    `border-black px-4 py-2 text-center border-r-[1px]
    ${index === 0 ? 'w-1/6' : 'w-auto'}`
  );


  return (
    <table className="w-4/5 mx-auto mb-8 border-2 border-black">
      <thead className="w-full border-b-2 border-black">
        <tr className="w-full">
          {header.map((head, index) => (
            <th key={index} className={headerStyle[index]}>{head.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className="text-center">
            {row.scores.map((score, scoreIndex) => (
              <td key={`${score}_${scoreIndex}`}
                className={`border-black py-2 border-r-[1px]`}>{score}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
