/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import StorageIcon from "@mui/icons-material/Storage";
import CalculateIcon from "@mui/icons-material/Calculate";
import { tokens } from "./../theme";

export default function ValeursInitial() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [lbp, setLbp] = useState();
  const [keelCorrection, setKeelCorrection] = useState();
  const [foreDistance, setForeDistance] = useState();
  const [aftDistance, setAftDistance] = useState();
  const [midDistance, setMidDistance] = useState();
  const [forePort, setForePort] = useState();
  const [foreStbd, setForeStbd] = useState();
  const [meanFore, setMeanFore] = useState();
  const [aftPort, setAftPort] = useState();
  const [aftStbd, setAftStbd] = useState();
  const [meanAft, setMeanAft] = useState();
  const [midPort, setMidPort] = useState();
  const [midStbd, setMidStbd] = useState();
  const [meanMid, setMeanMid] = useState();
  const [trim, setTrim] = useState();
  const [lbm, setLbm] = useState();
  const [foreCorrected, setForeCorrected] = useState();
  const [aftCorrected, setAftCorrected] = useState();
  const [midCorrected, setMidCorrected] = useState();
  const [trimCorrected, setTrimCorrected] = useState();
  const [meanOfMean, setMeanOfMean] = useState();
  const [quarterMean, setQuarterMean] = useState();
  const [meanForeAft, setMeanForeAft] = useState();
  const [density, setDensity] = useState();
  const [draftSup, setDraftSup] = useState();
  const [draftInf, setDraftInf] = useState();
  const [displacementSup, setDisplacementSup] = useState();
  const [displacementInf, setDisplacementInf] = useState();
  const [displacement, setDisplacement] = useState();
  const [tpc, setTpc] = useState();
  const [lcf, setLcf] = useState();
  const [quarter, setQuarter] = useState();
  const [mtc, setMtc] = useState();
  const [tpcSup, setTpcSup] = useState();
  const [tpcInf, setTpcInf] = useState();
  const [lcfSup, setLcfSup] = useState();
  const [lcfInf, setLcfInf] = useState();
  const [quarterMinus50, setQuarterMinus50] = useState();
  const [mtcMinus50, setMtcMinus50] = useState();
  const [firstTrimCorrection, setFirstTrimCorrection] = useState();
  const [secondTrimCorrection, setSecondTrimCorrection] = useState();
  const [displacementTrimCorrected, setDisplacementTrimCorrected] = useState();
  const [displacementDstyCorrected, setDisplacementDstyCorrected] = useState();
  const [mtcPlus50, setMtcPlus50] = useState();
  const [quarterPlus50, setQuarterPlus50] = useState();

  //  Fonctions de la logique 
  const calculateMeanFore = useCallback(() => {
    console.log("Calculating meanFore with:", forePort, foreStbd);
    const meanFore = ((Number(forePort) || 0) + (Number(foreStbd) || 0)) / 2;
    console.log("Calculated meanFore:", meanFore);
    setMeanFore(meanFore.toFixed(2));
  }, [forePort, foreStbd]);

  const calculateMeanAft = useCallback(() => {
    console.log("Calculating meanAft with:", aftPort, aftStbd);
    const meanAft = ((Number(aftPort) || 0) + (Number(aftStbd) || 0)) / 2;
    console.log("Calculated meanAft:", meanAft);
    setMeanAft(meanAft.toFixed(2));
  }, [aftPort, aftStbd]);

  const calculateMeanMid = useCallback(() => {
    console.log("Calculating meanMid with:", midPort, midStbd);
    const meanMid = ((Number(midPort) || 0) + (Number(midStbd) || 0)) / 2;
    console.log("Calculated meanMid:", meanMid);
    setMeanMid(meanMid.toFixed(2));
  }, [midPort, midStbd]);

  const calculateTrim = useCallback(() => {
    console.log("Calculate trim with:", meanAft, meanFore);
    const trim = Number(meanAft) - Number(meanFore);
    setTrim(trim.toFixed(2));
    console.log(trim);
  }, [meanAft, meanFore]);

  const calculateLbm = useCallback(() => {
    // Ensure lbp, foreDistance, and aftDistance have valid numeric values
    const lbpValue = Number(lbp) || 0;
    const foreDistanceValue = Number(foreDistance) || 0;
    const aftDistanceValue = Number(aftDistance) || 0;

    let lbm = lbpValue;

    // Calcul du LBM en fonction des types de distance
    if (foreDistanceValue < 0 && aftDistanceValue > 0) {
      // LBM = LBP - Distance Avant - Distance Arrière
      lbm = lbpValue - foreDistanceValue - aftDistanceValue;
    } else if (foreDistanceValue > 0 && aftDistanceValue < 0) {
      // LBM = LBP + Distance Avant + Distance Arrière
      lbm = lbpValue + foreDistanceValue + aftDistanceValue;
    } else if (foreDistanceValue < 0 && aftDistanceValue < 0) {
      // LBM = LBP - Distance Avant - Distance Arrière
      lbm = lbpValue - foreDistanceValue - aftDistanceValue;
    } else if (foreDistanceValue > 0 && aftDistanceValue > 0) {
      // LBM = LBP + Distance Avant - Distance Arrière
      lbm = lbpValue + foreDistanceValue - aftDistanceValue;
    } else if (foreDistanceValue === 0 && aftDistanceValue < 0) {
      // LBM = LBP - Distance Arrière
      lbm = lbpValue - aftDistanceValue;
    } else if (foreDistanceValue === 0 && aftDistanceValue > 0) {
      // LBM = LBP - Distance Arrière
      lbm = lbpValue - aftDistanceValue;
    } else if (foreDistanceValue < 0 && aftDistanceValue === 0) {
      // LBM = LBP - Distance Avant
      lbm = lbpValue - foreDistanceValue;
    } else if (foreDistanceValue > 0 && aftDistanceValue === 0) {
      // LBM = LBP + Distance Avant
      lbm = lbpValue + foreDistanceValue;
    } else if (foreDistanceValue === 0 && aftDistanceValue === 0) {
      // LBM = LBP
      lbm = lbpValue;
    }

    console.log(
      "Calculating LBM with:",
      foreDistanceValue,
      aftDistanceValue,
      lbpValue
    );
    console.log("LBM:", lbm);
    setLbm(lbm.toFixed(2), "m"); // Convert lbm to meters
  }, [foreDistance, aftDistance, lbp]);

  const calculateForeCorrected = useCallback(() => {
    console.log("Calculating foreCorrected with:", forePort, foreStbd, lbp);
    // Calcul des drafts Corrigés:
    let foreCorrected = 0;

    const trimValue = trim;
    const lbmValue = lbm;
    const foreDistanceValue = foreDistance;
    const meanForeValue = meanFore;

    if (foreDistance < 0) {
      foreCorrected =
        Number(meanForeValue) -
        ((Number(trimValue) * Number(foreDistanceValue)) / Number(lbmValue)) *
        (Number(trimValue) > 0 ? 1 : -1);
    } else if (foreDistance > 0) {
      foreCorrected =
        Number(meanForeValue) +
        ((Number(trimValue) * Number(foreDistanceValue)) / Number(lbmValue)) *
        (Number(trimValue) > 0 ? 1 : -1);
    } else if (foreDistance === 0) {
      foreCorrected = meanForeValue;
    }
    console.log("foreCorrected:", foreCorrected);
    setForeCorrected(foreCorrected.toFixed(2));
  }, [foreDistance, lbm, meanFore, trim, lbp, forePort, foreStbd]);

  const calculateAftCorrected = useCallback(() => {
    console.log("Calculating foreCorrected with:", aftPort, aftStbd, lbp);
    // Calcul des drafts Corrigés:
    let aftCorrected = 0;

    const trimValue = trim;
    const lbmValue = lbm;
    const aftDistanceValue = aftDistance;
    const meanAftValue = meanAft;

    if (aftDistance < 0) {
      aftCorrected =
        Number(meanAftValue) -
        ((Number(trimValue) * Number(aftDistanceValue)) / Number(lbmValue)) *
        (Number(trimValue) > 0 ? 1 : -1);
    } else if (aftDistance > 0) {
      aftCorrected =
        Number(meanAftValue) +
        ((Number(trimValue) * Number(aftDistanceValue)) / Number(lbmValue)) *
        (Number(trimValue) > 0 ? 1 : -1);
    } else if (aftDistance === 0) {
      aftCorrected = meanAftValue;
    }
    console.log("foreCorrected:", aftCorrected);
    setAftCorrected(aftCorrected.toFixed(2));
  }, [aftDistance, lbm, meanAft, trim, lbp, aftPort, aftStbd]);

  const calculateMidCorrected = useCallback(() => {
    console.log("Calculating MidCorrected with:", meanMid, lbm, lbp, midDistance, trim);
    // Calcul des drafts Corrigés:
    let midCorrected = 0;

    const trimValue = trim;
    const lbmValue = lbm;
    const midDistanceValue = midDistance;
    const meanMidValue = meanMid;

    if (midDistance < 0) {
      midCorrected =
        Number(meanMidValue) -
        ((Number(trimValue) * Number(midDistanceValue)) / Number(lbmValue)) *
        (Number(trimValue) > 0 ? 1 : -1);
    } else if (midDistance > 0) {
      midCorrected =
        Number(meanMidValue) +
        ((Number(trimValue) * Number(midDistanceValue)) / Number(lbmValue)) *
        (Number(trimValue) > 0 ? 1 : -1);
    } else if (midDistance === 0) {
      midCorrected = meanMidValue;
    }
    console.log("midCorrected:", midCorrected);
    setMidCorrected(midCorrected.toFixed(2));
  }, [midDistance, lbm, meanMid, trim, lbp]);


  const calculateTrimCorrected = useCallback(() => {
    let trimCorrected = 0;
    const foreCorrectedValue = foreCorrected;
    const aftCorrectedValue = aftCorrected;

    trimCorrected = Number(aftCorrectedValue) - Number(foreCorrectedValue);
    setTrimCorrected(trimCorrected.toFixed(2));
    console.log("trimCorrected:", trimCorrected);

  }, [foreCorrected, aftCorrected])


  const calculateMeanForeAft = useCallback(() => {
    console.log("The meanForeAft was calculated with :", foreCorrected, aftCorrected);

    let meanForeAft = 0;
    const foreCorrectedValue = foreCorrected;
    const aftCorrectedValue = aftCorrected;

    meanForeAft = (Number(foreCorrectedValue) + Number(aftCorrectedValue)) / 2;
    setMeanForeAft(meanForeAft.toFixed(2));

  }, [foreCorrected, aftCorrected])

  const calculateMeanOfMean = useCallback(() => {
    console.log("The meanOfMean was calculated with :", meanForeAft, midCorrected);

    let meanOfMean = 0;
    const midCorrectedValue = midCorrected;
    const meanForeAftValue = meanForeAft;

    meanOfMean = (Number(midCorrectedValue) + Number(meanForeAftValue)) / 2;
    setMeanOfMean(meanOfMean.toFixed(2));

  }, [midCorrected, meanForeAft])

  const calculateQuarterMean = useCallback(() => {
    console.log("The quarterMean was calculated with :", meanOfMean, midCorrected);

    let quarterMean = 0;
    const midCorrectedValue = midCorrected;
    const meanOfMeanValue = meanOfMean;

    quarterMean = (Number(midCorrectedValue) + Number(meanOfMeanValue)) / 2;
    setQuarterMean(quarterMean.toFixed(2));

  }, [midCorrected, meanOfMean])

  //  Calcul du displacement

  const calculateDisplacement = useCallback(() => {
    let displacement = 0;
    const displacementSupValue = displacementSup;
    const displacementInfValue = displacementInf;
    const draftSupValue = draftSup;
    const draftInfValue = draftInf;
    const quarterMeanValue = quarterMean;

    console.log("displacementInfValue:", displacementInfValue);
    console.log("displacementSupValue:", displacementSupValue);
    console.log("draftInfValue:", draftInfValue);
    console.log("draftSupValue:", draftSupValue);
    console.log("quarterMeanValue:", quarterMeanValue);



    displacement = Number(displacementInfValue) +
    ((Number(displacementSupValue) - Number(displacementInfValue)) / (Number(draftSupValue) - Number(draftInfValue))) *
      (Number(draftSupValue ) - Number(quarterMeanValue));
    
    setDisplacement(displacement);
    console.log(displacement)


  }, [quarterMean, displacementSup, displacementInf, draftSup, draftInf])





  const handleChange = (e, setFieldValue) => {
    // Add setFieldValue
    const { name, value } = e.target;
    setFieldValue(name, value); // Use setFieldValue to update Formik state
  };


  useEffect(() => {
    calculateMeanFore();
    calculateMeanAft();
    calculateMeanMid();
    calculateTrim();
    calculateLbm();
    calculateForeCorrected();
    calculateAftCorrected();
    calculateMidCorrected();
    calculateMeanForeAft();
    calculateTrimCorrected();
    calculateMeanOfMean();
    calculateQuarterMean();
    calculateDisplacement();

  }, [forePort, foreStbd, aftPort, aftStbd, midPort,
     midStbd, calculateMeanFore, calculateMeanAft, 
     calculateMeanMid, calculateTrim, calculateLbm, 
     calculateForeCorrected, calculateAftCorrected, 
     calculateMidCorrected, calculateMeanForeAft, 
     calculateTrimCorrected, calculateMeanOfMean, 
     calculateQuarterMean, calculateDisplacement, draftInf, draftSup]);

  return (
    <Box m="20px">
      <Header title="NEW CALCULATION" subtitle="Create a New draft survey" />
      <form>
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
            value={lbp}
            onChange={(e) => setLbp(e.target.value)}
            name="lbp"
            sx={{ flexGrow: "2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Keel Correction"
            value={keelCorrection}
            onChange={(e) => setKeelCorrection(e.target.value)}
            name="keelCorrection"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Density"
            onChange={(e) => setDensity(e.target.value)}
            value={density}
            name="density"
            sx={{
              gridColumn: "span 1",
            }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Trim"
            onChange={(e) => setTrim(e.target.value)}
            value={trim}
            name="trim"
            sx={{
              flexColumn: "span 1",
              color: colors.grey[500],
              backgroundColor: colors.redAccent[700],
              fontWeight: "bold",
              fontSize: "1.2rem",
              borderRadius: "10px",
            }}
          />

          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="lbm"
            onChange={(e) => setLbm(e.target.value)}
            value={lbm}
            name="lbm"
            sx={{
              gridColumn: "span 1",
              color: colors.grey[500],
              backgroundColor: colors.redAccent[700],
              fontWeight: "bold",
              fontSize: "1.2rem",
              borderRadius: "10px"
            }}
          />
        </Box>
        {/* Ligne2 */}
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
            onChange={(e) => setForePort(e.target.value)}
            value={forePort}
            name="forePort"
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="fore Stbd"
            onChange={(e) => setForeStbd(e.target.value)}
            value={foreStbd}
            name="foreStbd"
            sx={{ flexColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="fore Distance"
            onChange={(e) => setForeDistance(e.target.value)}
            value={foreDistance}
            name="foreDistance"
            sx={{ flexColumn: "span 2" }}
          />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Mean Fore"
            onChange={() => calculateMeanFore()}
            value={meanFore}
            name="meanFore"
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
            onChange={(e) => setAftPort(e.target.value)}
            value={aftPort}
            name="aftPort"
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Aft Stbd"
            onChange={(e) => setAftStbd(e.target.value)}
            value={aftStbd}
            name="aftStbd"
            sx={{ flexColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Aft Distance"
            onChange={(e) => setAftDistance(e.target.value)}
            value={aftDistance}
            name="aftDistance"
            sx={{
              flexColumn: "span 2",
              textAlign: 'right'
            }}
          />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Mean Aft"
            onChange={(e) => setMeanAft(e.target.value)}
            value={meanAft}
            name="meanAft"
            style={{ textAlign: 'right' }}
            sx={{
              gridColumn: "span 1"
            }}
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
            onChange={(e) => setMidPort(e.target.value)}
            value={midPort}
            name="midPort"
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Mid Stbd"
            onChange={(e) => setMidStbd(e.target.value)}
            value={midStbd}
            name="midStbd"
            sx={{ flexColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Mid Distance"
            onChange={(e) => setMidDistance(e.target.value)}
            value={midDistance}
            name="midDistance"
            sx={{ flexColumn: "span 2" }}
          />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Mean Mid"
            onChange={(e) => setMeanMid(e.target.value)}
            value={meanMid}
            name="meanMid"
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
            onChange={(e) => setForeCorrected(e.target.value)}
            value={foreCorrected}
            name="foreCorrected"
            sx={{
              gridColumn: "span 4",
              color: colors.grey[500],
              backgroundColor: colors.greenAccent[700],
              fontWeight: "bold",
              fontSize: "2.2rem",
              borderRadius: "10px",
            }}
          />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Aft Corrected"
            onChange={(e) => setAftCorrected(e.target.value)}
            value={aftCorrected}
            name="aftCorrected"
            sx={{
              flexColumn: "span 4",
              color: colors.grey[500],
              backgroundColor: colors.greenAccent[700],
              fontWeight: "bold",
              fontSize: "2.2rem",
              borderRadius: "10px",
            }}
          />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Mid Corrected"
            onChange={(e) => setMidCorrected(e.target.value)}
            value={midCorrected}
            name="midCorrected"
            sx={{
              flexColumn: "span 4",
              color: colors.grey[500],
              backgroundColor: colors.greenAccent[700],
              fontWeight: "bold",
              fontSize: "2.2rem",
              borderRadius: "10px",

            }}
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
            label="TrimCor"
            onChange={(e) => setTrimCorrected(e.target.value)}
            value={trimCorrected}
            name="trimCorrected"
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Mean F/A"
            onChange={(e) => setMeanForeAft(e.target.value)}
            value={meanForeAft}
            name="meanForeAft"
            sx={{ flexColumn: "span 2" }}
          />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Mean Of Mean"
            onChange={(e) => setMeanOfMean(e.target.value)}
            value={meanOfMean}
            name="meanOfMean"
            sx={{ flexColumn: "span 2" }}
          />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="quarterMean"
            onChange={(e) => setQuarterMean(e.target.value)}
            value={quarterMean}
            name="quarterMean"
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
            onChange={(e) => setDraftInf(e.target.value)}
            value={Number(quarterMean) - 0.1}
            name="draftInf"
            sx={{ flexColumn: "span 1", width: "200px" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Dis Inf"
            onChange={(e) => setDisplacementInf(e.target.value)}
            value={displacementInf}
            name="displacementInf"
            sx={{ flexColumn: "span 1", width: "200px" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="TPC Inf"
            onChange={(e) => setTpcInf(e.target.value)}
            value={tpcInf}
            name="tpcInf"
            sx={{ flexColumn: "span 1", width: "200px" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="LCF Inf"
            onChange={(e) => setLcfInf(e.target.value)}
            value={lcfInf}
            name="lcfInf"
            sx={{ flexColumn: "span 1", width: "200px" }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "40px",
            }}
          >
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              label="Quarter +50"
              onChange={(e) => setQuarterPlus50(e.target.value)}
              value={Number(quarterMean) + 0.5}
              name="quarter50Sup"
              sx={{ flexColumn: "span 1", width: "130px", mx: "40px" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="MTC +50"
              onChange={(e) => setMtcPlus50(e.target.value)}
              value={mtcPlus50}
              name="mtcPlus50"
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
            label="QuarterMean"
            onChange={(e) => setQuarterMean(e.target.value)}
            value={quarterMean}
            name="quarterMean"
            sx={{ flexColumn: "span 1", width: "200px" }}
          />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Displacement"
            onChange={(e) => setDisplacement(e.target.value)}
            value={Number(displacement).toFixed(2)}
            name="displacement"
            sx={{ flexColumn: "span 1", width: "200px" }}
          />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="TPC"
            onChange={(e) => setTpc(e.target.value)}
            value={tpc}
            name="tpc"
            sx={{ flexColumn: "span 1", width: "200px" }}
          />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="LCF"
            onChange={(e) => setLcf(e.target.value)}
            value={lcf}
            name="lcf"
            sx={{ flexColumn: "span 1", width: "200px" }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "40px",
            }}
          >
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              label="Quarter"
              onChange={(e) => setQuarter(e.target.value)}
              value={Number(quarterMean) + 0}
              name="quarter"
              sx={{ flexColumn: "span 1", width: "130px", mx: "40px" }}
            />

            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              label="Delta MTC"
              onChange={(e) => setMtc(e.target.value)}
              value={Number(mtcPlus50) - Number(mtcMinus50)}
              name="mtc"
              sx={{ flexColumn: "span 1", width: "130px" }}
            />
          </Box>
        </Box>

        {/* Ligne 9  */}

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
            onChange={(e) => setDraftSup(e.target.value)}
            value={Number(quarterMean) + 0.1}
            name="draftSup"
            sx={{ flexColumn: "span 1", width: "200px" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Dis Sup"
            onChange={(e) => setDisplacementSup(e.target.value)}
            value={displacementSup}
            name="displacementSup"
            sx={{ flexColumn: "span 1", width: "200px" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="TPC Sup"
            onChange={(e) => setTpcSup(e.target.value)}
            value={tpcSup}
            name="tpcSup"
            sx={{ flexColumn: "span 1", width: "200px" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="LCF Sup"
            onChange={(e) => setLcfSup(e.target.value)}
            value={lcfSup}
            name="lcfSup"
            sx={{ flexColumn: "span 1", width: "200px" }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "40px",
            }}
          >
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              label="Quarter -50"
              onChange={(e) => setQuarterMinus50(e.target.value)}
              value={Number(quarterMean) - 0.5}
              name="quarterMinus50"
              sx={{ flexColumn: "span 1", width: "130px", mx: "40px" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="MTC-50"
              onChange={(e) => setMtcMinus50(e.target.value)}
              value={mtcMinus50}
              name="mtcMinus50"
              sx={{ flexColumn: "span 1", width: "130px" }}
            />
          </Box>
        </Box>
        {/* Ligne 10 */}
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
            onChange={(e) => setFirstTrimCorrection(e.target.value)}
            value={firstTrimCorrection}
            name="firstTrimCorrection"
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="S T C"
            onChange={(e) => setSecondTrimCorrection(e.target.value)}
            value={secondTrimCorrection}
            name="secondTrimCorrection"
            sx={{ flexColumn: "span 2" }}
          />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Dis Corr Trim"
            onChange={(e) => setDisplacementTrimCorrected(e.target.value)}
            value={displacementTrimCorrected}
            name="displacementTrimCorrected"
            sx={{ flexColumn: "span 2" }}
          />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Dis Corr Dsty"
            onChange={(e) => setDisplacementDstyCorrected(e.target.value)}
            value={displacementDstyCorrected}
            name="displacementDstyCorrected"
            sx={{ gridColumn: "span 4" }}
          />
        </Box>

        {/* Ligne 10   */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          mt="20px"
        >
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
              backgroundColor: colors.redAccent[300],
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
    </Box>
  );
}
