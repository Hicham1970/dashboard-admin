//  Fonctions de la logique section initial
export const calculateMeanFore = (forePort, foreStbd) => {
    const meanFore = ((Number(forePort) || 0) + (Number(foreStbd) || 0)) / 2;

    return meanFore.toFixed(2);
};

export const calculateMeanAft = (aftPort, aftStbd) => {
    const meanAft = ((Number(aftPort) || 0) + (Number(aftStbd) || 0)) / 2;

    return meanAft.toFixed(2);
};

export const calculateMeanMid = (midPort, midStbd) => {
    const meanMid = ((Number(midPort) || 0) + (Number(midStbd) || 0)) / 2;
    return meanMid.toFixed(2);
};

export const calculateTrim = (meanAft, meanFore) => {
    const trim = Number(meanAft) - Number(meanFore);

    return trim.toFixed(2);
};

export const calculateLbm = (foreDistance, aftDistance, lbp) => {
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
    return lbm.toFixed(2); // Convert lbm to meters
};

export const calculateForeCorrected = (trim, foreDistance, lbm, meanFore) => {
    // Convert inputs to numbers
    const trimValue = Number(trim);
    const foreDistanceValue = Number(foreDistance);
    const lbmValue = Number(lbm);
    const meanForeValue = Number(meanFore);

    // Validate inputs
    if (
        isNaN(trimValue) ||
        isNaN(foreDistanceValue) ||
        isNaN(lbmValue) ||
        isNaN(meanForeValue)
    ) {
        console.error("Invalid inputs for foreCorrected calculation");
        return "0.00";
    }

    // Perform fore corrected calculation
    let foreCorrected;
    if (foreDistanceValue < 0) {
        foreCorrected =
            meanForeValue -
            ((trimValue * foreDistanceValue) / lbmValue) * (trimValue > 0 ? 1 : -1);
    } else if (foreDistanceValue > 0) {
        foreCorrected =
            meanForeValue +
            ((trimValue * foreDistanceValue) / lbmValue) * (trimValue > 0 ? 1 : -1);
    } else {
        foreCorrected = meanForeValue;
    }

    return foreCorrected.toFixed(2);
};

export const calculateAftCorrected = (trim, aftDistance, lbm, meanAft) => {
    // Convert inputs to numbers
    const trimValue = Number(trim);
    const aftDistanceValue = Number(aftDistance);
    const lbmValue = Number(lbm);
    const meanAftValue = Number(meanAft);

    // Validate inputs
    if (
        isNaN(trimValue) ||
        isNaN(aftDistanceValue) ||
        isNaN(lbmValue) ||
        isNaN(meanAftValue)
    ) {
        console.error("Invalid inputs for aftCorrected calculation");
        return "0.00";
    }

    // Perform aft corrected calculation
    let aftCorrected;
    if (aftDistanceValue < 0) {
        aftCorrected =
            meanAftValue -
            ((trimValue * aftDistanceValue) / lbmValue) * (trimValue > 0 ? 1 : -1);
    } else if (aftDistanceValue > 0) {
        aftCorrected =
            meanAftValue +
            ((trimValue * aftDistanceValue) / lbmValue) * (trimValue > 0 ? 1 : -1);
    } else {
        aftCorrected = meanAftValue;
    }

    return aftCorrected.toFixed(2);
};

export const calculateMidCorrected = (trim, midDistance, lbm, meanMid) => {
    // Convert inputs to numbers
    const trimValue = Number(trim);
    const midDistanceValue = Number(midDistance);
    const lbmValue = Number(lbm);
    const meanMidValue = Number(meanMid);

    // Validate inputs
    if (
        isNaN(trimValue) ||
        isNaN(midDistanceValue) ||
        isNaN(lbmValue) ||
        isNaN(meanMidValue)
    ) {
        console.error("Invalid inputs for midCorrected calculation");
        return "0.00";
    }

    // Perform mid corrected calculation
    let midCorrected;
    if (midDistanceValue < 0) {
        midCorrected =
            meanMidValue -
            ((trimValue * midDistanceValue) / lbmValue) * (trimValue > 0 ? 1 : -1);
    } else if (midDistanceValue > 0) {
        midCorrected =
            meanMidValue +
            ((trimValue * midDistanceValue) / lbmValue) * (trimValue > 0 ? 1 : -1);
    } else {
        midCorrected = meanMidValue;
    }

    return midCorrected.toFixed(2);
};

