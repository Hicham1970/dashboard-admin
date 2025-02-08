/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Header from './Header';
import StorageIcon from '@mui/icons-material/Storage';
import CalculateIcon from '@mui/icons-material/Calculate';
import { tokens } from './../theme';


export default function BarChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [port, setPort] = useState();
  const [stBd, setStBd] = useState();
  const [mean, setMean] = useState();
  const [trim, setTrim] = useState();

  const calculateMean = () => {
    const mean = (Number(port) + Number(stBd)) / 2;
    setMean(mean.toFixed(2));

  }

  const calculateTrim = () => {
    const trim = port - stBd;
    setTrim(trim.toFixed(2));

  }


  const handleFormSubmit = (values) => {
    console.log('Form valeursInitial:', values);
    // Perform calculations with the submitted values


  };

  return (
    <Box m="20px">
      <Header title="TEST CALCULATION" subtitle="Test of Calculation" />
      <form>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"

          flexDirection="row"
          gap="30px"
          p="30px"

          borderRadius="8px"
        >
          <TextField
            width="100%"
            variant="filled"
            type="number"
            label="Port"

            onChange={e => setPort(e.target.value)}
            value={port}
            name="port"

            sx={{ flexGrow: "1" }}
          />
          <TextField
            width="100%"
            variant="filled"
            type="number"
            label="StBd"
            onChange={e => setStBd(e.target.value)}
            value={stBd}
            name="stBd"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            width="100%"
            variant="filled"
            type="number"
            placeholder="Mean"
            onChange={e => setMean(e.target.value)}
            value={mean}
            name="mean"
            sx={{ flexColumn: "span 1" }}
          />
          <TextField
            width="100%"
            variant="filled"
            type="number"
            placeholder="Trim"
            onChange={e => setTrim(e.target.value)}
            value={trim}
            name="trim"
            sx={{ gridColumn: "span 1" }}
          />
          <Box display="flex" justifyContent="center" alignItems={'center'} mt="20px">
            <Button
              type="button"
              variant="contained"
              color="secondary"
              sx={{
                color: colors.primary[400],
                fontWeight: "bold",
                fontSize: "1.2rem",
                borderRadius: "10px",
              }}
              onClick={() => calculateMean()}
            >
              Calculate Mean
              <StorageIcon sx={{ ml: "10px" }} />
            </Button>
            <Button
              type="button"
              variant="contained"
              onClick={() => calculateTrim()}

              sx={{
                mx: "60px",
                color: colors.primary[800],
                backgroundColor:
                  colors.redAccent[300],
                fontWeight: "bold",
                fontSize: "1.2rem",
                borderRadius: "10px",
              }}
            >
              Calculate Trim
              <CalculateIcon sx={{ ml: "10px" }} />
            </Button>
          </Box>

        </Box>
      </form>


    </Box >
  )
}
