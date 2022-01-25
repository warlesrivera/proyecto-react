import { useState } from "react";

const columns = [
  {
    field: "id",
    headerName: "id",
    sortable: true,
    width: 250,
  },
  {
    field: "fullName",
    headerName: "Full name",
    sortable: true,
    width: 250,
    valueGetter: (params) =>
      `${params.row.name || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "email",
    headerName: "Email",
    sortable: false,
    width: 220,
  },
  {
    field: "gender",
    headerName: "Gender",
    sortable: false,
    width: 220,
    valueGetter: (params) => `${params.row.gender === "m" ? "Men" : "Women"}`,
  },
  {
    field: "terms",
    headerName: "Acept Terms",
    sortable: false,
    width: 220,
    valueGetter: (params) => `${params.row.terms ? "Yes" : "No"}`,
  },
];

export const useColumn = (initialState = columns) => {
  const [columns, setColumns] = useState(initialState);
  const handleColumnChange = ({ newColumns }) => {
    setColumns({
      newColumns,
    });
  };

  return [columns, handleColumnChange];
};
