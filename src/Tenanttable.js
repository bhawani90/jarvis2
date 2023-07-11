import React, { useState } from "react";
import { useTable, useFilters} from "react-table";
import './Table.css';

export default function Tenanttable({ columns, data }) {

  // Use the state and functions returned from useTable to build your UI
  const [filterInput, setFilterInput] = useState("");

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter 
  } = useTable(
    {
      columns,
      data
    },
     useFilters
    );

    const handleFilterChange = e => {
      const value = e.target.value || undefined;
      setFilter("tenant", value);
     
    // Update the name filter. 
    //Now the table will search for that name and show only the rows which have a matching name
      setFilterInput(value);
    };
    
  // Render the UI for your table
  return (
    <>
    <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search name"}
      />

    <table className="table" {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}