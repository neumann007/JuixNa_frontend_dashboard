import React from "react";

const Table = ({
  columns,
  renderRow,
  headerClass,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  headerClass: string;
  data: any[];
}) => {
  return (
    <table className="w-full">
      <thead>
        <tr className={`text-left text-sm text-gray-500 ${headerClass}`}>
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
