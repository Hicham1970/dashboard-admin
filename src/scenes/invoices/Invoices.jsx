import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { Button } from "@mui/material";
import PrintToPdf from "../../functions/PrintToPdf";
import { useState } from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";


export default function Invoices() {
  const [isLoader, setIsLoader] = useState(false)
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex:1,
      renderCell:(params)=>(
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field:"phone",
      headerName:"Phone",
      flex:1
    },
    {
      field:"date",
      headerName:"Date", 
      flex:1, 
    }

  ]
  return (
    <Box>
      <Header 
        title="Invoices"
        subtitle="List of Invoice Balances"
      />
      <Box>
        <Button 
        type="button"
        onClick={PrintToPdf()}
        disabled={isLoader}

          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius:"4px",
            
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          {isLoader ? "Generating Report..." : "Download Reports"}
        </Button>
      </Box>
      <Box
      id="printMe"
      m="40px 0 0 0"
      height="75vh"
      sx={{
      "& .MuiDataGrid-cell":{
      borderBottom:"none",
      },
      "& .name-column-cell .MuiDataGrid-cell MuiDataGrid-cell--textLeft":{
      color:colors.greenAccent[300],
      },
      "& .MuiDataGrid-columnHeader":{
      backgroundColor:colors.blueAccent[700]
      },
      "& .MuiDtaGrid-virtualScroller":{
      backgroundColor:colors.primary[400]
      },
      "& .MuiDataGrid-footerContainer":{
      borderTop:"none",
      backgroundColor:colors.blueAccent[700]
      },
      "& .MuiCheckbox-root":{
      color:`${colors.greenAccent[200]} !important`

      }
      
      }}
      >
      <DataGrid
      checkboxSelection 
      rows={mockDataInvoices}
      columns={columns}
       />

      </Box>
    </Box>
    




      
  )        
}