export const calculateTrimCorrected = (meanAftCorrected, meanForeCorrected) => {
    const foreCorrectedValue = Number(meanForeCorrected);
    const aftCorrectedValue = Number(meanAftCorrected);

    // Calculate absolute difference to ensure non-negative trim
    const trimCorrected = Math.abs(aftCorrectedValue - foreCorrectedValue);

    return trimCorrected.toFixed(2);
};

export const calculateMeanForeAft = (foreCorrected, aftCorrected) => {
    let meanForeAft = 0;
    const foreCorrectedValue = foreCorrected;
    const aftCorrectedValue = aftCorrected;

    meanForeAft = (Number(foreCorrectedValue) + Number(aftCorrectedValue)) / 2;
    return meanForeAft.toFixed(2);
};

export const calculateMeanOfMean = (midCorrected, meanForeAft) => {
    let meanOfMean = 0;
    const midCorrectedValue = midCorrected;
    const meanForeAftValue = meanForeAft;

    meanOfMean = (Number(midCorrectedValue) + Number(meanForeAftValue)) / 2;
    return meanOfMean.toFixed(2);
};

export const calculateQuarterMean = (midCorrected, meanOfMean) => {
    let quarterMean = 0;
    const midCorrectedValue = midCorrected;
    const meanOfMeanValue = meanOfMean;

    quarterMean = (Number(midCorrectedValue) + Number(meanOfMeanValue)) / 2;
    return quarterMean.toFixed(2);
};





export const getHydrostaticValues = (draft, hydrostaticTable) => {
    console.log("Draft reçu:", draft); // Affiche le draft reçu
    console.log("Tableau hydrostatique:", hydrostaticTable); // Affiche le tableau hydrostatique

    const entry = hydrostaticTable.find(item => item.DRAFT === parseFloat(draft));
    console.log("Entrée trouvée:", entry); // Affiche l'entrée trouvée

    if (entry) {
        return {
            displacement: entry.DISPLACEMENT,
            tpc: entry.TPC,
            lcf: entry.LCF,
        };
    } else {
        console.warn("Aucune entrée trouvée pour le draft donné :", draft);
        return {
            displacement: 0,
            tpc: 0,
            lcf: 0,
        };
    }
};

// Ajoutez une fonction pour obtenir les valeurs pour draftInf
export const getHydrostaticValuesInf = (draftInf, hydrostaticTable) => {
    return getHydrostaticValues(draftInf, hydrostaticTable);
};

// Ajoutez une fonction pour obtenir les valeurs pour draftInf
export const getHydrostaticValuesSup = (draftSup, hydrostaticTable) => {
    return getHydrostaticValues(draftSup, hydrostaticTable);
};


export const getMtcPlus50FromTable = (quarterPlus50, hydrostaticTable) => {
    const entry = hydrostaticTable.find(item => item.QUARTER_PLUS50 === parseFloat(quarterPlus50));
    return entry ? entry.MTC : 0; // Remplacez MTC_PLUS_50 par le nom de la colonne appropriée
};

export const getMtcMinus50FromTable = (quarterMinus50, hydrostaticTable) => {
    const entry = hydrostaticTable.find(item => item.QUARTER_MINUS50 === parseFloat(quarterMinus50));
    return entry ? entry.MTC : 0;
};
//  Calcul du displacement

