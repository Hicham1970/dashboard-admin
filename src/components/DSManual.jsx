/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import { tokens } from "./../theme";
import PrintToPdf from "./../functions/PrintToPdf";
import {
  calculateMeanFore,
  calculateMeanAft,
  calculateMeanMid,
  calculateTrim,
  calculateForeCorrected,
  calculateAftCorrected,
  calculateMidCorrected,
  calculateTrimCorrected,
  calculateMeanForeAft,
  calculateMeanOfMean,
  calculateQuarterMean,
  calculateDisplacement,
  calculateTpc,
  calculateLcf,
  calculateDisplacementTrimCorrected,
  calculateFirstTrimCorrection,
  calculateSecondTrimCorrection,
  calculateDisplacementDstyCorrected,
  calculateTotal,
  calculateNetLight,
  calculateLbm,
  calculateConstant,
  calculateNetLoad,
  calculateCargo,

  calculateMeanForeFinal,
  calculateMeanAftFinal,
  calculateMeanMidFinal,
  calculateTrimFinal,
  calculateLbmFinal,
  calculateForeCorrectedFinal,
  calculateAftCorrectedFinal,
  calculateMidCorrectedFinal,


} from "../functions/calculationUtils";
import Footer from "./Footer";




export default function DS() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isEmpty, setIsEmpty] = useState(true);
  const [isLoader, setIsLoader] = useState(false);
  const [lbp, setLbp] = useState();
  // Section Initial
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
  const [ballast, setBallast] = useState();
  const [freshWater, setFreshWater] = useState();
  const [fuel, setFuel] = useState();
  const [diesel, setDiesel] = useState();
  const [lubOil, setLubOil] = useState();
  const [others, setOthers] = useState();
  const [total, setTotal] = useState();
  const [lightship, setLightship] = useState();
  const [constant, setConstant] = useState();
  const [netLight, setNetLight] = useState();
  const [cargo, setCargo] = useState();
  const [netLoad, setNetLoad] = useState();
  const [constantDéclarée, setConstantDéclarée] = useState();
  const [signature, setSignature] = useState();


  // Section Final
  const [keelCorrectionFinal, setKeelCorrectionFinal] = useState();
  const [foreDistanceFinal, setForeDistanceFinal] = useState();
  const [aftDistanceFinal, setAftDistanceFinal] = useState();
  const [midDistanceFinal, setMidDistanceFinal] = useState();
  const [forePortFinal, setForePortFinal] = useState();
  const [foreStbdFinal, setForeStbdFinal] = useState();
  const [meanForeFinal, setMeanForeFinal] = useState();
  const [aftPortFinal, setAftPortFinal] = useState();
  const [aftStbdFinal, setAftStbdFinal] = useState();
  const [meanAftFinal, setMeanAftFinal] = useState();
  const [midPortFinal, setMidPortFinal] = useState();
  const [midStbdFinal, setMidStbdFinal] = useState();
  const [meanMidFinal, setMeanMidFinal] = useState();
  const [trimFinal, setTrimFinal] = useState();
  const [lbmFinal, setLbmFinal] = useState();
  const [foreCorrectedFinal, setForeCorrectedFinal] = useState();
  const [aftCorrectedFinal, setAftCorrectedFinal] = useState();
  const [midCorrectedFinal, setMidCorrectedFinal] = useState();
  const [trimCorrectedFinal, setTrimCorrectedFinal] = useState();
  const [meanOfMeanFinal, setMeanOfMeanFinal] = useState();
  const [quarterMeanFinal, setQuarterMeanFinal] = useState();
  const [meanForeAftFinal, setMeanForeAftFinal] = useState();
  const [densityFinal, setDensityFinal] = useState();
  const [draftSupFinal, setDraftSupFinal] = useState();
  const [draftInfFinal, setDraftInfFinal] = useState();
  const [displacementSupFinal, setDisplacementSupFinal] = useState();
  const [displacementInfFinal, setDisplacementInfFinal] = useState();
  const [displacementFinal, setDisplacementFinal] = useState();
  const [tpcFinal, setTpcFinal] = useState();
  const [lcfFinal, setLcfFinal] = useState();
  const [quarterFinal, setQuarterFinal] = useState();
  const [mtcFinal, setMtcFinal] = useState();
  const [tpcSupFinal, setTpcSupFinal] = useState();
  const [tpcInfFinal, setTpcInfFinal] = useState();
  const [lcfSupFinal, setLcfSupFinal] = useState();
  const [lcfInfFinal, setLcfInfFinal] = useState();
  const [quarterMinus50Final, setQuarterMinus50Final] = useState();
  const [mtcMinus50Final, setMtcMinus50Final] = useState();
  const [firstTrimCorrectionFinal, setFirstTrimCorrectionFinal] = useState();
  const [secondTrimCorrectionFinal, setSecondTrimCorrectionFinal] = useState();
  const [displacementTrimCorrectedFinal, setDisplacementTrimCorrectedFinal] = useState();
  const [displacementDstyCorrectedFinal, setDisplacementDstyCorrectedFinal] = useState();
  const [mtcPlus50Final, setMtcPlus50Final] = useState();
  const [quarterPlus50Final, setQuarterPlus50Final] = useState();
  const [ballastFinal, setBallastFinal] = useState();
  const [freshWaterFinal, setFreshWaterFinal] = useState();
  const [fuelFinal, setFuelFinal] = useState();
  const [dieselFinal, setDieselFinal] = useState();
  const [lubOilFinal, setLubOilFinal] = useState();
  const [othersFinal, setOthersFinal] = useState();
  const [totalFinal, setTotalFinal] = useState();



  // Initial Memoized calculation results
  const meanForeCalculated = useMemo(() =>
    calculateMeanFore(forePort, foreStbd),
    [forePort, foreStbd]
  );

  const meanAftCalculated = useMemo(() =>
    calculateMeanAft(aftPort, aftStbd),
    [aftPort, aftStbd]
  );

  const meanMidCalculated = useMemo(() =>
    calculateMeanMid(midPort, midStbd),
    [midPort, midStbd]
  );

  const trimCalculated = useMemo(() =>
    calculateTrim(meanAftCalculated, meanForeCalculated),
    [meanAftCalculated, meanForeCalculated]
  );

  const lbmCalculated = useMemo(() =>
    calculateLbm(lbp, foreDistance, aftDistance),
    [lbp, foreDistance, aftDistance]
  );

  const foreCorrectedCalculated = useMemo(() =>
    calculateForeCorrected(trimCalculated, foreDistance, lbmCalculated, meanForeCalculated),
    [trimCalculated, foreDistance, lbmCalculated, meanForeCalculated]
  );

  const aftCorrectedCalculated = useMemo(() =>
    calculateAftCorrected(trimCalculated, aftDistance, lbmCalculated, meanAftCalculated),
    [trimCalculated, aftDistance, lbmCalculated, meanAftCalculated]
  );

  const midCorrectedCalculated = useMemo(() =>
    calculateMidCorrected(trimCalculated, midDistance, lbmCalculated, meanMidCalculated),
    [trimCalculated, midDistance, lbmCalculated, meanMidCalculated]
  );

  const trimCorrectedCalculated = useMemo(() =>
    calculateTrimCorrected(meanAftCalculated, meanForeCalculated),
    [meanAftCalculated, meanForeCalculated]
  );

  const meanForeAftCalculated = useMemo(() =>
    calculateMeanForeAft(meanForeCalculated, meanAftCalculated),
    [meanForeCalculated, meanAftCalculated]
  );

  const meanOfMeanCalculated = useMemo(() =>
    calculateMeanOfMean(meanForeAftCalculated, meanMidCalculated),
    [meanForeAftCalculated, meanMidCalculated]
  );

  const quarterMeanCalculated = useMemo(() =>
    calculateQuarterMean(meanForeAftCalculated, meanMidCalculated, meanOfMeanCalculated),
    [meanForeAftCalculated, meanMidCalculated, meanOfMeanCalculated]
  );

  const displacementCalculated = useMemo(() =>
    calculateDisplacement(draftInf, draftSup, quarterMeanCalculated, displacementInf, displacementSup),
    [draftInf, draftSup, quarterMeanCalculated, displacementInf, displacementSup]
  );

  const tpcCalculated = useMemo(() =>
    calculateTpc(quarterMeanCalculated, tpcSup, tpcInf, draftInf, draftSup),
    [quarterMeanCalculated, tpcSup, tpcInf, draftInf, draftSup]
  );


  const lcfCalculated = useMemo(() =>
    calculateLcf(quarterMeanCalculated, lcfSup, lcfInf),
    [quarterMeanCalculated, lcfSup, lcfInf]
  );

  const firstTrimCorrectionCalculated = useMemo(() =>
    calculateFirstTrimCorrection(trimCorrectedCalculated, tpcCalculated, lcfCalculated, lbp),
    [trimCorrectedCalculated, tpcCalculated, lcfCalculated, lbp]
  );

  const secondTrimCorrectionCalculated = useMemo(() =>
    calculateSecondTrimCorrection(trimCorrectedCalculated, mtcPlus50, mtcMinus50, lbp),
    [trimCorrectedCalculated, mtcPlus50, mtcMinus50, lbp]
  );

  const displacementTrimCorrectedCalculated = useMemo(() =>
    calculateDisplacementTrimCorrected(displacementCalculated, firstTrimCorrectionCalculated, secondTrimCorrectionCalculated),
    [displacementCalculated, firstTrimCorrectionCalculated, secondTrimCorrectionCalculated]);

  const displacementDstyCorrectionCalculated = useMemo(() =>
    calculateDisplacementDstyCorrected(displacementTrimCorrectedCalculated, density),
    [displacementTrimCorrectedCalculated, density]
  )

  const totalCalculated = useMemo(() =>
    calculateTotal(ballast, freshWater, fuel, diesel, lubOil, others),
    [ballast, freshWater, fuel, diesel, lubOil, others]
  );


  const netLightCalculated = useMemo(() =>
    calculateNetLight(totalCalculated, displacementDstyCorrectionCalculated),
    [totalCalculated, displacementDstyCorrectionCalculated]
  );

  const constantCalculated = useMemo(() =>
    calculateConstant(netLightCalculated, lightship),
    [netLightCalculated, lightship]
  );

  const netLoadCalculated = useMemo(() =>
    calculateNetLoad(totalCalculated, displacementDstyCorrectionCalculated),
    [totalCalculated, displacementDstyCorrectionCalculated]
  );

  const cargoCalculated = useMemo(() =>
    calculateCargo(netLoadCalculated, netLightCalculated)
    , [netLoadCalculated, netLightCalculated])


  // Final Memoized calculation results
  const meanForeFinalCalculated = useMemo(() =>
    calculateMeanForeFinal(forePortFinal, foreStbdFinal),
    [forePortFinal, foreStbdFinal]
  );

  const meanAftFinalCalculated = useMemo(() =>
    calculateMeanAftFinal(aftPortFinal, aftStbdFinal),
    [aftPortFinal, aftStbdFinal]
  );

  const meanMidFinalCalculated = useMemo(() =>
    calculateMeanMidFinal(midPortFinal, midStbdFinal),
    [midPortFinal, midStbdFinal]
  );

  const trimFinalCalculated = useMemo(() =>
    calculateTrimFinal(meanAftFinalCalculated, meanForeFinalCalculated),
    [meanAftFinalCalculated, meanForeFinalCalculated]
  );

  const lbmFinalCalculated = useMemo(() =>
    calculateLbmFinal(lbp, foreDistanceFinal, aftDistanceFinal),
    [lbp, foreDistanceFinal, aftDistanceFinal]
  );

  const foreCorrectedFinalCalculated = useMemo(() =>
    calculateForeCorrectedFinal(trimFinalCalculated, foreDistanceFinal, lbmFinalCalculated, meanForeFinalCalculated),
    [trimFinalCalculated, foreDistanceFinal, lbmFinalCalculated, meanForeFinalCalculated]
  );

  const aftCorrectedFinalCalculated = useMemo(() =>
    calculateAftCorrectedFinal(trimFinalCalculated, aftDistanceFinal, lbmFinalCalculated, meanAftFinalCalculated),
    [trimFinalCalculated, aftDistanceFinal, lbmFinalCalculated, meanAftFinalCalculated]
  );

  const midCorrectedFinalCalculated = useMemo(() =>
    calculateMidCorrectedFinal(trimFinalCalculated, midDistanceFinal, lbmFinalCalculated, meanMidFinalCalculated),
    [trimFinalCalculated, midDistanceFinal, lbmFinalCalculated, meanMidFinalCalculated]
  );





  // Update state with calculated values
  useEffect(() => {
    setMeanFore(meanForeCalculated);
    setMeanAft(meanAftCalculated);
    setMeanMid(meanMidCalculated);
    setTrim(trimCalculated);
    setLbm(lbmCalculated);
    setForeCorrected(foreCorrectedCalculated);
    setAftCorrected(aftCorrectedCalculated);
    setMidCorrected(midCorrectedCalculated);
    setTrimCorrected(trimCorrectedCalculated);
    setMeanForeAft(meanForeAftCalculated);
    setMeanOfMean(meanOfMeanCalculated);
    setQuarterMean(quarterMeanCalculated);
    setDisplacement(displacementCalculated);
    setTpc(tpcCalculated);
    setLcf(lcfCalculated);
    setFirstTrimCorrection(firstTrimCorrectionCalculated);
    setSecondTrimCorrection(secondTrimCorrectionCalculated);
    setDisplacementTrimCorrected(displacementTrimCorrectedCalculated);
    setDisplacementDstyCorrected(displacementDstyCorrectionCalculated);
    setTotal(totalCalculated);
    setNetLight(netLightCalculated);
    setConstant(constantCalculated);
    setNetLoad(netLoadCalculated);
    setCargo(cargoCalculated);

    setMeanForeFinal(meanForeFinalCalculated);
    setMeanAftFinal(meanAftFinalCalculated);
    setMeanMidFinal(meanMidFinalCalculated);
    setTrimFinal(trimFinalCalculated);
    setLbmFinal(lbmFinalCalculated);
    setForeCorrectedFinal(foreCorrectedFinalCalculated);
    setAftCorrectedFinal(aftCorrectedFinalCalculated);
    setMidCorrectedFinal(midCorrectedFinalCalculated);

  }, [meanForeCalculated, meanAftCalculated, meanMidCalculated, trimCalculated, lbmCalculated, foreCorrectedCalculated, aftCorrectedCalculated, midCorrectedCalculated, trimCorrectedCalculated, meanForeAftCalculated, meanOfMeanCalculated, quarterMeanCalculated, displacementCalculated, tpcCalculated, lcfCalculated, firstTrimCorrectionCalculated, secondTrimCorrectionCalculated, displacementTrimCorrectedCalculated, displacementDstyCorrectionCalculated, totalCalculated, netLightCalculated, constantCalculated, netLoadCalculated, netLoad, cargoCalculated, cargo,
    meanForeFinalCalculated, meanAftFinalCalculated, meanMidFinalCalculated, trimFinalCalculated, lbmFinalCalculated,
    foreCorrectedFinalCalculated, aftCorrectedFinalCalculated, midCorrectedFinalCalculated,
  ]);




  return (
    <><Box m="20px" id="printMe">
      <Header title="Mv Arc Rainbow" subtitle="Draft Survey Calculation" />
      <img src={`${process.env.PUBLIC_URL}/assets/img/logo_sgs.png`} alt="SGS Logo" style={{ width: '100px', height: '80px', marginRight: '5px' }} />
      <form>
        <Box display="flex" gap="30px" flexDirection="row">

          <Box
            display="flex"
            justifyContent="left"
            alignItems="left"
            flexDirection="row"
            mx="45px"
            mt="90px"
            gap="6px"
            sx={{
              fontSize: "44px",
              width: "700px",
            }}
          >
            <Box>
              <h3
                style={{ fontSize: "44px", color: colors.greenAccent[500], fontWeight: "bold", ml: "200px" }}>
                Initial
              </h3>

            </Box>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={isEmpty ? "Empty" : "Full"}
              size="small"
              checked={isEmpty}
              onChange={(e) => setIsEmpty(!isEmpty)}
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 28 },
                color: colors.greenAccent[500],
                '&.Mui-checked': {
                  color: colors.greenAccent[200],
                }
              }} />
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Lbp"
              value={lbp}
              onChange={(e) => setLbp(e.target.value)}
              name="lbp"
              sx={{ flexGrow: "3", width: "900px" }}
              InputProps={{ style: { fontSize: '20px' } }}
              InputLabelProps={{ style: { fontSize: '20px' } }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Keel Correction"
              value={keelCorrection}
              onChange={(e) => setKeelCorrection(e.target.value)}
              name="keelCorrection"
              sx={{ gridColumn: "span 1", width: "900px" }}
              InputProps={{ style: { fontSize: '20px' } }}
              InputLabelProps={{ style: { fontSize: '20px' } }}
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
                gridColumn: "span 2",
                width: "900px",
              }}

              InputProps={{ style: { fontSize: '20px' } }}
              InputLabelProps={{ style: { fontSize: '20px' } }}
            />
            <TextField
              fullWidth
              disabled
              variant="filled"
              type="number"
              placeholder="Trim"
              onChange={(e) => setTrim(e.target.value)}
              value={trim}
              name="trim"
              sx={{
                gridColumn: "span 2",
                width: "900px",
              }}

              InputProps={{ style: { fontSize: '20px' }, fontWeight: "bold" }}
              InputLabelProps={{ style: { fontSize: '20px' } }}
            />

            <TextField
              fullWidth
              disabled
              variant="filled"
              type="number"
              placeholder="lbm"
              onChange={(e) => setLbm(e.target.value)}
              value={lbm}
              name="lbm"
              sx={{
                gridColumn: "span 2",
                width: "900px",
              }}

              InputProps={{ style: { fontSize: '20px', fontWeight: "bold" } }}
              InputLabelProps={{ style: { fontSize: '16px' } }}
            />
          </Box>
          {/* Line 1 final */}

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="left"
            mx="300px"
            mt="90px"
            gap="6px"
            sx={{
              fontSize: "44px",
              width: "700px",
            }}
          >
            <Box>
              <h3
                style={{ fontSize: "44px", color: colors.greenAccent[500], fontWeight: "bold", ml: "200px" }}>
                Final
              </h3>
            </Box>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={isEmpty ? "Empty" : "Full"}
              size="small"
              checked={isEmpty}
              onChange={(e) => setIsEmpty(!isEmpty)}
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 28 },
                color: colors.greenAccent[500],
                '&.Mui-checked': {
                  color: colors.greenAccent[200],
                }
              }} />

            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Keel Corr Fi"
              value={keelCorrectionFinal}
              onChange={(e) => setKeelCorrectionFinal(e.target.value)}
              name="keelCorrectionFinal"
              sx={{ gridColumn: "span 1", width: "900px" }}
              InputProps={{ style: { fontSize: '20px' } }}
              InputLabelProps={{ style: { fontSize: '20px' } }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Density"
              onChange={(e) => setDensityFinal(e.target.value)}
              value={densityFinal}
              name="densityFinal"
              sx={{
                gridColumn: "span 2",
                width: "900px",
              }}

              InputProps={{ style: { fontSize: '20px' } }}
              InputLabelProps={{ style: { fontSize: '20px' } }}
            />
            <TextField
              fullWidth
              disabled
              variant="filled"
              type="number"
              placeholder="Trim Final"
              onChange={(e) => setTrimFinal(e.target.value)}
              value={trimFinal}
              name="trimFinal"
              sx={{
                gridColumn: "span 2",
                width: "900px",
              }}

              InputProps={{ style: { fontSize: '20px' }, fontWeight: "bold" }}
              InputLabelProps={{ style: { fontSize: '20px' } }}
            />

            <TextField
              fullWidth
              disabled
              variant="filled"
              type="number"
              placeholder="lbmFinal"
              onChange={(e) => setLbmFinal(e.target.value)}
              value={lbmFinal}
              name="lbmFinal"
              sx={{
                gridColumn: "span 2",
                width: "900px",
              }}

              InputProps={{ style: { fontSize: '20px', fontWeight: "bold" } }}
              InputLabelProps={{ style: { fontSize: '16px' } }}
            />
          </Box>

        </Box>
        {/* Line 2       */}

        <Box
          sx={{
            borderBottom: "2px solid",
            borderColor: colors.blueAccent[100],
            mt: "40px",
          }}
        ></Box>

        <Box
          display="flex"
          flexDirection="row"
          gap="30px"

        >
          {/* Ligne2 Initial*/}
          <Box>
            <Box
              mt="40px"
              display="flex"
              gap="8px"
            >
              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="Fore Port"
                onChange={(e) => setForePort(e.target.value)}
                value={forePort}
                name="forePort"
                sx={{ flexColumn: "span 1" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="fore Stbd"
                onChange={(e) => setForeStbd(e.target.value)}
                value={foreStbd}
                name="foreStbd"
                sx={{ flexColumn: "span 1" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />
              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="fore Distance"
                onChange={(e) => setForeDistance(e.target.value)}
                value={foreDistance}
                name="foreDistance"
                sx={{ flexColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                placeholder="Mean Fore"
                onChange={() => calculateMeanFore()}
                value={meanFore}
                name="meanFore"
                sx={{ gridColumn: "span 4" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

            </Box>
            {/* Ligne3 */}
            <Box
              mt="10px"
              display="flex"
              gap="8px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="Aft Port"
                onChange={(e) => setAftPort(e.target.value)}
                value={aftPort}
                name="aftPort"
                sx={{ gridColumn: "span 4" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="Aft Stbd"
                onChange={(e) => setAftStbd(e.target.value)}
                value={aftStbd}
                name="aftStbd"
                sx={{ flexColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
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
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                placeholder="Mean Aft"
                onChange={(e) => setMeanAft(e.target.value)}
                value={meanAft}
                name="meanAft"
                style={{ textAlign: 'right' }}
                sx={{
                  gridColumn: "span 1"
                }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
            </Box>
            {/* Ligne4 */}
            <Box
              mt="10px"
              display="flex"
              gap="8px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="Mid Port"
                onChange={(e) => setMidPort(e.target.value)}
                value={midPort}
                name="midPort"
                sx={{ gridColumn: "span 4" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="Mid Stbd"
                onChange={(e) => setMidStbd(e.target.value)}
                value={midStbd}
                name="midStbd"
                sx={{ flexColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="Mid Distance"
                onChange={(e) => setMidDistance(e.target.value)}
                value={midDistance}
                name="midDistance"
                sx={{ flexColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                placeholder="Mean Mid"
                onChange={(e) => setMeanMid(e.target.value)}
                value={meanMid}
                name="meanMid"
                sx={{ gridColumn: "span 4" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

            </Box>
            {/* Ligne5 */}
            <Box
              mt="20px"
              display="flex"
              gap="8px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                placeholder="Fore Corrected"
                onChange={(e) => setForeCorrected(e.target.value)}
                value={foreCorrected}
                name="foreCorrected"
                sx={{
                  gridColumn: "span 3"
                }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                placeholder="Aft Corrected"
                onChange={(e) => setAftCorrected(e.target.value)}
                value={aftCorrected}
                name="aftCorrected"
                sx={{
                  flexColumn: "span 3"
                }}
                InputProps={{ style: { fontSize: '20px', mr: "125px" } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                placeholder="Mid Corrected"
                onChange={(e) => setMidCorrected(e.target.value)}
                value={midCorrected}
                name="midCorrected"
                sx={{
                  flexColumn: "span 3",
                }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

            </Box>
            {/* Ligne6 */}
            <Box
              mt="20px"
              display="flex"
              gap="10px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                placeholder="Trim Co"
                onChange={(e) => setTrimCorrected(e.target.value)}
                value={Number(trimCorrected).toFixed(2)}
                name="trimCorrected"
                sx={{ gridColumn: "span 4" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                label="Mean F/A"
                onChange={(e) => setMeanForeAft(e.target.value)}
                value={meanForeAft}
                name="meanForeAft"
                sx={{ flexColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                label="Mean Of Mean"
                onChange={(e) => setMeanOfMean(e.target.value)}
                value={meanOfMean}
                name="meanOfMean"
                sx={{ flexColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"

                onChange={(e) => setQuarterMean(e.target.value)}
                value={quarterMean}
                name="quarterMean"
                sx={{
                  gridColumn: "span 4",
                }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
            </Box>
          </Box>
          {/* Ligne2 Final*/}
          <Box>
            <Box
              mt="40px"
              display="flex"
              gap="8px"
            >
              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="Fore Port Fi"
                onChange={(e) => setForePortFinal(e.target.value)}
                value={forePortFinal}
                name="forePortFinal"
                sx={{ flexColumn: "span 1" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="fore Stbd"
                onChange={(e) => setForeStbdFinal(e.target.value)}
                value={foreStbdFinal}
                name="foreStbdFinal"
                sx={{ flexColumn: "span 1" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />
              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="fore Distance"
                onChange={(e) => setForeDistanceFinal(e.target.value)}
                value={foreDistanceFinal}
                name="foreDistanceFinal"
                sx={{ flexColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                placeholder="Mean Fore"
                onChange={() => calculateMeanFore()}
                value={meanForeFinal}
                name="meanForeFinal"
                sx={{ gridColumn: "span 4" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

            </Box>
            {/* Ligne3 */}
            <Box
              mt="10px"
              display="flex"
              gap="8px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="Aft Port"
                onChange={(e) => setAftPortFinal(e.target.value)}
                value={aftPortFinal}
                name="aftPortFinal"
                sx={{ gridColumn: "span 4" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="Aft Stbd"
                onChange={(e) => setAftStbdFinal(e.target.value)}
                value={aftStbdFinal}
                name="aftStbdFinal"
                sx={{ flexColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="Aft Distance"
                onChange={(e) => setAftDistanceFinal(e.target.value)}
                value={aftDistanceFinal}
                name="aftDistanceFinal"
                sx={{
                  flexColumn: "span 2",
                  textAlign: 'right'
                }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                placeholder="Mean Aft"
                onChange={(e) => setMeanAftFinal(e.target.value)}
                value={meanAftFinal}
                name="meanAftFinal"
                style={{ textAlign: 'right' }}
                sx={{
                  gridColumn: "span 1"
                }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
            </Box>
            {/* Ligne4 */}
            <Box
              mt="10px"
              display="flex"
              gap="8px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="Mid Port"
                onChange={(e) => setMidPortFinal(e.target.value)}
                value={midPortFinal}
                name="midPortFinal"
                sx={{ gridColumn: "span 4" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="Mid Stbd"
                onChange={(e) => setMidStbdFinal(e.target.value)}
                value={midStbdFinal}
                name="midStbdFinal"
                sx={{ flexColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
                variant="filled"
                type="number"
                label="Mid Distance"
                onChange={(e) => setMidDistanceFinal(e.target.value)}
                value={midDistanceFinal}
                name="midDistanceFinal"
                sx={{ flexColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                placeholder="Mean Mid"
                onChange={(e) => setMeanMidFinal(e.target.value)}
                value={meanMidFinal}
                name="meanMidFinal"
                sx={{ gridColumn: "span 4" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

            </Box>
            {/* Ligne5 */}
            <Box
              mt="20px"
              display="flex"
              gap="8px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                placeholder="Fore Corrected"
                onChange={(e) => setForeCorrectedFinal(e.target.value)}
                value={Number(foreCorrectedFinal).toFixed(2)}
                name="foreCorrectedFinal"
                sx={{
                  gridColumn: "span 3"
                }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                placeholder="Aft Corrected"
                onChange={(e) => setAftCorrectedFinal(e.target.value)}
                value={Number(aftCorrectedFinal).toFixed(2)}
                name="aftCorrectedFinal"
                sx={{
                  flexColumn: "span 3"
                }}
                InputProps={{ style: { fontSize: '20px', mr: "125px" } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                placeholder="Mid Corrected"
                onChange={(e) => setMidCorrectedFinal(e.target.value)}
                value={Number(midCorrectedFinal).toFixed}
                name="midCorrectedFinal"
                sx={{
                  flexColumn: "span 3",
                }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

            </Box>
            {/* Ligne6 */}
            <Box
              mt="20px"
              display="flex"
              gap="10px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                placeholder="Trim Co"
                onChange={(e) => setTrimCorrectedFinal(e.target.value)}
                value={Number(trimCorrectedFinal).toFixed(2)}
                name="trimCorrectedFinal"
                sx={{ gridColumn: "span 4" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                label="Mean F/A"
                onChange={(e) => setMeanForeAftFinal(e.target.value)}
                value={meanForeAftFinal}
                name="meanForeAftFinal"
                sx={{ flexColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"
                label="Mean Of Mean"
                onChange={(e) => setMeanOfMeanFinal(e.target.value)}
                value={meanOfMeanFinal}
                name="meanOfMeanFinal"
                sx={{ flexColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                width="200px"
                disabled
                variant="outlined"
                type="number"

                onChange={(e) => setQuarterMeanFinal(e.target.value)}
                value={quarterMeanFinal}
                name="quarterMeanFinal"
                sx={{
                  gridColumn: "span 4",
                }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
            </Box>
          </Box>

        </Box>

        <Box
          sx={{

            borderBottom: "6px solid",
            color: colors.blueAccent[100],
            mt: "80px",
          }}
        ></Box>
        {/* Ligne 7  */}

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          mt="40px"
          mx="70px"
        >
          {/* Initial */}
          <Box>
            <Box

              display="flex"
              flexDirection="row"
              gap="2px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                placeholder="Draft Inf"
                onChange={(e) => setDraftInf(e.target.value)}
                value={(Number(Math.round(quarterMean * 10) / 10) - 0.1).toFixed(2)}
                name="draftInf"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Dis Inf"
                onChange={(e) => setDisplacementInf(e.target.value)}
                value={displacementInf}
                name="displacementInf"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="TPC Inf"
                onChange={(e) => setTpcInf(e.target.value)}
                value={tpcInf}
                name="tpcInf"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="LCF Inf"
                onChange={(e) => setLcfInf(e.target.value)}
                value={lcfInf}
                name="lcfInf"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "10px",
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
                  InputProps={{ style: { fontSize: '20px' } }}
                  InputLabelProps={{ style: { fontSize: '20px' } }}
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
                  InputProps={{ style: { fontSize: '20px' } }}
                  InputLabelProps={{ style: { fontSize: '20px' } }}

                />
              </Box>
            </Box>
            {/* Ligne 8  */}

            <Box
              mt="10px"
              display="flex"
              flexDirection="row"
              gap="2px"
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
                value={quarterMean + 0}
                name="quarterMean"
                sx={{
                  flexColumn: "span 1", width: "130px",
                }} InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
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
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="TPC"
                onChange={(e) => setTpc(e.target.value)}
                value={Number(tpc).toFixed(2)}
                name="tpc"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="LCF"
                onChange={(e) => setLcf(e.target.value)}
                value={Number(lcf).toFixed(2)}
                name="lcf"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "10px",
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
                  InputProps={{ style: { fontSize: '20px' } }}
                  InputLabelProps={{ style: { fontSize: '20px' } }}
                />

                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  type="number"
                  label="Delta MTC"
                  onChange={(e) => setMtc(e.target.value)}
                  value={(Number(mtcPlus50) - Number(mtcMinus50)).toFixed(2)}
                  name="mtc"
                  sx={{ flexColumn: "span 1", width: "130px" }}
                  InputProps={{ style: { fontSize: '20px' } }}
                  InputLabelProps={{ style: { fontSize: '20px' } }}
                />
              </Box>
            </Box>

            {/* Ligne 9  */}

            <Box
              mt="10px"
              display="flex"
              flexDirection="row"
              gap="2px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                placeholder="Draft Sup"
                onChange={(e) => setDraftSup(e.target.value)}
                value={(Number(Math.round(quarterMean * 10) / 10) + 0.1).toFixed(2)}
                name="draftSup"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Dis Sup"
                onChange={(e) => setDisplacementSup(e.target.value)}
                value={displacementSup}
                name="displacementSup"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="TPC Sup"
                onChange={(e) => setTpcSup(e.target.value)}
                value={tpcSup}
                name="tpcSup"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="LCF Sup"
                onChange={(e) => setLcfSup(e.target.value)}
                value={lcfSup}
                name="lcfSup"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "10px",
                }}
              >
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  type="number"
                  label="Quarter -50"
                  onChange={(e) => setQuarterMinus50(e.target.value)}
                  value={(Number(quarterMean) - 0.5).toFixed(2)}
                  name="quarterMinus50"
                  sx={{ flexColumn: "span 1", width: "130px", mx: "40px" }}
                  InputProps={{ style: { fontSize: '20px' } }}
                  InputLabelProps={{ style: { fontSize: '20px' } }}
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
                  InputProps={{ style: { fontSize: '20px' } }}
                  InputLabelProps={{ style: { fontSize: '20px' } }}
                />
              </Box>
            </Box>
            {/* Ligne 10 */}
            <Box
              mt="40px"
              display="flex"
              gap="6px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 2" },
              }}
            >
              <TextField

                disabled
                variant="outlined"
                type="number"
                label="F T C "
                onChange={(e) => setFirstTrimCorrection(e.target.value)}
                value={firstTrimCorrection}
                name="firstTrimCorrection"
                sx={{ gridColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px' }, width: "180px" }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField

                disabled
                variant="outlined"
                type="number"
                label="S T C"
                onChange={(e) => setSecondTrimCorrection(e.target.value)}
                value={secondTrimCorrection}
                name="secondTrimCorrection"
                sx={{ gridColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px', width: "180px" } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField

                disabled
                variant="outlined"
                type="number"
                label="Dis Corr Trim"
                onChange={(e) => setDisplacementTrimCorrected(e.target.value)}
                value={displacementTrimCorrected}
                name="displacementTrimCorrected"
                sx={{ gridColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px', width: "180px" } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />
              <TextField

                disabled
                variant="outlined"
                type="number"
                label="Dis Corr Dsty"
                onChange={(e) => setDisplacementDstyCorrected(e.target.value)}
                value={Number(displacementDstyCorrected).toFixed(2)}
                name="displacementDstyCorrected"
                sx={{
                  gridColumn: "span 2",
                }}
                InputProps={{ style: { fontSize: '20px', width: "180px" } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />
            </Box>

          </Box>
          {/* Final */}
          <Box>
            <Box

              display="flex"
              flexDirection="row"
              gap="2px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                placeholder="Draft Inf"
                onChange={(e) => setDraftInfFinal(e.target.value)}
                value={(Number(Math.round(quarterMeanFinal * 10) / 10) - 0.1).toFixed(2)}
                name="draftInfFinal"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Dis Inf"
                onChange={(e) => setDisplacementInfFinal(e.target.value)}
                value={displacementInfFinal}
                name="displacementInfFinal"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="TPC Inf"
                onChange={(e) => setTpcInfFinal(e.target.value)}
                value={tpcInfFinal}
                name="tpcInfFinal"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="LCF Inf"
                onChange={(e) => setLcfInfFinal(e.target.value)}
                value={lcfInfFinal}
                name="lcfInfFinal"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "10px",
                }}
              >
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  type="number"
                  label="Quarter +50"
                  onChange={(e) => setQuarterPlus50Final(e.target.value)}
                  value={Number(quarterMeanFinal) + 0.5}
                  name="quarter50SupFinal"
                  sx={{ flexColumn: "span 1", width: "130px", mx: "40px" }}
                  InputProps={{ style: { fontSize: '20px' } }}
                  InputLabelProps={{ style: { fontSize: '20px' } }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="MTC +50"
                  onChange={(e) => setMtcPlus50Final(e.target.value)}
                  value={mtcPlus50Final}
                  name="mtcPlus50Final"
                  sx={{ flexColumn: "span 1", width: "130px" }}
                  InputProps={{ style: { fontSize: '20px' } }}
                  InputLabelProps={{ style: { fontSize: '20px' } }}

                />
              </Box>
            </Box>
            {/* Ligne 8  */}

            <Box
              mt="10px"
              display="flex"
              flexDirection="row"
              gap="2px"
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
                onChange={(e) => setQuarterMeanFinal(e.target.value)}
                value={quarterMeanFinal + 0}
                name="quarterMeanFinal"
                sx={{
                  flexColumn: "span 1", width: "130px",
                }} InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Displacement"
                onChange={(e) => setDisplacementFinal(e.target.value)}
                value={Number(displacementFinal).toFixed(2)}
                name="displacementFinal"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="TPC"
                onChange={(e) => setTpcFinal(e.target.value)}
                value={Number(tpcFinal).toFixed(2)}
                name="tpcFinal"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="LCF"
                onChange={(e) => setLcfFinal(e.target.value)}
                value={Number(lcfFinal).toFixed(2)}
                name="lcfFinal"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "10px",
                }}
              >
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  type="number"
                  label="QuarterFinal"
                  onChange={(e) => setQuarterFinal(e.target.value)}
                  value={Number(quarterMeanFinal) + 0}
                  name="quarterFinal"
                  sx={{ flexColumn: "span 1", width: "130px", mx: "40px" }}
                  InputProps={{ style: { fontSize: '20px' } }}
                  InputLabelProps={{ style: { fontSize: '20px' } }}
                />

                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  type="number"
                  label="Delta MTC"
                  onChange={(e) => setMtcFinal(e.target.value)}
                  value={(Number(mtcPlus50Final) - Number(mtcMinus50Final)).toFixed(2)}
                  name="mtcFinal"
                  sx={{ flexColumn: "span 1", width: "130px" }}
                  InputProps={{ style: { fontSize: '20px' } }}
                  InputLabelProps={{ style: { fontSize: '20px' } }}
                />
              </Box>
            </Box>

            {/* Ligne 9  */}

            <Box
              mt="10px"
              display="flex"
              flexDirection="row"
              gap="2px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                placeholder="Draft SupFinal"
                onChange={(e) => setDraftSupFinal(e.target.value)}
                value={(Number(Math.round(quarterMeanFinal * 10) / 10) + 0.1).toFixed(2)}
                name="draftSupFinal"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Dis Sup"
                onChange={(e) => setDisplacementSupFinal(e.target.value)}
                value={displacementSupFinal}
                name="displacementSupFinal"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="TPC Sup"
                onChange={(e) => setTpcSupFinal(e.target.value)}
                value={tpcSupFinal}
                name="tpcSupFinal"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="LCF Sup"
                onChange={(e) => setLcfSupFinal(e.target.value)}
                value={lcfSupFinal}
                name="lcfSupFinal"
                sx={{ flexColumn: "span 1", width: "130px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "10px",
                }}
              >
                <TextField
                  fullWidth
                  disabled
                  variant="outlined"
                  type="number"
                  label="Quarter -50"
                  onChange={(e) => setQuarterMinus50Final(e.target.value)}
                  value={(Number(quarterMeanFinal) - 0.5).toFixed(2)}
                  name="quarterMinus50Final"
                  sx={{ flexColumn: "span 1", width: "130px", mx: "40px" }}
                  InputProps={{ style: { fontSize: '20px' } }}
                  InputLabelProps={{ style: { fontSize: '20px' } }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="MTC-50"
                  onChange={(e) => setMtcMinus50Final(e.target.value)}
                  value={mtcMinus50Final}
                  name="mtcMinus50Final"
                  sx={{ flexColumn: "span 1", width: "130px" }}
                  InputProps={{ style: { fontSize: '20px' } }}
                  InputLabelProps={{ style: { fontSize: '20px' } }}
                />
              </Box>
            </Box>
            {/* Ligne 10 */}
            <Box
              mt="40px"
              display="flex"
              gap="6px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 2" },
              }}
            >
              <TextField

                disabled
                variant="outlined"
                type="number"
                label="F T C "
                onChange={(e) => setFirstTrimCorrectionFinal(e.target.value)}
                value={firstTrimCorrectionFinal}
                name="firstTrimCorrectionFinal"
                sx={{ gridColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px' }, width: "180px" }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField

                disabled
                variant="outlined"
                type="number"
                label="S T C"
                onChange={(e) => setSecondTrimCorrectionFinal(e.target.value)}
                value={secondTrimCorrectionFinal}
                name="secondTrimCorrectionFinal"
                sx={{ gridColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px', width: "180px" } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField

                disabled
                variant="outlined"
                type="number"
                label="Dis Corr Trim"
                onChange={(e) => setDisplacementTrimCorrectedFinal(e.target.value)}
                value={displacementTrimCorrectedFinal}
                name="displacementTrimCorrectedFinal"
                sx={{ gridColumn: "span 2" }}
                InputProps={{ style: { fontSize: '20px', width: "180px" } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />
              <TextField

                disabled
                variant="outlined"
                type="number"
                label="Dis Corr Dsty"
                onChange={(e) => setDisplacementDstyCorrectedFinal(e.target.value)}
                value={Number(displacementDstyCorrectedFinal).toFixed(2)}
                name="displacementDstyCorrectedFinal"
                sx={{
                  gridColumn: "span 2",
                }}
                InputProps={{ style: { fontSize: '20px', width: "180px" } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />
            </Box>

          </Box>


        </Box>
        <Box
          sx={{

            borderBottom: "6px solid",
            color: colors.blueAccent[100],
            mt: "80px",
          }}
        ></Box>

        {/* Ligne 7  */}

        <Box

          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          mx="50px"
        >
          {/* Initial */}
          <Box>
            <Box
              mt="40px"
              display="flex"
              gap="8px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Ballast"
                onChange={(e) => setBallast(e.target.value)}
                value={ballast}
                name="ballast"
                sx={{ flexColumn: "span 1", width: "140px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Fresh Water"
                onChange={(e) => setFreshWater(e.target.value)}
                value={freshWater}
                name="freshWater"
                sx={{ flexColumn: "span 1", width: "140px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Fuel"
                onChange={(e) => setFuel(e.target.value)}
                value={fuel}
                name="fuel"
                sx={{ flexColumn: "span 1", width: "140px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="diesel"
                onChange={(e) => setDiesel(e.target.value)}
                value={diesel}
                name="diesel"
                sx={{ flexColumn: "span 1", width: "140px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />


              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="lubOil"
                onChange={(e) => setLubOil(e.target.value)}
                value={lubOil}
                name="lubOil"
                sx={{ flexColumn: "span 1", width: "140px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="others"
                onChange={(e) => setOthers(e.target.value)}
                value={others}
                name="others"
                sx={{ flexColumn: "span 1", width: "140px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />

            </Box>
          </Box>
          {/* Final */}
          <Box>
            <Box
              mt="40px"
              display="flex"
              gap="8px"
              sx={{
                "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Ballast"
                onChange={(e) => setBallastFinal(e.target.value)}
                value={ballastFinal}
                name="ballastFinal"
                sx={{ flexColumn: "span 1", width: "140px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Fresh Water"
                onChange={(e) => setFreshWaterFinal(e.target.value)}
                value={freshWaterFinal}
                name="freshWaterFinal"
                sx={{ flexColumn: "span 1", width: "140px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Fuel"
                onChange={(e) => setFuelFinal(e.target.value)}
                value={fuelFinal}
                name="fuelFinal"
                sx={{ flexColumn: "span 1", width: "140px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="diesel"
                onChange={(e) => setDieselFinal(e.target.value)}
                value={dieselFinal}
                name="dieselFinal"
                sx={{ flexColumn: "span 1", width: "140px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />


              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="lubOil"
                onChange={(e) => setLubOilFinal(e.target.value)}
                value={lubOilFinal}
                name="lubOilFinal"
                sx={{ flexColumn: "span 1", width: "140px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="others"
                onChange={(e) => setOthersFinal(e.target.value)}
                value={othersFinal}
                name="othersFinal"
                sx={{ flexColumn: "span 1", width: "140px" }}
                InputProps={{ style: { fontSize: '20px' } }}
                InputLabelProps={{ style: { fontSize: '20px' } }}

              />

            </Box>
          </Box>

        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          mx="60px"
          my="90px"
        >
          < Box
            mt="40px"
            display="flex"
            gap="10px"
            sx={{
              "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              id="lightship"

              variant="filled"
              type="number"
              label="Lightship"
              onChange={(e) => setLightship(e.target.value)}
              value={lightship}
              name="lightship"
              sx={{
                flexColumn: "span 1", width: "200px",
              }}
              InputProps={{ style: { fontSize: '20px' } }}
              InputLabelProps={{ style: { fontSize: '20px' } }}

            />
            <TextField

              disabled
              variant="outlined"
              type="number"
              label="total"
              onChange={(e) => setTotal(e.target.value)}
              value={Number(total).toFixed(2)}
              name="total"
              sx={{ flexColumn: "span 1", width: "180px" }}
              InputProps={{ style: { fontSize: '20px' } }}
              InputLabelProps={{ style: { fontSize: '20px' } }}
            />
            <TextField
              id="netLight"

              disabled
              variant="outlined"
              type="number"
              label="NetLight"
              onChange={(e) => setNetLight(e.target.value)}
              value={Number(netLight).toFixed(2)}
              name="netLight"
              sx={{ flexColumn: "span 1", width: "200px" }}
              InputProps={{ style: { fontSize: '20px' } }}
              InputLabelProps={{ style: { fontSize: '20px' } }}

            />
            <TextField

              disabled
              variant="outlined"
              type="number"
              label="Constant"
              onChange={(e) => setConstant(e.target.value)}
              value={Number(constant).toFixed(2)}
              name="constant"
              sx={{ flexColumn: "span 1", width: "200px" }}
              InputProps={{ style: { fontSize: '20px' } }}
              InputLabelProps={{ style: { fontSize: '20px' } }}

            />

          </Box>
          <Box
            sx={{
              display: "flex",
              mx: "40px",
              mt: "40px"
            }}
          >

            <TextField
              id="netLoad"
              disabled
              variant="outlined"
              type="number"
              label="NetLoad"
              onChange={(e) => setNetLoad(e.target.value)}
              value={Number(netLoad).toFixed(2)}
              name="netLoad"
              sx={{ flexColumn: "span 2", width: "130px", mx: "40px" }}
              InputProps={{ style: { fontSize: '20px' } }}
              InputLabelProps={{ style: { fontSize: '20px' } }}
            />

            <TextField
              disabled
              variant="outlined"
              type="number"
              label="Cargo"
              onChange={(e) => setCargo(e.target.value)}
              value={Number(cargo).toFixed(2)}
              name="cargo"
              sx={{ flexColumn: "span 2", width: "130px" }}
              InputProps={{ style: { fontSize: '20px' } }}
              InputLabelProps={{ style: { fontSize: '20px' } }}

            />

            <TextField

              id="constantDéclarée"
              variant="filled"
              type="number"
              label="Constante Déclarée"
              onChange={(e) => setConstantDéclarée(e.target.value)}
              value={Number(constantDéclarée).toFixed(2)}
              name="constantDéclarée"
              sx={{ flexColumn: "span 2", width: "130px", mx: "40px" }}
              InputProps={{ style: { fontSize: '20px' } }}
              InputLabelProps={{ style: { fontSize: '20px' } }}

            />

            < /Box>


          </Box>

          {/**TODO  Insérer ici une section pour les remarques     */}





          {/* Signatures   */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "space-between",
              mx: "40px",
              my: "220px",

            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              fontWeight="italic"
              fontSize="1.2rem"
            >
              <span>
                <img src={`${process.env.PUBLIC_URL}/assets/img/logo_sgs.png`} alt="SGS Logo" style={{ width: '120px', height: '120px', marginRight: '15px' }} />
                Surveyor print
              </span>
              <span>Company surveyor / Terminal's staff</span>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              mr="200px"
              fontWeight="italic"
              fontSize="1.2rem"
            >
              <span>
                <img src={`${process.env.PUBLIC_URL}/assets/img/logo_intertek.png`} alt="Intertek Logo" style={{ width: '100px', height: '100px', marginRight: '15px' }} />
                Ship's staff
              </span>
              <span>Chef Officer / Captain</span>
            </Box>
          </Box>

      </form >
      <Box
        sx={{
          mt: "120px",
          borderBottom: "5px solid",
          color: colors.blueAccent[200],

        }}
      ></Box>
    </Box ><Box
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      mt="40px"
      mb="40px"
    >
        <PrintToPdf />
      </Box>
      < Footer />
    </>
  );
}


