// The Table component
import React from 'react';

type TableCell = string | number | JSX.Element;

type TableProps = {
  headers: TableCell[];
  rows: TableCell[][];
};

export default function Table({ headers, rows }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => <th key={index}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
