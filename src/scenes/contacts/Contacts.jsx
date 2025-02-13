import { Box } from '@mui/material'
import {
    DataGrid,
    GridToolbar
} from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataContacts } from '../../data/mockData'
import Header from "../../components/Header"
import { useTheme } from '@mui/material'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { useState } from 'react';
import { Button } from '@mui/material'
import PrintToPdf from '../../functions/PrintToPdf'


export default function Contacts() {
    // eslint-disable-next-line no-unused-vars
    const [isLoader, setIsLoader] = useState(false)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registerId", headerName: "Register ID", flex: 0.5 },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left" },
        { field: "phone", headerName: "Phone", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "address", headerName: "Address", flex: 1 },
        { field: "city", headerName: "City", flex: 1 },
        { field: "zipCode", headerName: "ZipCode", flex: 1 },
    ]
    return (
        <Box m="20px" id="printMe">
            <Box display={'flex'} justifyContent="space-between" alignItems="center">
                <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
            </Box>
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
                        borderRadius: "4px",

                    }}
                >
                    <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                    {isLoader ? "Generating Report..." : "Download Reports"}
                </Button>
            </Box>
            <Box
                m="40px 0 0 0"
                height="75vh"
                // styling using classNames
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: colors.blueAccent[700],
                        backgroundBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        border: "none",
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    }

                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={
                        columns
                    }
                    components={
                        {
                            Toolbar: GridToolbar,
                        }}

                />
            </Box>
        </Box>
    )



}
