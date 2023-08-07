import MUIDataTable from "mui-datatables";
import users from "./user.json";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export class tableJson extends React.Component {
  render() {
    const columns = [
      {
        name: "id",
        label: "ID",
      },
      {
        name: "name",
        label: "NAME",
      },
      {
        name: "gender",
        label: "GENDER",
      },
    ];
    const options = {
      filter: true,
      selectableRows: "multiple",
      filterType: "Dropdown",
      responsive: "vertical",
      rowsPerPage: 5,
    };
    return (
      <ThemeProvider theme={darkTheme}>
        <MUIDataTable
          title={"Lista de usuarios"}
          data={users}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    )
  }
}
