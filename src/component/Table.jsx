import { DataGrid } from "@mui/x-data-grid";
import { TextField } from "@mui/material";
import { useState } from "react";
import data from "../Data/source.json";
import styles from "./Table.module.css";

const columns = [
  {
    field: "Enrollment_No",
    headerName: "Roll No",
    width: 120,
    headerAlign: "center",
    align: "center",
    headerTooltip: "Roll No",
  },
  {
    field: "Name",
    headerName: "Name",
    width: 120,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerTooltip: "Name",
  },
  {
    field: "Batch",
    headerName: "Batch",
    width: 120,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerTooltip: "Batch",
  },
  {
    field: "Department",
    headerName: "Department",
    width: 350,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerTooltip: "Department",
  },
  {
    field: "Sem_1_SGPA",
    headerName: "Sem 1",
    type: "number",
    width: 120,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerTooltip: "Sem 1",
  },
  {
    field: "Sem_2_SGPA",
    headerName: "Sem 2",
    type: "number",
    width: 120,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerTooltip: "Sem 2",
  },
  {
    field: "Sem_3_SGPA",
    headerName: "Sem 3",
    type: "number",
    width: 120,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerTooltip: "Sem 3",
  },
  {
    field: "Sem_4_SGPA",
    headerName: "Sem 4",
    type: "number",
    width: 120,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerTooltip: "Sem 4",
  },
  {
    field: "Sem_5_SGPA",
    headerName: "Sem 5",
    type: "number",
    width: 120,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerTooltip: "Sem 5",
  },
  {
    field: "Sem_6_SGPA",
    headerName: "Sem 6",
    type: "number",
    width: 120,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerTooltip: "Sem 6",
  },
  {
    field: "Sem_7_SGPA",
    headerName: "Sem 7",
    type: "number",
    width: 120,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerTooltip: "Sem 7",
  },
  {
    field: "Sem_8_SGPA",
    headerName: "Sem 8",
    type: "number",
    width: 120,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerTooltip: "Sem 8",
  },
  {
    field: "CGPA",
    headerName: "CGPA",
    type: "number",
    width: 120,
    editable: false,
    headerAlign: "center",
    align: "center",
    headerTooltip: "CGPA",
  },
];

const rows = data.map((item) => ({
  id: item.Enrollment_No,
  ...item,
}));

export default function Table() {
  const [searchText, setSearchText] = useState("");

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase()),
    ),
  );

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Student Records Management</h1>
        <div className={styles.searchContainer}>
          <TextField
            className={styles.searchField}
            label="Search Students"
            variant="outlined"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by name, enrollment, department..."
          />
        </div>
      </div>
      <div className={styles.table}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          disablePagination
          checkboxSelection
          disableRowSelectionOnClick
          filterMode="client"
          sortingMode="client"
          disableColumnMenu={false}
          disableColumnFilter={false}
          slotProps={{
            columnMenu: {
              anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
              transformOrigin: { vertical: 'top', horizontal: 'center' },
            },
          }}
          sx={{
            height: 600,
            width: "100%",
            "& .MuiDataGrid-root": {
              width: "100%",
            },
          }}
        />
      </div>
    </>
  );
}
