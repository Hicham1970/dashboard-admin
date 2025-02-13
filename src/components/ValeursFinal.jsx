/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import StorageIcon from "@mui/icons-material/Storage";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import CalculateIcon from "@mui/icons-material/Calculate";
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
  calculateMtc,
  calculateDisplacementTrimCorrected,
  calculateFirstTrimCorrection,
  calculateSecondTrimCorrection,
  calculateDisplacementDstyCorrected,
  calculateTotal,
  calculateNetLight,
  calculateLbm,
  calculateConstant,

} from "../functions/calculationUtils";
import Footer from "./Footer";




export default function ValeursFinal() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isEmpty, setIsEmpty] = useState(true)
  const [isLoader, setIsLoader] = useState(false)
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



  // Memoized calculation results
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
  }, [meanForeCalculated, meanAftCalculated, meanMidCalculated, trimCalculated,
    lbmCalculated, foreCorrectedCalculated, aftCorrectedCalculated, midCorrectedCalculated,
    trimCorrectedCalculated, meanForeAftCalculated, meanOfMeanCalculated, quarterMeanCalculated,
    displacementCalculated, tpcCalculated, lcfCalculated, firstTrimCorrectionCalculated,
    secondTrimCorrectionCalculated, displacementTrimCorrectedCalculated,
    displacementDstyCorrectionCalculated, totalCalculated, netLightCalculated, constantCalculated]);




  return (
    <><Box m="20px" id="printMe">
      <Header title="Mv Arc Rainbow" subtitle="Initial Draft Survey Empty Vessel" />
      <img src={`${process.env.PUBLIC_URL}/assets/img/logo_sgs.png`} alt="SGS Logo" style={{ width: '80px', height: '60px', marginRight: '5px' }} />
      <form>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          mx="450px"
          gap="6px"
          sx={{
            fontSize: "44px",
            width: "500px",
          }}
        >
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
            sx={{ flexGrow: "2" }} />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Keel Correction"
            value={keelCorrection}
            onChange={(e) => setKeelCorrection(e.target.value)}
            name="keelCorrection"
            sx={{ gridColumn: "span 1" }} />
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
              width: "500px",
            }} />
          <TextField
            fullWidth
            disabled
            variant="filled"
            type="number"
            label="Trim"
            onChange={(e) => setTrim(e.target.value)}
            value={trim}
            name="trim"
            sx={{
              flexColumn: "span 2",
              color: colors.grey[500],
              fontWeight: "bold",
              fontSize: "1.2rem",
              borderRadius: "14px",
            }} />

          <TextField
            fullWidth
            disabled
            variant="filled"
            type="number"
            label="lbm"
            onChange={(e) => setLbm(e.target.value)}
            value={lbm}
            name="lbm"
            sx={{
              gridColumn: "span 2",
              color: colors.grey[500],
              fontWeight: "bold",
              fontSize: "1.2rem",
              borderRadius: "14px"
            }} />
        </Box>

        <Box
          sx={{
            borderBottom: "4px solid",
            borderColor: colors.blueAccent[100],
            mt: "80px",
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
            sx={{ gridColumn: "span 4" }} />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="fore Stbd"
            onChange={(e) => setForeStbd(e.target.value)}
            value={foreStbd}
            name="foreStbd"
            sx={{ flexColumn: "span 2" }} />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="fore Distance"
            onChange={(e) => setForeDistance(e.target.value)}
            value={foreDistance}
            name="foreDistance"
            sx={{ flexColumn: "span 2" }} />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            placeholder="Mean Fore"
            onChange={() => calculateMeanFore()}
            value={meanFore}
            name="meanFore"
            sx={{ gridColumn: "span 4" }} />
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
            sx={{ gridColumn: "span 4" }} />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Aft Stbd"
            onChange={(e) => setAftStbd(e.target.value)}
            value={aftStbd}
            name="aftStbd"
            sx={{ flexColumn: "span 2" }} />
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
            }} />
          <TextField
            fullWidth
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
            }} />
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
            sx={{ gridColumn: "span 4" }} />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Mid Stbd"
            onChange={(e) => setMidStbd(e.target.value)}
            value={midStbd}
            name="midStbd"
            sx={{ flexColumn: "span 2" }} />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Mid Distance"
            onChange={(e) => setMidDistance(e.target.value)}
            value={midDistance}
            name="midDistance"
            sx={{ flexColumn: "span 2" }} />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            placeholder="Mean Mid"
            onChange={(e) => setMeanMid(e.target.value)}
            value={meanMid}
            name="meanMid"
            sx={{ gridColumn: "span 4" }} />
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
              gridColumn: "span 3"
            }} />
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
              flexColumn: "span 3"
            }} />
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
              flexColumn: "span 3",
            }} />
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
            placeholder="Trim Co"
            onChange={(e) => setTrimCorrected(e.target.value)}
            value={Number(trimCorrected).toFixed(2)}
            name="trimCorrected"
            sx={{ gridColumn: "span 4" }} />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Mean F/A"
            onChange={(e) => setMeanForeAft(e.target.value)}
            value={meanForeAft}
            name="meanForeAft"
            sx={{ flexColumn: "span 2" }} />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Mean Of Mean"
            onChange={(e) => setMeanOfMean(e.target.value)}
            value={meanOfMean}
            name="meanOfMean"
            sx={{ flexColumn: "span 2" }} />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"

            onChange={(e) => setQuarterMean(e.target.value)}
            value={quarterMean}
            name="quarterMean"
            sx={{
              gridColumn: "span 4",
              color: colors.grey[500],
              backgroundColor: colors.greenAccent[600],
              fontWeight: "bold",
              fontSize: "1.2rem",
              borderRadius: "14px",
            }} />
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
            placeholder="Draft Inf"
            onChange={(e) => setDraftInf(e.target.value)}
            value={(Number(quarterMean) - 0.1).toFixed(2)}
            name="draftInf"
            sx={{ flexColumn: "span 1", width: "200px" }} />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Dis Inf"
            onChange={(e) => setDisplacementInf(e.target.value)}
            value={displacementInf}
            name="displacementInf"
            sx={{ flexColumn: "span 1", width: "200px" }} />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="TPC Inf"
            onChange={(e) => setTpcInf(e.target.value)}
            value={tpcInf}
            name="tpcInf"
            sx={{ flexColumn: "span 1", width: "200px" }} />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="LCF Inf"
            onChange={(e) => setLcfInf(e.target.value)}
            value={lcfInf}
            name="lcfInf"
            sx={{ flexColumn: "span 1", width: "200px" }} />

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
              sx={{ flexColumn: "span 1", width: "130px", mx: "40px" }} />

            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="MTC +50"
              onChange={(e) => setMtcPlus50(e.target.value)}
              value={mtcPlus50}
              name="mtcPlus50"
              sx={{ flexColumn: "span 1", width: "130px" }} />
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
            value={quarterMean + 0}
            name="quarterMean"
            sx={{
              flexColumn: "span 1", width: "200px",
            }} />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Displacement"
            onChange={(e) => setDisplacement(e.target.value)}
            value={Number(displacement).toFixed(2)}
            name="displacement"
            sx={{ flexColumn: "span 1", width: "200px" }} />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="TPC"
            onChange={(e) => setTpc(e.target.value)}
            value={Number(tpc).toFixed(2)}
            name="tpc"
            sx={{ flexColumn: "span 1", width: "200px" }} />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="LCF"
            onChange={(e) => setLcf(e.target.value)}
            value={Number(lcf).toFixed(2)}
            name="lcf"
            sx={{ flexColumn: "span 1", width: "200px" }} />

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
              sx={{ flexColumn: "span 1", width: "130px", mx: "40px" }} />

            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              label="Delta MTC"
              onChange={(e) => setMtc(e.target.value)}
              value={(Number(mtcPlus50) - Number(mtcMinus50)).toFixed(2)}
              name="mtc"
              sx={{ flexColumn: "span 1", width: "130px" }} />
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
            placeholder="Draft Sup"
            onChange={(e) => setDraftSup(e.target.value)}
            value={(Number(quarterMean) + 0.1).toFixed(2)}
            name="draftSup"
            sx={{ flexColumn: "span 1", width: "200px" }} />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Dis Sup"
            onChange={(e) => setDisplacementSup(e.target.value)}
            value={displacementSup}
            name="displacementSup"
            sx={{ flexColumn: "span 1", width: "200px" }} />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="TPC Sup"
            onChange={(e) => setTpcSup(e.target.value)}
            value={tpcSup}
            name="tpcSup"
            sx={{ flexColumn: "span 1", width: "200px" }} />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="LCF Sup"
            onChange={(e) => setLcfSup(e.target.value)}
            value={lcfSup}
            name="lcfSup"
            sx={{ flexColumn: "span 1", width: "200px" }} />

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
              value={(Number(quarterMean) - 0.5).toFixed(2)}
              name="quarterMinus50"
              sx={{ flexColumn: "span 1", width: "130px", mx: "40px" }} />

            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="MTC-50"
              onChange={(e) => setMtcMinus50(e.target.value)}
              value={mtcMinus50}
              name="mtcMinus50"
              sx={{ flexColumn: "span 1", width: "130px" }} />
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
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="F T C "
            onChange={(e) => setFirstTrimCorrection(e.target.value)}
            value={firstTrimCorrection}
            name="firstTrimCorrection"
            sx={{ gridColumn: "span 4" }} />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="S T C"
            onChange={(e) => setSecondTrimCorrection(e.target.value)}
            value={secondTrimCorrection}
            name="secondTrimCorrection"
            sx={{ flexColumn: "span 2" }} />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Dis Corr Trim"
            onChange={(e) => setDisplacementTrimCorrected(e.target.value)}
            value={displacementTrimCorrected}
            name="displacementTrimCorrected"
            sx={{ flexColumn: "span 2" }} />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Dis Corr Dsty"
            onChange={(e) => setDisplacementDstyCorrected(e.target.value)}
            value={Number(displacementDstyCorrected).toFixed(2)}
            name="displacementDstyCorrected"
            sx={{
              gridColumn: "span 4",

            }} />
        </Box>
        <Box
          sx={{

            borderBottom: "6px solid",
            color: colors.blueAccent[100],
            mt: "80px",
          }}
        ></Box>
        {/* Deductibles */}
        {/* Ligne 7  */}

        <Box
          mt="90px"
          display="flex"
          gap="15px"
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
            sx={{ flexColumn: "span 1", width: "140px" }} />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Freesh Water"
            onChange={(e) => setFreshWater(e.target.value)}
            value={freshWater}
            name="freshWater"
            sx={{ flexColumn: "span 1", width: "140px" }} />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="Fuel"
            onChange={(e) => setFuel(e.target.value)}
            value={fuel}
            name="fuel"
            sx={{ flexColumn: "span 1", width: "140px" }} />
          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="diesel"
            onChange={(e) => setDiesel(e.target.value)}
            value={diesel}
            name="diesel"
            sx={{ flexColumn: "span 1", width: "140px" }} />


          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="lubOil"
            onChange={(e) => setLubOil(e.target.value)}
            value={lubOil}
            name="lubOil"
            sx={{ flexColumn: "span 1", width: "140px" }} />

          <TextField
            fullWidth
            variant="filled"
            type="number"
            label="others"
            onChange={(e) => setOthers(e.target.value)}
            value={others}
            name="others"
            sx={{ flexColumn: "span 1", width: "140px" }} />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="total"
            onChange={(e) => setTotal(e.target.value)}
            value={Number(total).toFixed(2)}
            name="total"
            sx={{ flexColumn: "span 1", width: "180px", mx: "60px" }} />

        </Box>


        <Box
          mt="40px"
          display="flex"
          gap="10px"
          sx={{
            "& > div": { flexColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <TextField
            id="lightship"
            fullWidth
            variant="filled"
            type="number"
            label="Lightship"
            onChange={(e) => setLightship(e.target.value)}
            value={lightship}
            name="lightship"
            sx={{
              flexColumn: "span 1", width: "200px",
            }} />
          <TextField
            id="netLight"
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="NetLight"
            onChange={(e) => setNetLight(e.target.value)}
            value={Number(netLight).toFixed(2)}
            name="netLight"
            sx={{ flexColumn: "span 1", width: "200px" }} />
          <TextField
            fullWidth
            disabled
            variant="outlined"
            type="number"
            label="Constant"
            onChange={(e) => setConstant(e.target.value)}
            value={Number(constant).toFixed(2)}
            name="constant"
            sx={{ flexColumn: "span 1", width: "200px" }} />
          {!isEmpty && (
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
                label="Cargo"
                onChange={(e) => setCargo(e.target.value)}
                value={Number(cargo).toFixed(2)}
                name="cargo"
                sx={{ flexColumn: "span 1", width: "130px" }} />

              <TextField
                fullWidth
                disabled
                id="constantDéclarée"
                variant="outlined"
                type="number"
                label="Constante Déclarée"
                onChange={(e) => setConstantDéclarée(e.target.value)}
                value={constantDéclarée}
                name="constantDéclarée"
                sx={{ flexColumn: "span 1", width: "130px", mx: "40px" }} />

              <TextField
                id="netLoad"
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="NetLoad"
                onChange={(e) => setNetLoad(e.target.value)}
                value={Number(netLoad).toFixed(2)}
                name="netLoad"
                sx={{ flexColumn: "span 1", width: "130px" }} />
            </Box>
          )}
        </Box>
        {/* Boutons     */}
        {/* Signatures   */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "space-between",
            mx: "40px",
            my: "120px",

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
              Ship's Captain
            </span>
            <span>Chef Officer / Ship's staff</span>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            mr="250px"
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

      </form>
      <Box
        sx={{
          mt: "120px",
          borderBottom: "5px solid",
          color: colors.blueAccent[200],

        }}
      ></Box>
    </Box><Box
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      mt="40px"
      mb="40px"
    >
        <Box
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          mt="40px"
          mb="40px"
          width="300px"
          height="15px"
        >
          <PrintToPdf />
        </Box>
      </Box>
      < Footer />
    </>
  );
}
