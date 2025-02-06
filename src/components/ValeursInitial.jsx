/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import {
  Formik, Form, errors, touched, handleBlur, handleChange, handleSubmit,
} from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as Yup from "yup";
import Header from './Header';
import StorageIcon from '@mui/icons-material/Storage';
import CalculateIcon from '@mui/icons-material/Calculate';
import { tokens } from './../theme';


export default function ValeursInitial() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [valeursInitial, setValeursInitial] = useState({
    lbp: 0,
    keelCorrection: 0,
    foreDistance: 0,
    aftDistance: 0,
    midDistance: 0,
    forePort: 0,
    foreStbd: 0,
    meanFore: '',
    aftPort: 0,
    aftStbd: 0,
    meanAft: '',
    midPort: '',
    midStbd: 0,
    meanMid: 0,
    trim: '',
    lbm: '',
    foreCorrected: '',
    aftCorrected: '',
    midCorrected: '',
    trimCorrected: '',
    meanOfMean: '',
    quarterMean: '',
    meanForeAft: '',
    density: 1.025,
    draftSup: '',
    draftInf: '',
    displacementSup: '',
    displacementInf: '',
    displacement: '',
    tpcSup: '',
    tpcInf: '',
    tpc: '',
    lcfSup: '',
    lcfInf: '',
    lcf: '',
    mtcSup: '',
    mtcInf: '',
    mtc: '',
    quarter: '',
    quarterPlus50: '',
    quarterMinus50: '',
    firstTrimCorrection: '',
    secondTrimCorrection: '',
    displacementDstyCorrected: '',
    displacementTrimCorrected: '',

  });




  // Valide Number:
  const numberRegexEp = /^\d+(\.\d{1,2})?$/;

  // Validation schema
  const validationSchema = Yup.object().shape({
    lbp: Yup
      .number()
      .required("Required"),
    keelCorrection: Yup.number().required("Required"),
    aftDistance: Yup.number().required("Required"),
    foreDistance: Yup.number().required("Required"),
    midDistance: Yup.number().required("Required"),
    forePort: Yup.number().required("Required"),
    foreStbd: Yup.number().required("Required"),
    aftPort: Yup.number().required("Required"),
    aftStbd: Yup.number().required("Required"),
    midPort: Yup.number().required("Required"),
    midStbd: Yup.number().required("Required"),
    density: Yup.number().required("Required"),
    draftInf: Yup.number().required("Required"),
    displacementInf: Yup.number().required("Required"),
    tpcInf: Yup.number().required("Required"),
    lcfInf: Yup.number().required("Required"),
    mtcPlus50: Yup.number().required("Required"),
    mtcMinus50: Yup.number().required("Required"),
    draftSup: Yup.number().required("Required"),
    displacementSup: Yup.number().required("Required"),
    tpcSup: Yup.number().required("Required"),
    lcfSup: Yup.number().required("Required"),
  });



  //  Exemple simplifié:
  const calculateMeanFore = useCallback(() => {
    const { forePort, foreStbd } = valeursInitial; // Use Formik's "values"
    console.log("Calculating meanFore with:", forePort, foreStbd);
    return ((Number(forePort) || 0) + (Number(foreStbd) || 0)) / 2;
  }, [valeursInitial]);

  const meanFore = useMemo(() => calculateMeanFore(), [calculateMeanFore]);


  const calculateMeanAft = useCallback(() => {
    const { aftPort, aftStbd } = valeursInitial;
    return ((Number(aftPort) || 0) + (Number(aftStbd) || 0)) / 2;
  }, [valeursInitial]);
  console.log('MeanAft:', calculateMeanAft())

  const calculateMeanMid = useCallback(() => {
    const { midPort, midStbd } = valeursInitial;
    return ((Number(midPort) || 0) + (Number(midStbd) || 0)) / 2;
  }, [valeursInitial]);
  console.log('MeanMid:', calculateMeanMid())


  const calculateTrim = useCallback(() => {
    return (calculateMeanAft() || 0) - (calculateMeanFore() || 0);
  }, [calculateMeanAft, calculateMeanFore]);

  useEffect(() => {
    setValeursInitial((prev) => ({
      ...prev,
      meanFore: calculateMeanFore(),
      meanAft: calculateMeanAft(),
      meanMid: calculateMeanMid(),
      trim: calculateTrim(),
    }));
  }, [calculateMeanFore, calculateMeanAft, calculateMeanMid, calculateTrim]);



  const handleChange = (e, setFieldValue) => { // Add setFieldValue
    const { name, value } = e.target;
    setFieldValue(name, value); // Use setFieldValue to update Formik state
  };

  const meanAft = useMemo(() => calculateMeanAft(), [calculateMeanAft]);
  const meanMid = useMemo(() => calculateMeanMid(), [calculateMeanMid]);

  const handleFormSubmit = (values) => {
    console.log('Form valeursInitial:', values);
    // Perform calculations with the submitted values
    const calculatedValues = {
      ...values,
      meanFore: calculateMeanFore(),
      meanAft: calculateMeanAft(),
      meanMid: calculateMeanMid(),
      trim: calculateTrim()
      // ... any other calculations you need
    }
    alert('Form valeursInitial submitted:', calculatedValues); // Show calculated values
  };

  return (
    <Box m="20px">
      <Header title="NEW CALCULATION" subtitle="Create a New draft survey" />
      <Formik
        onSubmit={(values) => {
          console.log(values); // Accès à values dans onSubmit
        }}
        initialValues={valeursInitial}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          valeursInitial,
          setFieldValue,
          touched,
          handleBlur,
          handleChange,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              mx="auto"
              gap="20px"

              sx={{
                width: "500px",
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Lbp"
                onBlur={handleBlur}
                onChange={handleChange} // Pass setFieldValue
                value={values.lbp}
                name="lbp"
                error={!!touched.lbp && !!errors.lbp}
                helperText={touched.lbp && errors.lbp}
                sx={{ flexGrow: "1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Keel Correction"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.keelCorrection}
                name="keelCorrection"
                error={!!touched.keelCorrection && !!errors.keelCorrection}
                helperText={touched.keelCorrection && errors.keelCorrection}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth

                variant="filled"
                type="number"
                label="Density"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.density}
                name="density"
                error={!!touched.density && !!errors.density}
                helperText={touched.density && errors.density}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Trim"
                onBlur={handleBlur}
                onChange={handleChange}
                value={calculateTrim()}
                name="trim"
                error={!!touched.trim && !!errors.trim}
                helperText={touched.trim && errors.trim}
                sx={{ gridColumn: "span 1" }}
              />


              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="lbm"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lbm}
                name="lbm"
                error={!!touched.lbm && !!errors.lbm}
                helperText={touched.lbm && errors.lbm}
                sx={{ gridColumn: "span 1" }}
              />

            </Box >
            <Box
              sx={{
                borderBottom: "4px solid",
                borderColor: colors.blueAccent[100],
                margin: "20px 0",
              }}
            ></Box>

            {/* Ligne2 */}
            <Box
              mt="40px"
              display="flex"
              gap="30px"

              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Fore Port"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.forePort}
                name="forePort"
                error={!!touched.forePort && !!errors.forePort}
                helperText={touched.forePort && errors.forePort}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="fore Stbd"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.foreStbd}
                name="foreStbd"
                error={!!touched.foreStbd && !!errors.foreStbd}
                helperText={touched.foreStbd && errors.foreStbd}
                sx={{ flexColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="fore Distance"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.foreDistance}
                name="foreDistance"
                error={!!touched.foreDistance && !!errors.foreDistance}
                helperText={touched.foreDistance && errors.foreDistance}
                sx={{ flexColumn: "span 2" }}

              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Mean Fore"
                onBlur={handleBlur}
                onChange={handleChange}
                value={
                  calculateMeanFore()
                }
                name="meanFore"
                error={!!touched.meanFore && !!errors.meanFore}
                helperText={touched.meanFore && errors.meanFore}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>

            {/* Ligne3 */}
            <Box
              mt="10px"
              display="flex"
              gap="30px"

              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Aft Port"
                onBlur={handleBlur}
                onChange={(e) => handleChange(e, setFieldValue)}
                value={values.aftPort}
                name="aftPort"
                error={!!touched.aftPort && !!errors.aftPort}
                helperText={touched.aftPort && errors.aftPort}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Aft Stbd"
                onBlur={handleBlur}
                onChange={(e) => handleChange(e, setFieldValue)}
                value={values.aftStbd}
                name="aftStbd"
                error={!!touched.aftStbd && !!errors.aftStbd}
                helperText={touched.aftStbd && errors.aftStbd}
                sx={{ flexColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Aft Distance"
                onBlur={handleBlur}
                onChange={(e) => handleChange(e, setFieldValue)}
                value={values.aftDistance}
                name="aftDistance"
                error={!!touched.aftDistance && !!errors.aftDistance}
                helperText={touched.aftDistance && errors.aftDistance}
                sx={{ flexColumn: "span 2" }}

              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Mean Aft"
                onBlur={handleBlur}
                onChange={(e) => handleChange(e, setFieldValue)}
                value={meanAft}
                name="meanAft"
                error={!!touched.meanAft && !!errors.meanAft}
                helperText={touched.meanAft && errors.meanAft}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            {/* Ligne4 */}
            <Box
              mt="10px"
              display="flex"
              gap="30px"

              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Mid Port"
                onBlur={handleBlur}
                onChange={(e) => handleChange(e, setFieldValue)}
                value={values.midPort}
                name="midPort"
                error={!!touched.midPort && !!errors.midPort}
                helperText={touched.midPort && errors.midPort}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Mid Stbd"
                onBlur={handleBlur}
                onChange={(e) => handleChange(e, setFieldValue)}
                value={values.midStbd}
                name="midStbd"
                error={!!touched.midStbd && !!errors.midStbd}
                helperText={touched.midStbd && errors.midStbd}
                sx={{ flexColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Mid Distance"
                onBlur={handleBlur}
                onChange={(e) => handleChange(e, setFieldValue)}
                value={values.midDistance}
                name="midDistance"
                error={!!touched.midDistance && !!errors.midDistance}
                helperText={touched.midDistance && errors.midDistance}
                sx={{ flexColumn: "span 2" }}

              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Mean Mid"
                onBlur={handleBlur}
                onChange={(e) => handleChange(e, setFieldValue)}
                value={meanMid}
                name="meanMid"
                error={!!touched.meanMid && !!errors.meanMid}
                helperText={touched.meanMid && errors.meanMid}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            {/* Ligne5 */}
            <Box
              mt="20px"
              display="flex"
              gap="50px"

              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Fore Corrected"
                onBlur={handleBlur}
                onChange={(e) => handleChange(e, setFieldValue)}
                value={setValeursInitial.foreCorrected}
                name="foreCorrected"
                error={!!touched.foreCorrected && !!errors.foreCorrected}
                helperText={touched.foreCorrected && errors.foreCorrected}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Aft Corrected"
                onBlur={handleBlur}
                onChange={handleChange}
                value={setValeursInitial.aftCorrected}
                name="aftCorrected"
                error={!!touched.aftCorrected && !!errors.aftCorrected}
                helperText={touched.aftCorrected && errors.aftCorrected}
                sx={{ flexColumn: "span 2" }}

              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Mid Corrected"
                onBlur={handleBlur}
                onChange={handleChange}
                value={setValeursInitial.midCorrected}
                name="midCorrected"
                error={!!touched.midCorrected && !!errors.midCorrected}
                helperText={touched.midCorrected && errors.midCorrected}
              />
            </Box>

            {/* Ligne6 */}
            <Box
              mt="20px"
              display="flex"
              gap="100px"

              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Trim Corrected"
                onBlur={handleBlur}
                onChange={handleChange}
                value={setValeursInitial.trimCorrected}
                name="trimCorrected"
                error={!!touched.midPort && !!errors.midPort}
                helperText={touched.midPort && errors.midPort}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Mean F/A"
                onBlur={handleBlur}
                onChange={handleChange}
                value={setValeursInitial.meanForeAft}
                name="meanForeAft"
                error={!!touched.meanForeAft && !!errors.meanForeAft}
                helperText={touched.meanForeAft && errors.meanForeAft}
                sx={{ flexColumn: "span 2" }}
              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Mean Of Mean"
                onBlur={handleBlur}
                onChange={handleChange}
                value={setValeursInitial.meanOfMean}
                name="meanOfMean"
                error={!!touched.meanOfMean && !!errors.meanOfMean}
                helperText={touched.meanOfMean && errors.meanOfMean}
                sx={{ flexColumn: "span 2" }}

              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="quarterMean"
                onBlur={handleBlur}
                onChange={handleChange}
                value={setValeursInitial.quarterMean}
                name="quarterMean"
                error={!!touched.quarterMean && !!errors.quarterMean}
                helperText={touched.quarterMean && errors.quarterMean}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box
              sx={{
                borderBottom: "6px solid",
                borderColor: colors.greenAccent[100],
                margin: "20px 0",
              }}
            ></Box>
            {/* Ligne 7  */}

            <Box
              mt="60px"
              display="flex"
              gap="10px"

              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Draft Inf"
                onBlur={handleBlur}
                onChange={handleChange}
                value={setValeursInitial.draftInf}
                name="draftInf"
                error={!!touched.draftInf && !!errors.draftInf}
                helperText={touched.draftInf && errors.draftInf}
                sx={{ flexColumn: "span 1", width: "200px" }}
              />
              <TextField
                fullWidth

                variant="filled"
                type="number"
                label="Displ Inf"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.displacementInf || 0}
                name="displacementInf"
                error={!!touched.displacementInf && !!errors.displacementInf}
                helperText={touched.displacementInf && errors.displacementInf}
                sx={{ flexColumn: "span 1", width: "200px" }}
              />
              <TextField
                fullWidth

                variant="filled"
                type="number"
                label="TPC Inf"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tpcInf || 0}
                name="tpcInf"
                error={!!touched.tpcInf && !!errors.tpcInf}
                helperText={touched.tpcInf && errors.tpcInf}
                sx={{ flexColumn: "span 1", width: "200px" }}

              />
              <TextField
                fullWidth

                variant="filled"
                type="number"
                label="LCF Inf"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lcfInf || 0}
                name="lcfInf"
                error={!!touched.lcfInf && !!errors.lcfInf}
                helperText={touched.lcfInf && errors.lcfInf}
                sx={{ flexColumn: "span 1", width: "200px" }}
              />

              <Box
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", mx: "40px" }}
              >
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  type="number"
                  label="Quarter +50"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.quarterPlus50 || 0}
                  name="quarter50Inf"
                  error={!!touched.quarterPlus50 && !!errors.quarterPlus50}
                  helperText={touched.quarterPlus50 && errors.quarterPlus50}
                  sx={{ flexColumn: "span 1", width: "130px", mx: "40px" }}
                />

                <TextField
                  fullWidth

                  variant="filled"
                  type="number"
                  label="MTC +50"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.mtcPlus50 || 0}
                  name="mtcPlus50"
                  error={!!touched.mtcPlus50 && !!errors.mtcPlus50}
                  helperText={touched.mtcPlus50 && errors.mtcPlus50}
                  sx={{ flexColumn: "span 1", width: "130px" }}
                />
              </Box>
            </Box>
            {/* Ligne 7  */}

            <Box
              mt="10px"
              display="flex"
              gap="10px"

              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="QuarterMean"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.quarterMean || 0}
                name="quarterMean"
                error={!!touched.quarterMean && !!errors.quarterMean}
                helperText={touched.quarterMean && errors.quarterMean}
                sx={{ flexColumn: "span 1", width: "200px" }}
              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Displ"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.displacement || 0}
                name="displacement"
                error={!!touched.displacement && !!errors.displacement}
                helperText={touched.displacement && errors.displacement}
                sx={{ flexColumn: "span 1", width: "200px" }}
              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="TPC"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tpc || 0}
                name="tpc"
                error={!!touched.tpc && !!errors.tpc}
                helperText={touched.tpc && errors.tpc}
                sx={{ flexColumn: "span 1", width: "200px" }}

              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="LCF"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lcf || 0}
                name="lcf"
                error={!!touched.lcf && !!errors.lcf}
                helperText={touched.lcf && errors.lcf}
                sx={{ flexColumn: "span 1", width: "200px" }}
              />

              <Box
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", mx: "40px" }}
              >
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  type="number"
                  label="Quarter"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.quarter || 0}
                  name="quarter"
                  error={!!touched.quarter && !!errors.quarter}
                  helperText={touched.quarter && errors.quarter}
                  sx={{ flexColumn: "span 1", width: "130px", mx: "40px" }}
                />

                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  type="number"
                  label="Delta MTC"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.mtc || 0}
                  name="mtc"
                  error={!!touched.mtc && !!errors.mtc}
                  helperText={touched.mtc && errors.mtc}
                  sx={{ flexColumn: "span 1", width: "130px" }}
                />
              </Box>
            </Box>

            {/* Ligne 8  */}

            <Box
              mt="10px"
              display="flex"
              gap="10px"

              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Draft Sup"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.draftSup || 0}
                name="draftSup"
                error={!!touched.draftSup && !!errors.draftSup}
                helperText={touched.draftSup && errors.draftSup}
                sx={{ flexColumn: "span 1", width: "200px" }}
              />
              <TextField
                fullWidth

                variant="filled"
                type="number"
                label="Displ Sup"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.displacementSup || 0}
                name="displacementSup"
                error={!!touched.displacementSup && !!errors.displacementSup}
                helperText={touched.displacementSup && errors.displacementSup}
                sx={{ flexColumn: "span 1", width: "200px" }}
              />
              <TextField
                fullWidth

                variant="filled"
                type="number"
                label="TPC Sup"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tpcSup || 0}
                name="tpcSup"
                error={!!touched.tpcSup && !!errors.tpcSup}
                helperText={touched.tpcSup && errors.tpcSup}
                sx={{ flexColumn: "span 1", width: "200px" }}

              />
              <TextField
                fullWidth

                variant="filled"
                type="number"
                label="LCF Sup"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lcfSup || 0}
                name="lcfSup"
                error={!!touched.lcfSup && !!errors.lcfSup}
                helperText={touched.lcfSup && errors.lcfSup}
                sx={{ flexColumn: "span 1", width: "200px" }}
              />

              <Box
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", mx: "40px" }}
              >
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  type="number"
                  label="Quarter -50"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.quarterMinus50 || 0}
                  name="quarterMinus50"
                  error={!!touched.quarterMinus50 && !!errors.quarterMinus50}
                  helperText={touched.quarterMinus50 && errors.quarterMinus50}
                  sx={{ flexColumn: "span 1", width: "130px", mx: "40px" }}
                />

                <TextField
                  fullWidth

                  variant="filled"
                  type="number"
                  label="MTC-50"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.mtcMinus50 || 0}
                  name="mtcMinus50"
                  error={!!touched.mtcMinus50 && !!errors.mtcMinus50}
                  helperText={touched.mtcMinus50 && errors.mtcMinus50}
                  sx={{ flexColumn: "span 1", width: "130px" }}
                />
              </Box>

            </Box>
            {/* Ligne 9 */}
            <Box
              mt="20px"
              display="flex"
              gap="10px"

              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="F T C "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstTrimcorrection || 0}
                name="firstTrimcorrection"
                error={!!touched.firstTrimcorrection && !!errors.firstTrimcorrection}
                helperText={touched.firstTrimcorrection && errors.firstTrimcorrection}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="S T C"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.secondTrimcorrection || 0}
                name="secondTrimcorrection"
                error={!!touched.secondTrimcorrection && !!errors.secondTrimcorrection}
                helperText={touched.secondTrimcorrection && errors.secondTrimcorrection}
                sx={{ flexColumn: "span 2" }}
              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Disp Corr Trim"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.displacementTrimCorrected || 0}
                name="displacementTrimCorrected"
                error={!!touched.displacementTrimCorrected && !!errors.displacementTrimCorrected}
                helperText={touched.displacementTrimCorrected && errors.displacementTrimCorrected}
                sx={{ flexColumn: "span 2" }}

              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Disp Corr Dsty"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.displacementDstyCorrected || 0}
                name="displacementDstyCorrected"
                error={!!touched.displacementDstyCorrected && !!errors.displacementDstyCorrected}
                helperText={touched.displacementDstyCorrected && errors.displacementDstyCorrected}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            {/* Ligne 10   */}


            <Box display="flex" justifyContent="center" alignItems={'center'} mt="20px">
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{
                  color: colors.primary[400],
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  borderRadius: "10px",
                }}
              >
                To Database
                <StorageIcon sx={{ ml: "10px" }} />
              </Button>
              <Button
                type="button"
                variant="contained"
                onClick={calculateMeanFore}

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
                Calculate
                <CalculateIcon sx={{ ml: "10px" }} />
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}