export const calculateDisplacement = (
    draftInf,
    draftSup,
    quarterMean,
    displacementInf,
    displacementSup
) => {
    // Convert inputs to numbers with error handling
    const draftInfValue = (Number(Math.round(quarterMean)) - 0.1).toFixed(2);
    const draftSupValue = (Number(Math.round(quarterMean)) + 0.1).toFixed(2);
    const quarterMeanValue = Number(quarterMean);
    const displacementInfValue = Number(displacementInf);
    const displacementSupValue = Number(displacementSup);

    // Check for invalid inputs
    if (
        isNaN(draftInfValue) ||
        isNaN(draftSupValue) ||
        isNaN(quarterMeanValue) ||
        isNaN(displacementInfValue) ||
        isNaN(displacementSupValue)
    ) {
        console.error("Invalid input values for displacement calculation");
        return "0.00";
    }

    // Prevent division by zero
    if (draftSupValue === draftInfValue) {
        console.error(
            "Draft sup and draft inf are the same, cannot calculate displacement"
        );
        return "0.00";
    }

    // Perform displacement calculation
    const displacement =
        displacementInfValue +
        ((displacementSupValue - displacementInfValue) /
            (draftSupValue - draftInfValue)) *
        (draftSupValue - quarterMeanValue);

    return displacement.toFixed(2);
};

// Calcul du Tpc:

export const calculateTpc = (quarterMean, tpcSup, tpcInf) => {
    let tpc = 0;
    const tpcSupValue = tpcSup;
    const tpcInfValue = tpcInf;
    // draft sup et draft inf

    const draftInfValue = (Number(Math.round(quarterMean)) - 0.1).toFixed(2);
    const draftSupValue = (Number(Math.round(quarterMean)) + 0.1).toFixed(2);
    const quarterMeanValue = quarterMean;

    tpc =
        Number(tpcInfValue) +
        ((Number(tpcSupValue) - Number(tpcInfValue)) /
            (Number(draftSupValue) - Number(draftInfValue))) *
        (Number(draftSupValue) - Number(quarterMeanValue));

    return tpc;
};

export const calculateLcf = (quarterMean, lcfSup, lcfInf) => {
    let lcf = 0;
    const lcfSupValue = lcfSup;
    const lcfInfValue = lcfInf;
    // draft sup et draft inf
    let draftSupValue = (Number(Math.round(quarterMean)) + 0.1).toFixed(2);
    let draftInfValue = (Number(Math.round(quarterMean)) - 0.1).toFixed(2);

    const quarterMeanValue = quarterMean;

    lcf =
        Number(lcfInfValue) +
        ((Number(lcfSupValue) - Number(lcfInfValue)) /
            (Number(draftSupValue) - Number(draftInfValue))) *
        (Number(draftSupValue) - Number(quarterMeanValue));

    return lcf;
};

// Calcul du displacement Corrigé:

export const calculateFirstTrimCorrection = (trimCorrected, tpc, lcf, lbp) => {
    let firstTrimCorrection = 0;
    const trimCorrectedValue = trimCorrected;

    const tpcValue = tpc;
    const lcfValue = lcf;
    const lbpValue = lbp;

    firstTrimCorrection =
        (Number(trimCorrectedValue) * 100 * Number(tpcValue) * Number(lcfValue)) /
        Number(lbpValue);

    return firstTrimCorrection.toFixed(2);
};

export const calculateSecondTrimCorrection = (
    trimCorrected,
    mtcPlus50,
    mtcMinus50,
    lbp
) => {
    let secondTrimCorrection = 0;
    const trimCorrectedValue = trimCorrected;
    const mtcPlus50Value = mtcPlus50;
    const mtcMinus50Value = mtcMinus50;

    const mtcValue = mtcPlus50Value - mtcMinus50Value;
    const lbpValue = lbp;

    secondTrimCorrection =
        (Number(trimCorrectedValue) *
            Number(trimCorrectedValue) *
            Number(mtcValue) *
            50) /
        Number(lbpValue);

    return secondTrimCorrection.toFixed(2);
};

