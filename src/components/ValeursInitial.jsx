/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import StorageIcon from "@mui/icons-material/Storage";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
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
  calculateNetLoad,
  calculateCargo,
  getHydrostaticValues,
  getHydrostaticValuesInf,
  getHydrostaticValuesSup,
} from "../functions/calculationUtils";
import Footer from "./Footer";

import { hydrostatic_table } from "../data/hydrostatic_table";

export default function ValeursInitial() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isEmpty, setIsEmpty] = useState(true);
  const [isLoader, setIsLoader] = useState(false);
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
  const [hydrostatic_table, setHydrostatic_table] = useState([]);
  const [draft, setDraft] = useState();

  const getHydrostaticValuesMemoized = useCallback(
    (draft, hydrostatic_table) =>
      getHydrostaticValues(draft, hydrostatic_table),
    []
  );
  const {
    displacement: hydrostaticDisplacement,
    tpc: hydrostaticTpc,
    lcf: hydrostaticLcf,
    mtcPlus50: hydrostaticMtcPlus50,
    mtcMinus50: hydrostaticMtcMinus50,
  } = useMemo(
    () => getHydrostaticValuesMemoized(draft, hydrostatic_table),
    [draft, hydrostatic_table]
  );

  // Memoized calculation results
  const meanForeCalculated = useMemo(
    () => calculateMeanFore(forePort, foreStbd),
    [forePort, foreStbd]
  );

  const meanAftCalculated = useMemo(
    () => calculateMeanAft(aftPort, aftStbd),
    [aftPort, aftStbd]
  );

  const meanMidCalculated = useMemo(
    () => calculateMeanMid(midPort, midStbd),
    [midPort, midStbd]
  );

  const trimCalculated = useMemo(
    () => calculateTrim(meanAftCalculated, meanForeCalculated),
    [meanAftCalculated, meanForeCalculated]
  );

  const lbmCalculated = useMemo(
    () => calculateLbm(lbp, foreDistance, aftDistance),
    [lbp, foreDistance, aftDistance]
  );

  const foreCorrectedCalculated = useMemo(
    () =>
      calculateForeCorrected(
        trimCalculated,
        foreDistance,
        lbmCalculated,
        meanForeCalculated
      ),
    [trimCalculated, foreDistance, lbmCalculated, meanForeCalculated]
  );

  const aftCorrectedCalculated = useMemo(
    () =>
      calculateAftCorrected(
        trimCalculated,
        aftDistance,
        lbmCalculated,
        meanAftCalculated
      ),
    [trimCalculated, aftDistance, lbmCalculated, meanAftCalculated]
  );

 const midCorrectedCalculated = useMemo(() => {
   const lbmValue = Number(lbmCalculated);
   const meanMidValue = Number(meanMidCalculated);
   const midDistanceValue = Number(midDistance);
   const trimValue = Number(trimCalculated);

   console.log("Valeurs pour midCorrected:", {
     lbmValue,
     meanMidValue,
     midDistanceValue,
     trimValue,
   });

   // Vérifiez que toutes les valeurs sont valides
   if (
     isNaN(lbmValue) ||
     isNaN(meanMidValue) ||
     isNaN(midDistanceValue) ||
     isNaN(trimValue)
   ) {
     console.error("Invalid inputs for midCorrected calculation");
     return null; // Ou une valeur par défaut
   }

   return calculateMidCorrected(
     trimValue,
     midDistanceValue,
     lbmValue,
     meanMidValue
   );
 }, [trimCalculated, midDistance, lbmCalculated, meanMidCalculated]);

  const trimCorrectedCalculated = useMemo(
    () => calculateTrimCorrected(meanAftCalculated, meanForeCalculated),
    [meanAftCalculated, meanForeCalculated]
  );

  const meanForeAftCalculated = useMemo(
    () => calculateMeanForeAft(meanForeCalculated, meanAftCalculated),
    [meanForeCalculated, meanAftCalculated]
  );

  const meanOfMeanCalculated = useMemo(
    () => calculateMeanOfMean(meanForeAftCalculated, meanMidCalculated),
    [meanForeAftCalculated, meanMidCalculated]
  );

  const quarterMeanCalculated = useMemo(
    () =>
      calculateQuarterMean(
        meanForeAftCalculated,
        meanMidCalculated,
        meanOfMeanCalculated
      ),
    [meanForeAftCalculated, meanMidCalculated, meanOfMeanCalculated]
  );

  const displacementCalculated = useMemo(
    () =>
      calculateDisplacement(
        draftInf,
        draftSup,
        quarterMeanCalculated,
        displacementInf,
        displacementSup
      ),
    [
      draftInf,
      draftSup,
      quarterMeanCalculated,
      displacementInf,
      displacementSup,
    ]
  );

  const tpcCalculated = useMemo(
    () =>
      calculateTpc(quarterMeanCalculated, tpcSup, tpcInf, draftInf, draftSup),
    [quarterMeanCalculated, tpcSup, tpcInf, draftInf, draftSup]
  );

  const lcfCalculated = useMemo(
    () =>
      calculateLcf(quarterMeanCalculated, lcfSup, lcfInf, draftSup, draftInf),
    [quarterMeanCalculated, lcfSup, lcfInf, draftSup, draftInf]
  );

  const firstTrimCorrectionCalculated = useMemo(
    () =>
      calculateFirstTrimCorrection(
        trimCorrectedCalculated,
        tpcCalculated,
        lcfCalculated,
        lbp
      ),
    [trimCorrectedCalculated, tpcCalculated, lcfCalculated, lbp]
  );

  const secondTrimCorrectionCalculated = useMemo(
    () =>
      calculateSecondTrimCorrection(
        trimCorrectedCalculated,
        mtcPlus50,
        mtcMinus50,
        lbp
      ),
    [trimCorrectedCalculated, mtcPlus50, mtcMinus50, lbp]
  );

  const displacementTrimCorrectedCalculated = useMemo(
    () =>
      calculateDisplacementTrimCorrected(
        displacementCalculated,
        firstTrimCorrectionCalculated,
        secondTrimCorrectionCalculated
      ),
    [
      displacementCalculated,
      firstTrimCorrectionCalculated,
      secondTrimCorrectionCalculated,
    ]
  );

  const displacementDstyCorrectionCalculated = useMemo(
    () =>
      calculateDisplacementDstyCorrected(
        displacementTrimCorrectedCalculated,
        density
      ),
    [displacementTrimCorrectedCalculated, density]
  );

  const totalCalculated = useMemo(
    () => calculateTotal(ballast, freshWater, fuel, diesel, lubOil, others),
    [ballast, freshWater, fuel, diesel, lubOil, others]
  );

  const netLightCalculated = useMemo(
    () =>
      calculateNetLight(totalCalculated, displacementDstyCorrectionCalculated),
    [totalCalculated, displacementDstyCorrectionCalculated]
  );

  const constantCalculated = useMemo(
    () => calculateConstant(netLightCalculated, lightship),
    [netLightCalculated, lightship]
  );

  const netLoadCalculated = useMemo(
    () =>
      calculateNetLoad(totalCalculated, displacementDstyCorrectionCalculated),
    [totalCalculated, displacementDstyCorrectionCalculated]
  );

  const cargoCalculated = useMemo(
    () => calculateCargo(netLoadCalculated, netLightCalculated),
    [netLoadCalculated, netLightCalculated]
  );

  // Update state with calculated values
  useEffect(() => {
    console.log("Tableau hydrostatique:", hydrostatic_table); // Vérifiez le contenu ici
  }, []);

  useEffect(() => {
    if (quarterMean) {
      const calculatedDraftSup = (
        Number(Math.round(quarterMean * 10) / 10) + 0.1
      ).toFixed(2);
      const calculatedDraftInf = (
        Number(Math.round(quarterMean * 10) / 10) - 0.1
      ).toFixed(2);

      setDraftSup(calculatedDraftSup);
      setDraftInf(calculatedDraftInf);

      // Calculer quarterPlus50 et l'arrondir à deux décimales
      const calculatedQuarterPlus50 = (Number(Math.round(quarterMean * 10) / 10) + 0.5).toFixed(2);
      const calculatedQuarterMinus50 = (Number(Math.round(quarterMean * 10) / 10) - 0.5).toFixed(2);

      setQuarterPlus50(calculatedQuarterPlus50);
      setQuarterMinus50(calculatedQuarterMinus50);

      // Appeler getHydrostaticValues pour mettre à jour les valeurs
      const {
        displacement,
        tpc,
        lcf,
        mtcPlus50,
        mtcMinus50
      } = getHydrostaticValues(calculatedDraftSup, hydrostatic_table);
      setDisplacementSup(displacement);
      setTpcSup(tpc);
      setLcfSup(lcf);
      setMtcPlus50(mtcPlus50);
      setMtcMinus50(mtcMinus50);
    }
  }, [quarterMean, hydrostatic_table]);

  useEffect(() => {
    if (draftSup && draftInf) {
      const {
        displacement,
        tpc,
        lcf,
        mtcPlus50,
        mtcMinus50
      } = getHydrostaticValues(draftInf, hydrostatic_table);
      console.log("Valeurs hydrostatiques:", {
        displacement,
        tpc,
        lcf,
        mtcPlus50,
        mtcMinus50
      });
      setDisplacement(displacement);
      setTpc(tpc);
      setLcf(lcf);
      setMtcPlus50(mtcPlus50);
      setMtcMinus50(mtcMinus50);
    }
  }, [draftSup, draftInf, hydrostatic_table]);

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
    // Ensuite, vous pouvez utiliser hydrostaticDisplacement, hydrostaticTpc et hydrostaticLcf pour mettre à jour vos états
    setDisplacement(hydrostaticDisplacement);
    setTpc(hydrostaticTpc);
    setLcf(hydrostaticLcf);
    setMtcPlus50(hydrostaticMtcPlus50);
    setMtcMinus50(hydrostaticMtcMinus50);
    setFirstTrimCorrection(firstTrimCorrectionCalculated);
    setSecondTrimCorrection(secondTrimCorrectionCalculated);
    setDisplacementTrimCorrected(displacementTrimCorrectedCalculated);
    setDisplacementDstyCorrected(displacementDstyCorrectionCalculated);
    setTotal(totalCalculated);
    setNetLight(netLightCalculated);
    setConstant(constantCalculated);
    setNetLoad(netLoadCalculated);
    setCargo(cargoCalculated);
  }, [
    meanForeCalculated,
    meanAftCalculated,
    meanMidCalculated,
    trimCalculated,
    lbmCalculated,
    foreCorrectedCalculated,
    aftCorrectedCalculated,
    midCorrectedCalculated,
    trimCorrectedCalculated,
    meanForeAftCalculated,
    meanOfMeanCalculated,
    quarterMeanCalculated,
    displacementCalculated,
    tpcCalculated,
    lcfCalculated,
    firstTrimCorrectionCalculated,
    secondTrimCorrectionCalculated,
    displacementTrimCorrectedCalculated,
    displacementDstyCorrectionCalculated,
    totalCalculated,
    netLightCalculated,
    constantCalculated,
    netLoadCalculated,
    cargoCalculated,
    draftSup,
    draftInf,
    displacement,
    tpc,
    lcf,
    quarterPlus50,
    quarterMinus50,
    mtcPlus50,
    mtcMinus50,
    draft,
    hydrostatic_table,
  ]);

  return (
    <>
      {" "}
      <Box m="20px" id="printMe">
        <Header
          title="Mv Arc Rainbow"
          subtitle="Initial Draft Survey Empty Vessel"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/logo_sgs.png`}
          alt="SGS Logo"
          style={{
            width: "80px",
            height: "60px",
            marginRight: "5px",
          }}
        />{" "}
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
              width: "900px",
            }}
          >
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={isEmpty ? "Empty" : "Full"}
              size="small"
              checked={isEmpty}
              onChange={(e) => setIsEmpty(!isEmpty)}
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 28,
                },
                color: colors.greenAccent[500],
                "&.Mui-checked": {
                  color: colors.greenAccent[200],
                },
              }}
            />{" "}
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Lbp"
              value={lbp}
              onChange={(e) => setLbp(e.target.value)}
              name="lbp"
              sx={{
                flexGrow: "3",
                width: "900px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Keel Correction"
              value={keelCorrection}
              onChange={(e) => setKeelCorrection(e.target.value)}
              name="keelCorrection"
              sx={{
                gridColumn: "span 1",
                width: "900px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
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
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
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
              InputProps={{
                style: {
                  fontSize: "20px",
                },
                fontWeight: "bold",
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
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
              InputProps={{
                style: {
                  fontSize: "20px",
                  fontWeight: "bold",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "16px",
                },
              }}
            />{" "}
          </Box>
          <Box
            sx={{
              borderBottom: "4px solid",
              borderColor: colors.blueAccent[100],
              mt: "80px",
            }}
          ></Box>
          {/* Ligne2 */}{" "}
          <Box
            mt="40px"
            display="flex"
            gap="30px"
            sx={{
              "& > div": {
                flexColumn: isNonMobile ? undefined : "span 4",
              },
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
              sx={{
                gridColumn: "span 4",
              }}
            />{" "}
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="fore Stbd"
              onChange={(e) => setForeStbd(e.target.value)}
              value={foreStbd}
              name="foreStbd"
              sx={{
                flexColumn: "span 2",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="fore Distance"
              onChange={(e) => setForeDistance(e.target.value)}
              value={foreDistance}
              name="foreDistance"
              sx={{
                flexColumn: "span 2",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              placeholder="Mean Fore"
              onChange={() => calculateMeanFore()}
              value={meanFore}
              name="meanFore"
              sx={{
                gridColumn: "span 4",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />
          </Box>{" "}
          {/* Ligne3 */}{" "}
          <Box
            mt="10px"
            display="flex"
            gap="30px"
            sx={{
              "& > div": {
                flexColumn: isNonMobile ? undefined : "span 4",
              },
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
              sx={{
                gridColumn: "span 4",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Aft Stbd"
              onChange={(e) => setAftStbd(e.target.value)}
              value={aftStbd}
              name="aftStbd"
              sx={{
                flexColumn: "span 2",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
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
                textAlign: "right",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              placeholder="Mean Aft"
              onChange={(e) => setMeanAft(e.target.value)}
              value={meanAft}
              name="meanAft"
              style={{
                textAlign: "right",
              }}
              sx={{
                gridColumn: "span 1",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
          </Box>{" "}
          {/* Ligne4 */}{" "}
          <Box
            mt="10px"
            display="flex"
            gap="30px"
            sx={{
              "& > div": {
                flexColumn: isNonMobile ? undefined : "span 4",
              },
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
              sx={{
                gridColumn: "span 4",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Mid Stbd"
              onChange={(e) => setMidStbd(e.target.value)}
              value={midStbd}
              name="midStbd"
              sx={{
                flexColumn: "span 2",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Mid Distance"
              onChange={(e) => setMidDistance(e.target.value)}
              value={midDistance}
              name="midDistance"
              sx={{
                flexColumn: "span 2",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              placeholder="Mean Mid"
              onChange={(e) => setMeanMid(e.target.value)}
              value={meanMid}
              name="meanMid"
              sx={{
                gridColumn: "span 4",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />
          </Box>{" "}
          {/* Ligne5 */}{" "}
          <Box
            mt="20px"
            display="flex"
            gap="50px"
            sx={{
              "& > div": {
                flexColumn: isNonMobile ? undefined : "span 4",
              },
            }}
          >
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              placeholder="Fore Corrected"
              onChange={(e) => setForeCorrected(e.target.value)}
              value={foreCorrected}
              name="foreCorrected"
              sx={{
                gridColumn: "span 3",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              placeholder="Aft Corrected"
              onChange={(e) => setAftCorrected(e.target.value)}
              value={aftCorrected}
              name="aftCorrected"
              sx={{
                flexColumn: "span 3",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                  mr: "125px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />
            <TextField
              fullWidth
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
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />
          </Box>{" "}
          {/* Ligne6 */}{" "}
          <Box
            mt="20px"
            display="flex"
            gap="100px"
            sx={{
              "& > div": {
                flexColumn: isNonMobile ? undefined : "span 4",
              },
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
              sx={{
                gridColumn: "span 4",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
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
              sx={{
                flexColumn: "span 2",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              label="Mean Of Mean"
              onChange={(e) => setMeanOfMean(e.target.value)}
              value={meanOfMean}
              name="meanOfMean"
              sx={{
                flexColumn: "span 2",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
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
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
          </Box>{" "}
          <Box
            sx={{
              borderBottom: "6px solid",
              color: colors.blueAccent[100],
              mt: "80px",
            }}
          ></Box>{" "}
          {/* Ligne 7  */}
          <Box
            mt="60px"
            display="flex"
            flexDirection="row"
            gap="2px"
            sx={{
              "& > div": {
                flexColumn: isNonMobile ? undefined : "span 4",
              },
            }}
          >
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              placeholder="Draft Inf"
              onChange={(e) => setDraftInf(e.target.value)}
              value={draftInf}
              name="draftInf"
              sx={{
                flexColumn: "span 1",
                width: "130px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              label="Dis Inf"
              onChange={(e) => setDisplacementInf(e.target.value)}
              value={displacementInf}
              name="displacementInf"
              sx={{
                flexColumn: "span 1",
                width: "130px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              label="TPC Inf"
              onChange={(e) => setTpcInf(e.target.value)}
              value={tpcInf}
              name="tpcInf"
              sx={{
                flexColumn: "span 1",
                width: "130px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              label="LCF Inf"
              onChange={(e) => setLcfInf(e.target.value)}
              value={lcfInf}
              name="lcfInf"
              sx={{
                flexColumn: "span 1",
                width: "130px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
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
                placeholder="Quarter +50"
                onChange={(e) => setQuarterPlus50(e.target.value)}
                value={quarterPlus50}
                name="quarterPlus50"
                sx={{
                  flexColumn: "span 1",
                  width: "130px",
                  mx: "40px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="MTC +50"
                onChange={(e) => setMtcPlus50(e.target.value)}
                value={mtcPlus50}
                name="mtcPlus50"
                sx={{
                  flexColumn: "span 1",
                  width: "130px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
              />{" "}
            </Box>{" "}
          </Box>{" "}
          {/* Ligne 8  */}
          <Box
            mt="10px"
            display="flex"
            flexDirection="row"
            gap="2px"
            sx={{
              "& > div": {
                flexColumn: isNonMobile ? undefined : "span 4",
              },
            }}
          >
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              placeholder="QuarterMean"
              onChange={(e) => setQuarterMean(e.target.value)}
              value={quarterMean + 0}
              name="quarterMean"
              sx={{
                flexColumn: "span 1",
                width: "130px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              placeholder="Displacement"
              onChange={(e) => setDisplacement(e.target.value)}
              value={displacement}
              name="displacement"
              sx={{
                flexColumn: "span 1",
                width: "130px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              placeholder="TPC"
              onChange={(e) => setTpc(e.target.value)}
              value={tpc}
              name="tpc"
              sx={{
                flexColumn: "span 1",
                width: "130px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              placeholder="LCF"
              onChange={(e) => setLcf(e.target.value)}
              value={lcf}
              name="lcf"
              sx={{
                flexColumn: "span 1",
                width: "130px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
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
                placeholder="Quarter"
                onChange={(e) => setQuarter(e.target.value)}
                value={quarterMean}
                name="quarter"
                sx={{
                  flexColumn: "span 1",
                  width: "130px",
                  mx: "40px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
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
                sx={{
                  flexColumn: "span 1",
                  width: "130px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
              />{" "}
            </Box>{" "}
          </Box>
          {/* Ligne 9  */}
          <Box
            mt="10px"
            display="flex"
            flexDirection="row"
            gap="2px"
            sx={{
              "& > div": {
                flexColumn: isNonMobile ? undefined : "span 4",
              },
            }}
          >
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              placeholder="Draft Sup"
              onChange={(e) => setDraftSup(e.target.value)}
              value={draftSup}
              name="draftSup"
              sx={{
                flexColumn: "span 1",
                width: "130px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              variant="outlined"
              type="number"
              label="Dis Sup"
              onChange={(e) => setDisplacementSup(e.target.value)}
              value={displacementSup}
              name="displacementSup"
              sx={{
                flexColumn: "span 1",
                width: "130px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              label="TPC Sup"
              onChange={(e) => setTpcSup(e.target.value)}
              value={tpcSup}
              name="tpcSup"
              sx={{
                flexColumn: "span 1",
                width: "130px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              label="LCF Sup"
              onChange={(e) => setLcfSup(e.target.value)}
              value={lcfSup}
              name="lcfSup"
              sx={{
                flexColumn: "span 1",
                width: "130px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
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
                placeholder="Quarter -50"
                onChange={(e) => setQuarterMinus50(e.target.value)}
                value={quarterMinus50}
                name="quarterMinus50"
                sx={{
                  flexColumn: "span 1",
                  width: "130px",
                  mx: "40px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
              />
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="MTC-50"
                onChange={(e) => setMtcMinus50(e.target.value)}
                value={mtcMinus50}
                name="mtcMinus50"
                sx={{
                  flexColumn: "span 1",
                  width: "130px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
              />{" "}
            </Box>{" "}
          </Box>{" "}
          {/* Ligne 10 */}{" "}
          <Box
            mt="40px"
            display="flex"
            gap="6px"
            sx={{
              "& > div": {
                flexColumn: isNonMobile ? undefined : "span 2",
              },
            }}
          >
            <TextField
              disabled
              variant="outlined"
              type="number"
              placeholder="F T C "
              onChange={(e) => setFirstTrimCorrection(e.target.value)}
              value={firstTrimCorrection}
              name="firstTrimCorrection"
              sx={{
                gridColumn: "span 2",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
                width: "180px",
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              disabled
              variant="outlined"
              type="number"
              placeholder="S T C"
              onChange={(e) => setSecondTrimCorrection(e.target.value)}
              value={secondTrimCorrection}
              name="secondTrimCorrection"
              sx={{
                flexColumn: "span 2",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                  width: "180px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              disabled
              variant="outlined"
              type="number"
              placeholder="Dis Corr Trim"
              onChange={(e) => setDisplacementTrimCorrected(e.target.value)}
              value={displacementTrimCorrected}
              name="displacementTrimCorrected"
              sx={{
                flexColumn: "span 2",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                  width: "180px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              disabled
              variant="outlined"
              type="number"
              placeholder="Dis Corr Dsty"
              onChange={(e) => setDisplacementDstyCorrected(e.target.value)}
              value={Number(displacementDstyCorrected).toFixed(2)}
              name="displacementDstyCorrected"
              sx={{
                gridColumn: "span 2",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                  width: "180px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
          </Box>{" "}
          <Box
            sx={{
              borderBottom: "6px solid",
              color: colors.blueAccent[100],
              mt: "80px",
            }}
          ></Box>
          {/* Ligne 7  */}
          <Box
            mt="90px"
            display="flex"
            gap="15px"
            sx={{
              "& > div": {
                flexColumn: isNonMobile ? undefined : "span 4",
              },
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
              sx={{
                flexColumn: "span 1",
                width: "140px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Fresh Water"
              onChange={(e) => setFreshWater(e.target.value)}
              value={freshWater}
              name="freshWater"
              sx={{
                flexColumn: "span 1",
                width: "140px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Fuel"
              onChange={(e) => setFuel(e.target.value)}
              value={fuel}
              name="fuel"
              sx={{
                flexColumn: "span 1",
                width: "140px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="diesel"
              onChange={(e) => setDiesel(e.target.value)}
              value={diesel}
              name="diesel"
              sx={{
                flexColumn: "span 1",
                width: "140px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="lubOil"
              onChange={(e) => setLubOil(e.target.value)}
              value={lubOil}
              name="lubOil"
              sx={{
                flexColumn: "span 1",
                width: "140px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="others"
              onChange={(e) => setOthers(e.target.value)}
              value={others}
              name="others"
              sx={{
                flexColumn: "span 1",
                width: "140px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />{" "}
            <TextField
              fullWidth
              disabled
              variant="outlined"
              type="number"
              label="total"
              onChange={(e) => setTotal(e.target.value)}
              value={Number(total).toFixed(2)}
              name="total"
              sx={{
                flexColumn: "span 1",
                width: "180px",
                mx: "60px",
              }}
              InputProps={{
                style: {
                  fontSize: "20px",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "20px",
                },
              }}
            />
          </Box>
          {isEmpty && (
            <Box
              mt="40px"
              display="flex"
              gap="10px"
              sx={{
                "& > div": {
                  flexColumn: isNonMobile ? undefined : "span 4",
                },
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
                  flexColumn: "span 1",
                  width: "200px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
              />{" "}
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
                sx={{
                  flexColumn: "span 1",
                  width: "200px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
              />{" "}
              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Constant"
                onChange={(e) => setConstant(e.target.value)}
                value={Number(constant).toFixed(2)}
                name="constant"
                sx={{
                  flexColumn: "span 1",
                  width: "200px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
              />
            </Box>
          )}{" "}
          {!isEmpty && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: "40px",
                mt: "120px",
              }}
            >
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
                sx={{
                  flexColumn: "span 2",
                  width: "130px",
                  mx: "40px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
              />

              <TextField
                fullWidth
                disabled
                variant="outlined"
                type="number"
                label="Cargo"
                onChange={(e) => setCargo(e.target.value)}
                value={Number(cargo).toFixed(2)}
                name="cargo"
                sx={{
                  flexColumn: "span 2",
                  width: "130px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
              />

              <TextField
                id="constantDéclarée"
                variant="filled"
                type="number"
                label="Constante Déclarée"
                onChange={(e) => setConstantDéclarée(e.target.value)}
                value={Number(constantDéclarée).toFixed(2)}
                name="constantDéclarée"
                sx={{
                  flexColumn: "span 2",
                  width: "130px",
                  mx: "40px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "20px",
                  },
                }}
              />
            </Box>
          )}
          {/* Signatures   */}{" "}
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
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/logo_sgs.png`}
                  alt="SGS Logo"
                  style={{
                    width: "120px",
                    height: "120px",
                    marginRight: "15px",
                  }}
                />
                Surveyor print{" "}
              </span>{" "}
              <span> Company surveyor / Terminal 's staff</span>{" "}
            </Box>{" "}
            <Box
              display="flex"
              flexDirection="column"
              mr="200px"
              fontWeight="italic"
              fontSize="1.2rem"
            >
              <span>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/logo_intertek.png`}
                  alt="Intertek Logo"
                  style={{
                    width: "100px",
                    height: "100px",
                    marginRight: "15px",
                  }}
                />
                Ship 's staff{" "}
              </span>{" "}
              <span> Chef Officer / Captain </span>{" "}
            </Box>{" "}
          </Box>
        </form>{" "}
        <Box
          sx={{
            mt: "120px",
            borderBottom: "5px solid",
            color: colors.blueAccent[200],
          }}
        ></Box>{" "}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems={"center"}
        mt="40px"
        mb="40px"
      >
        <PrintToPdf />
      </Box>{" "}
      <Footer />
    </>
  );
}
