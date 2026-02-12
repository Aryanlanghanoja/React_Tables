import { DataGrid } from "@mui/x-data-grid";
import { TextField, Box } from "@mui/material";
import { useState } from "react";
import data from "../Data/source.json";
import styles from "./Table.module.css";

const columns = [
  {
    field: "Enrollment_No",
    headerName: "Enrollment\nNo",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Name",
    headerName: "Name",
    flex: 1,
    minWidth: 120,
    editable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Batch",
    headerName: "Batch",
    width: 100,
    editable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Department",
    headerName: "Department",
    flex: 1,
    minWidth: 350,
    editable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_1_SGPA",
    headerName: "Sem 1",
    type: "number",
    width: 80,
    editable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_2_SGPA",
    headerName: "Sem 2",
    type: "number",
    width: 80,
    editable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_3_SGPA",
    headerName: "Sem 3",
    type: "number",
    width: 80,
    editable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_4_SGPA",
    headerName: "Sem 4",
    type: "number",
    width: 80,
    editable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_5_SGPA",
    headerName: "Sem 5",
    type: "number",
    width: 80,
    editable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_6_SGPA",
    headerName: "Sem 6",
    type: "number",
    width: 80,
    editable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_7_SGPA",
    headerName: "Sem 7",
    type: "number",
    width: 80,
    editable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_8_SGPA",
    headerName: "Sem 8",
    type: "number",
    width: 80,
    editable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "CGPA",
    headerName: "CGPA",
    type: "number",
    width: 80,
    editable: false,
    headerAlign: "center",
    align: "center",
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
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20, 25, 50]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
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