export const calculateDisplacementTrimCorrected = (
    displacement,
    firstTrimCorrection,
    secondTrimCorrection
) => {
    let displacementTrimCorrected = 0;
    const displacementValue = displacement;
    const firstTrimCorrectionValue = firstTrimCorrection;
    const secondTrimCorrectionValue = secondTrimCorrection;

    displacementTrimCorrected =
        Number(displacementValue) +
        Number(firstTrimCorrectionValue) +
        Number(secondTrimCorrectionValue);

    return displacementTrimCorrected.toFixed(2);
};

export const calculateDisplacementDstyCorrected = (
    density,
    displacementTrimCorrected
) => {
    let displacementDstyCorrected = 0;
    const densityValue = density;
    const displacementTrimCorrectedValue = displacementTrimCorrected;

    displacementDstyCorrected =
        (Number(displacementTrimCorrectedValue) * Number(densityValue)) / 1.025;

    return displacementDstyCorrected.toFixed(2);
};

export const calculateTotal = (
    ballast,
    freshWater,
    fuel,
    diesel,
    lubOil,
    others
) => {
    let total = 0;
    const ballastValue = ballast;
    const freshWaterValue = freshWater;
    const fuelValue = fuel;
    const dieselValue = diesel;
    const lubOilValue = lubOil;
    const othersValue = others;

    total =
        Number(ballastValue) +
        Number(freshWaterValue) +
        Number(fuelValue) +
        Number(dieselValue) +
        Number(lubOilValue) +
        Number(othersValue);

    return total.toFixed(2);
};

export const calculateNetLight = (total, displacementDstyCorrected) => {
    let netLight = 0;
    const totalValue = total;
    const displacementDstyCorrectedValue = displacementDstyCorrected;

    netLight = Number(displacementDstyCorrectedValue) - Number(totalValue);

    return netLight.toFixed(2);
};

export const calculateConstant = (netLight, lightship) => {
    let constant = 0;
    const netLightValue = netLight;
    const lightshipValue = lightship;

    constant = Number(netLightValue) - Number(lightshipValue);

    return constant.toFixed(2);
};

export const calculateNetLoad = (total, displacementDstyCorrected) => {
    let netLoad = 0;
    const totalValue = total;
    const displacementDstyCorrectedValue = displacementDstyCorrected;

    netLoad = Number(displacementDstyCorrectedValue) - Number(totalValue);

    console.log('Net Load:', netLoad);
    return netLoad.toFixed(2);
};

export const calculateCargo = (netLoad, netLight) => {
    let cargo = 0;

    console.log('netLoad:', netLoad);
    console.log('netLight:', netLight);
    cargo = Number(netLoad) - Number(netLight);
    console.log('Cargo:', cargo);
    return cargo.toFixed(2);
};


//  Fonctions de la logique section final
export const calculateMeanForeFinal = (forePortFinal, foreStbdFinal) => {
    const meanForeFinal = ((Number(forePortFinal) || 0) + (Number(foreStbdFinal) || 0)) / 2;

    return meanForeFinal.toFixed(2);
};

export const calculateMeanAftFinal = (aftPortFinal, aftStbdFinal) => {
    const meanAftFinal = ((Number(aftPortFinal) || 0) + (Number(aftStbdFinal) || 0)) / 2;

    return meanAftFinal.toFixed(2);
};

export const calculateMeanMidFinal = (midPortFinal, midStbdFinal) => {
    const meanMid = ((Number(midPortFinal) || 0) + (Number(midStbdFinal) || 0)) / 2;
    return meanMid.toFixed(2);
};

export const calculateTrimFinal = (meanAftFinal, meanForeFinal) => {
    const trimFinal = Number(meanAftFinal) - Number(meanForeFinal);

    return trimFinal.toFixed(2);
};

