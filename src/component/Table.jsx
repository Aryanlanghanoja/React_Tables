import { DataGrid } from "@mui/x-data-grid";
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { useState, useMemo } from "react";
import data from "../Data/source.json";
import styles from "./Table.module.css";

const columns = [
  {
    field: "Enrollment_No",
    headerName: "Roll No",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Name",
    headerName: "Name",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Batch",
    headerName: "Batch",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Department",
    headerName: "Department",
    width: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_1_SGPA",
    headerName: "Sem 1",
    type: "number",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_2_SGPA",
    headerName: "Sem 2",
    type: "number",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_3_SGPA",
    headerName: "Sem 3",
    type: "number",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_4_SGPA",
    headerName: "Sem 4",
    type: "number",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_5_SGPA",
    headerName: "Sem 5",
    type: "number",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_6_SGPA",
    headerName: "Sem 6",
    type: "number",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_7_SGPA",
    headerName: "Sem 7",
    type: "number",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Sem_8_SGPA",
    headerName: "Sem 8",
    type: "number",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "CGPA",
    headerName: "CGPA",
    type: "number",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
];

const rows = data.map((item) => ({ id: item.Enrollment_No, ...item }));

export default function Table() {
  const [searchText, setSearchText] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedDept, setSelectedDept] = useState("");

  const batches = useMemo(
    () => [...new Set(data.map((item) => item.Batch))],
    [],
  );
  const departments = useMemo(
    () => [...new Set(data.map((item) => item.Department))],
    [],
  );

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const matchesSearch = Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchText.toLowerCase()),
      );
      const matchesBatch = selectedBatch ? row.Batch === selectedBatch : true;
      const matchesDept = selectedDept ? row.Department === selectedDept : true;
      return matchesSearch && matchesBatch && matchesDept;
    });
  }, [searchText, selectedBatch, selectedDept]);

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

          <FormControl className={styles.dropdown}>
            <InputLabel>Batch</InputLabel>
            <Select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              label="Batch"
            >
              <MenuItem value="">All</MenuItem>
              {batches.map((batch) => (
                <MenuItem key={batch} value={batch}>
                  {batch}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className={styles.dropdown}>
            <InputLabel>Department</InputLabel>
            <Select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              label="Department"
            >
              <MenuItem value="">All</MenuItem>
              {departments.map((dept) => (
                <MenuItem key={dept} value={dept}>
                  {dept}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
          sx={{
            height: 600,
            width: "100%",
            "& .MuiDataGrid-columnHeaders": {
              background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
              color: "#000000",
              fontWeight: "600",
            },
            "& .MuiDataGrid-columnHeader": {
              borderRight: "1px solid rgba(255, 255, 255, 0.2)",
            },
            "& .MuiDataGrid-columnHeader:last-child": {
              borderRight: "none",
            },
            "& .MuiDataGrid-row:nth-of-type(even)": {
              backgroundColor: "#f8f9fa",
            },
            "& .MuiDataGrid-row:nth-of-type(odd)": {
              backgroundColor: "#ffffff",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#e3f2fd",
            },
          }}
        />
      </div>
    </>
  );
}