export const calculateLbmFinal = (foreDistanceFinal, aftDistanceFinal, lbp) => {
    // Ensure lbp, foreDistance, and aftDistance have valid numeric values
    const lbpValue = Number(lbp) || 0;
    const foreDistanceFinalValue = Number(foreDistanceFinal) || 0;
    const aftDistanceFinalValue = Number(aftDistanceFinal) || 0;

    let lbmFinal = lbpValue;

    // Calcul du LBM en fonction des types de distance
    if (foreDistanceFinalValue < 0 && aftDistanceFinalValue > 0) {
        // LBM = LBP - Distance Avant - Distance Arrière
        lbmFinal = lbpValue - foreDistanceFinalValue - aftDistanceFinalValue;
    } else if (foreDistanceFinalValue > 0 && aftDistanceFinalValue < 0) {
        // LBM = LBP + Distance Avant + Distance Arrière
        lbmFinal = lbpValue + foreDistanceFinalValue + aftDistanceFinalValue;
    } else if (foreDistanceFinalValue < 0 && aftDistanceFinalValue < 0) {
        // LBM = LBP - Distance Avant - Distance Arrière
        lbmFinal = lbpValue - foreDistanceFinalValue - aftDistanceFinalValue;
    } else if (foreDistanceFinalValue > 0 && aftDistanceFinalValue > 0) {
        // LBM = LBP + Distance Avant - Distance Arrière
        lbmFinal = lbpValue + foreDistanceFinalValue - aftDistanceFinalValue;
    } else if (foreDistanceFinalValue === 0 && aftDistanceFinalValue < 0) {
        // LBM = LBP - Distance Arrière
        lbmFinal = lbpValue - aftDistanceFinalValue;
    } else if (foreDistanceFinalValue === 0 && aftDistanceFinalValue > 0) {
        // LBM = LBP - Distance Arrière
        lbmFinal = lbpValue - aftDistanceFinalValue;
    } else if (foreDistanceFinalValue < 0 && aftDistanceFinalValue === 0) {
        // LBM = LBP - Distance Avant
        lbmFinal = lbpValue - foreDistanceFinalValue;
    } else if (foreDistanceFinalValue > 0 && aftDistanceFinalValue === 0) {
        // LBM = LBP + Distance Avant
        lbmFinal = lbpValue + foreDistanceFinalValue;
    } else if (foreDistanceFinalValue === 0 && aftDistanceFinalValue === 0) {
        // LBM = LBP
        lbmFinal = lbpValue;
    }
    return lbmFinal.toFixed(2); // Convert lbm to meters
};

export const calculateForeCorrectedFinal = (trimFinal, foreDistanceFinal, lbmFinal, meanForeFinal) => {
    // Convert inputs to numbers
    const trimFinalValue = Number(trimFinal);
    const foreDistanceFinalValue = Number(foreDistanceFinal);
    const lbmFinalValue = Number(lbmFinal);
    const meanForeFinalValue = Number(meanForeFinal);

    // Validate inputs
    if (
        isNaN(trimFinalValue) ||
        isNaN(foreDistanceFinalValue) ||
        isNaN(lbmFinalValue) ||
        isNaN(meanForeFinalValue)
    ) {
        console.error("Invalid inputs for foreCorrected calculation");
        return "0.00";
    }

    // Perform fore corrected calculation
    let foreCorrectedFinal;
    if (foreDistanceFinalValue < 0) {
        foreCorrectedFinal =
            meanForeFinalValue -
            ((trimFinalValue * foreDistanceFinalValue) / lbmFinalValue) * (trimFinalValue > 0 ? 1 : -1);
    } else if (foreDistanceFinalValue > 0) {
        foreCorrectedFinal =
            meanForeFinalValue +
            ((trimFinalValue * foreDistanceFinalValue) / lbmFinalValue) * (trimFinalValue > 0 ? 1 : -1);
    } else {
        foreCorrectedFinal = meanForeFinalValue;
    }

    return foreCorrectedFinal.toFixed(2);
};

export const calculateAftCorrectedFinal = (trimFinal, aftDistanceFinal, lbmFinal, meanAftFinal) => {
    // Convert inputs to numbers
    const trimFinalValue = Number(trimFinal);
    const aftDistanceFinalValue = Number(aftDistanceFinal);
    const lbmFinalValue = Number(lbmFinal);
    const meanAftFinalValue = Number(meanAftFinal);

    // Validate inputs
    if (
        isNaN(trimFinalValue) ||
        isNaN(aftDistanceFinalValue) ||
        isNaN(lbmFinalValue) ||
        isNaN(meanAftFinalValue)
    ) {
        console.error("Invalid inputs for aftCorrected calculation");
        return "0.00";
    }

    // Perform aft corrected calculation
    let aftCorrectedFinal;
    if (aftDistanceFinalValue < 0) {
        aftCorrectedFinal =
            meanAftFinalValue -
            ((trimFinalValue * aftDistanceFinalValue) / lbmFinalValue) * (trimFinalValue > 0 ? 1 : -1);
    } else if (aftDistanceFinalValue > 0) {
        aftCorrectedFinal =
            meanAftFinalValue +
            ((trimFinalValue * aftDistanceFinalValue) / lbmFinalValue) * (trimFinalValue > 0 ? 1 : -1);
    } else {
        aftCorrectedFinal = meanAftFinalValue;
    }

    return aftCorrectedFinal.toFixed(2);
};

export const calculateMidCorrectedFinal = (trimFinal, midDistanceFinal, lbmFinal, meanMidFinal) => {
    // Convert inputs to numbers
    const trimFinalValue = Number(trimFinal);
    const midDistanceFinalValue = Number(midDistanceFinal);
    const lbmFinalValue = Number(lbmFinal);
    const meanMidFinalValue = Number(meanMidFinal);

    // Validate inputs
    if (
        isNaN(trimFinalValue) ||
        isNaN(midDistanceFinalValue) ||
        isNaN(lbmFinalValue) ||
        isNaN(meanMidFinalValue)
    ) {
        console.error("Invalid inputs for midCorrected calculation");
        return "0.00";
    }

    // Perform mid corrected calculation
    let midCorrectedFinal;
    if (midDistanceFinalValue < 0) {
        midCorrectedFinal =
            meanMidFinalValue -
            ((trimFinalValue * midDistanceFinalValue) / lbmFinalValue) * (trimFinalValue > 0 ? 1 : -1);
    } else if (midDistanceFinalValue > 0) {
        midCorrectedFinal =
            meanMidFinalValue +
            ((trimFinalValue * midDistanceFinalValue) / lbmFinalValue) * (trimFinalValue > 0 ? 1 : -1);
    } else {
        midCorrectedFinal = meanMidFinalValue;
    }

    return midCorrectedFinal.toFixed(2);
};

export const calculateTrimCorrectedFinal = (meanAftCorrectedFinal, meanForeCorrectedFinal) => {
    const foreCorrectedFinalValue = Number(meanForeCorrectedFinal);
    const aftCorrectedFinalValue = Number(meanAftCorrectedFinal);

    // Calculate absolute difference to ensure non-negative trim
    const trimCorrectedFinal = Math.abs(aftCorrectedFinalValue - foreCorrectedFinalValue);

    return trimCorrectedFinal.toFixed(2);
};

export const calculateMeanForeAftFinal = (foreCorrectedFinal, aftCorrectedFinal) => {
    let meanForeAftFinal = 0;
    const foreCorrectedFinalValue = foreCorrectedFinal;
    const aftCorrectedFinalValue = aftCorrectedFinal;

    meanForeAftFinal = (Number(foreCorrectedFinalValue) + Number(aftCorrectedFinalValue)) / 2;
    return meanForeAftFinal.toFixed(2);
};

export const calculateMeanOfMeanFinal = (midCorrectedFinal, meanForeAftFinal) => {
    let meanOfMeanFinal = 0;
    const midCorrectedFinalValue = midCorrectedFinal;
    const meanForeAftFinalValue = meanForeAftFinal;

    meanOfMeanFinal = (Number(midCorrectedFinalValue) + Number(meanForeAftFinalValue)) / 2;
    return meanOfMeanFinal.toFixed(2);
};

export const calculateQuarterMeanFinal = (midCorrectedFinal, meanOfMeanFinal) => {
    let quarterMeanFinal = 0;
    const midCorrectedFinalValue = midCorrectedFinal;
    const meanOfMeanFinalValue = meanOfMeanFinal;

    quarterMeanFinal = (Number(midCorrectedFinalValue) + Number(meanOfMeanFinalValue)) / 2;
    return quarterMeanFinal.toFixed(2);
};


export const calculateDisplacementFinal = (
    draftInfFinal,
    draftSupFinal,
    quarterMeanFinal,
    displacementInfFinal,
    displacementSupFinal
) => {
    // Convert inputs to numbers with error handling
    const draftInfFinalValue = (Number(Math.round(quarterMeanFinal)) - 0.1).toFixed(2);
    const draftSupFinalValue = (Number(Math.round(quarterMeanFinal)) + 0.1).toFixed(2);
    const quarterMeanFinalValue = Number(quarterMeanFinal);
    const displacementInfFinalValue = Number(displacementInfFinal);
    const displacementSupFinalValue = Number(displacementSupFinal);

    // Check for invalid inputs
    if (
        isNaN(draftInfFinalValue) ||
        isNaN(draftSupFinalValue) ||
        isNaN(quarterMeanFinalValue) ||
        isNaN(displacementInfFinalValue) ||
        isNaN(displacementSupFinalValue)
    ) {
        console.error("Invalid input values for displacement calculation");
        return "0.00";
    }

    // Prevent division by zero
    if (draftSupFinalValue === draftInfFinalValue) {
        console.error(
            "Draft sup and draft inf are the same, cannot calculate displacement"
        );
        return "0.00";
    }

    // Perform displacement calculation
    const displacementFinal =
        displacementInfFinalValue +
        ((displacementSupFinalValue - displacementInfFinalValue) /
            (draftSupFinalValue - draftInfFinalValue)) *
        (draftSupFinalValue - quarterMeanFinalValue);

    return displacementFinal.toFixed(2);
};

export const calculateTpcFinal = (quarterMeanFinal, tpcSupFinal, tpcInfFinal, draftSupFinal, draftInfFinal) => {
    let tpcFinal = 0;
    const tpcSupFinalValue = Number(tpcSupFinal);
    const tpcInfFinalValue = Number(tpcInfFinal);
    // draft sup et draft inf

    const draftInfFinalValue = (Number(Math.round(quarterMeanFinal)) - 0.1).toFixed(2);
    const draftSupFinalValue = (Number(Math.round(quarterMeanFinal)) + 0.1).toFixed(2);
    const quarterMeanFinalValue = quarterMeanFinal;

    tpcFinal =
        tpcInfFinalValue +
        ((tpcSupFinalValue - tpcInfFinalValue) /
            (draftSupFinalValue - draftInfFinalValue)) *
        (draftSupFinalValue - quarterMeanFinalValue);

    console.log('tpcFinal :', tpcFinal)
    return tpcFinal.toFixed(2);
};

export const calculateLcfFinal = (quarterMeanFinal, lcfSupFinal, lcfInfFinal) => {
    let lcfFinal = 0;
    const lcfSupFinalValue = lcfSupFinal;
    const lcfInfFinalValue = lcfInfFinal;
    // draft sup et draft inf
    let draftSupFinalValue = (Number(Math.round(quarterMeanFinal)) + 0.1).toFixed(2);
    let draftInfFinalValue = (Number(Math.round(quarterMeanFinal)) - 0.1).toFixed(2);

    const quarterMeanFinalValue = quarterMeanFinal;

    lcfFinal =
        Number(lcfInfFinalValue) +
        ((Number(lcfSupFinalValue) - Number(lcfInfFinalValue)) /
            (Number(draftSupFinalValue) - Number(draftInfFinalValue))) *
        (Number(draftSupFinalValue) - Number(quarterMeanFinalValue));

    return lcfFinal;
};
