//  Fonctions de la logique 
export const calculateMeanFore = (forePort, foreStbd) => {
    console.log("Calculating meanFore with:", forePort, foreStbd);
    const meanFore = ((Number(forePort) || 0) + (Number(foreStbd) || 0)) / 2;
    console.log("Calculated meanFore:", meanFore);
    return (meanFore.toFixed(2));
};

export const calculateMeanAft = (aftPort, aftStbd) => {
    console.log("Calculating meanAft with:", aftPort, aftStbd);
    const meanAft = ((Number(aftPort) || 0) + (Number(aftStbd) || 0)) / 2;
    console.log("Calculated meanAft:", meanAft);
    return (meanAft.toFixed(2));
};

export const calculateMeanMid = (midPort, midStbd) => {
    console.log("Calculating meanMid with:", midPort, midStbd);
    const meanMid = ((Number(midPort) || 0) + (Number(midStbd) || 0)) / 2;
    console.log("Calculated meanMid:", meanMid);
    return (meanMid.toFixed(2));
};

export const calculateTrim = (meanAft, meanFore) => {
    console.log("Calculate trim with:", meanAft, meanFore);
    const trim = Number(meanAft) - Number(meanFore);
    console.log("Trim :", trim);
    return (trim.toFixed(2));
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

    console.log(
        "Calculating LBM with:",
        foreDistanceValue,
        aftDistanceValue,
        lbpValue
    );
    console.log("LBM:", lbm);
    return (lbm.toFixed(2)); // Convert lbm to meters
};

export const calculateForeCorrected = (trim, foreDistance, lbm, meanFore) => {
    console.log("Calculating foreCorrected with inputs:", {
        trim, 
        foreDistance, 
        lbm, 
        meanFore
    });

    // Convert inputs to numbers
    const trimValue = Number(trim);
    const foreDistanceValue = Number(foreDistance);
    const lbmValue = Number(lbm);
    const meanForeValue = Number(meanFore);

    // Validate inputs
    if (isNaN(trimValue) || isNaN(foreDistanceValue) || 
        isNaN(lbmValue) || isNaN(meanForeValue)) {
        console.error('Invalid inputs for foreCorrected calculation');
        return '0.00';
    }

    // Perform fore corrected calculation
    let foreCorrected;
    if (foreDistanceValue < 0) {
        foreCorrected = meanForeValue - 
            ((trimValue * foreDistanceValue) / lbmValue) * 
            (trimValue > 0 ? 1 : -1);
    } else if (foreDistanceValue > 0) {
        foreCorrected = meanForeValue + 
            ((trimValue * foreDistanceValue) / lbmValue) * 
            (trimValue > 0 ? 1 : -1);
    } else {
        foreCorrected = meanForeValue;
    }

    console.log("Calculated foreCorrected:", foreCorrected);
    return foreCorrected.toFixed(2);
};

export const calculateAftCorrected = (trim, aftDistance, lbm, meanAft) => {
    console.log("Calculating aftCorrected with inputs:", {
        trim, 
        aftDistance, 
        lbm, 
        meanAft
    });

    // Convert inputs to numbers
    const trimValue = Number(trim);
    const aftDistanceValue = Number(aftDistance);
    const lbmValue = Number(lbm);
    const meanAftValue = Number(meanAft);

    // Validate inputs
    if (isNaN(trimValue) || isNaN(aftDistanceValue) || 
        isNaN(lbmValue) || isNaN(meanAftValue)) {
        console.error('Invalid inputs for aftCorrected calculation');
        return '0.00';
    }

    // Perform aft corrected calculation
    let aftCorrected;
    if (aftDistanceValue < 0) {
        aftCorrected = meanAftValue - 
            ((trimValue * aftDistanceValue) / lbmValue) * 
            (trimValue > 0 ? 1 : -1);
    } else if (aftDistanceValue > 0) {
        aftCorrected = meanAftValue + 
            ((trimValue * aftDistanceValue) / lbmValue) * 
            (trimValue > 0 ? 1 : -1);
    } else {
        aftCorrected = meanAftValue;
    }

    console.log("Calculated aftCorrected:", aftCorrected);
    return aftCorrected.toFixed(2);
};

export const calculateMidCorrected = (trim, midDistance, lbm, meanMid) => {
    console.log("Calculating midCorrected with inputs:", {
        trim, 
        midDistance, 
        lbm, 
        meanMid
    });

    // Convert inputs to numbers
    const trimValue = Number(trim);
    const midDistanceValue = Number(midDistance);
    const lbmValue = Number(lbm);
    const meanMidValue = Number(meanMid);

    // Validate inputs
    if (isNaN(trimValue) || isNaN(midDistanceValue) || 
        isNaN(lbmValue) || isNaN(meanMidValue)) {
        console.error('Invalid inputs for midCorrected calculation');
        return '0.00';
    }

    // Perform mid corrected calculation
    let midCorrected;
    if (midDistanceValue < 0) {
        midCorrected = meanMidValue - 
            ((trimValue * midDistanceValue) / lbmValue) * 
            (trimValue > 0 ? 1 : -1);
    } else if (midDistanceValue > 0) {
        midCorrected = meanMidValue + 
            ((trimValue * midDistanceValue) / lbmValue) * 
            (trimValue > 0 ? 1 : -1);
    } else {
        midCorrected = meanMidValue;
    }

    console.log("Calculated midCorrected:", midCorrected);
    return midCorrected.toFixed(2);
};


export const calculateTrimCorrected = (meanAftCorrected, meanForeCorrected) => {
    const foreCorrectedValue = Number(meanForeCorrected);
    const aftCorrectedValue = Number(meanAftCorrected);

    // Calculate absolute difference to ensure non-negative trim
    const trimCorrected = Math.abs(aftCorrectedValue - foreCorrectedValue);
    
    console.log("trimCorrected:", trimCorrected);
    return trimCorrected.toFixed(2);
};


export const calculateMeanForeAft = (foreCorrected, aftCorrected) => {
    console.log("The meanForeAft was calculated with :", foreCorrected, aftCorrected);

    let meanForeAft = 0;
    const foreCorrectedValue = foreCorrected;
    const aftCorrectedValue = aftCorrected;

    meanForeAft = (Number(foreCorrectedValue) + Number(aftCorrectedValue)) / 2;
    return (meanForeAft.toFixed(2));

};

export const calculateMeanOfMean = (midCorrected, meanForeAft) => {
    console.log("The meanOfMean was calculated with :", meanForeAft, midCorrected);

    let meanOfMean = 0;
    const midCorrectedValue = midCorrected;
    const meanForeAftValue = meanForeAft;

    meanOfMean = (Number(midCorrectedValue) + Number(meanForeAftValue)) / 2;
    return (meanOfMean.toFixed(2));

};

export const calculateQuarterMean = (midCorrected, meanOfMean) => {
    console.log("The quarterMean was calculated with :", meanOfMean, midCorrected);

    let quarterMean = 0;
    const midCorrectedValue = midCorrected;
    const meanOfMeanValue = meanOfMean;

    quarterMean = (Number(midCorrectedValue) + Number(meanOfMeanValue)) / 2;
    return (quarterMean.toFixed(2));

};

//  Calcul du displacement

export const calculateDisplacement = (draftInf, draftSup, quarterMean, displacementInf, displacementSup) => {
    // Validate inputs
    console.log('Displacement Calculation Inputs:', {
        draftInf, 
        draftSup, 
        quarterMean, 
        displacementInf, 
        displacementSup
    });

    // Convert inputs to numbers with error handling
    const draftInfValue = (Number(quarterMean) - 0.1).toFixed(2);
    const draftSupValue = (Number(quarterMean) + 0.1).toFixed(2);   
    const quarterMeanValue = Number(quarterMean);
    const displacementInfValue = Number(displacementInf);
    const displacementSupValue = Number(displacementSup);

    // Check for invalid inputs
    if (isNaN(draftInfValue) || isNaN(draftSupValue) || 
        isNaN(quarterMeanValue) || isNaN(displacementInfValue) || 
        isNaN(displacementSupValue)) {
        console.error('Invalid input values for displacement calculation');
        return '0.00';
    }

    // Prevent division by zero
    if (draftSupValue === draftInfValue) {
        console.error('Draft sup and draft inf are the same, cannot calculate displacement');
        return '0.00';
    }

    // Perform displacement calculation
    const displacement = displacementInfValue +
        ((displacementSupValue - displacementInfValue) / (draftSupValue - draftInfValue)) *
        (draftSupValue - quarterMeanValue);

    console.log('Calculated Displacement:', displacement);

    return displacement.toFixed(2);
};

// Calcul du Tpc:

export const calculateTpc = (quarterMean, tpcSup, tpcInf) => {
    let tpc = 0;
    const tpcSupValue = tpcSup;
    const tpcInfValue = tpcInf;
    // draft sup et draft inf

    const draftInfValue = (Number(quarterMean) - 0.1).toFixed(2);
    const draftSupValue = (Number(quarterMean) + 0.1).toFixed(2);   
    const quarterMeanValue = quarterMean;

    console.log("tpcInfValue:", tpcInfValue);
    console.log("tpcSupValue:", tpcSupValue);
    
    console.log("draftInfValue:", draftInfValue);
    console.log("draftSupValue:", draftSupValue);
    console.log("quarterMeanValue:", quarterMeanValue);

    tpc = Number(tpcInfValue) +
        ((Number(tpcSupValue) - Number(tpcInfValue)) / (Number(draftSupValue) - Number(draftInfValue))) *
        (Number(draftSupValue) - Number(quarterMeanValue));

        console.log("Tpc :", tpc)
    return (tpc);

};

export const calculateLcf = (quarterMean, lcfSup, lcfInf) => {
    let lcf = 0;
    const lcfSupValue = lcfSup;
    const lcfInfValue = lcfInf;
    // draft sup et draft inf
    let draftSupValue = (Number(quarterMean) + 0.1).toFixed(2);
    let draftInfValue = (Number(quarterMean) - 0.1).toFixed(2);
    
    const quarterMeanValue = quarterMean;

    lcf = Number(lcfInfValue) +
        ((Number(lcfSupValue) - Number(lcfInfValue)) / (Number(draftSupValue) - Number(draftInfValue))) *
        (Number(draftSupValue) - Number(quarterMeanValue));

        console.log("Lcf:", lcf)
    return (lcf);

};

// Calcul du displacement Corrigé:

export const calculateFirstTrimCorrection = (trimCorrected, tpc, lcf, lbp) => {
    let firstTrimCorrection = 0;
    const trimCorrectedValue = trimCorrected;

    const tpcValue = tpc;
    const lcfValue = lcf;
    const lbpValue = lbp;

    firstTrimCorrection =
        (Number(trimCorrectedValue) *
            100 * Number(tpcValue) * Number(lcfValue)) / Number(lbpValue);

        console.log("firstTrimCorrection :", firstTrimCorrection)
    return (firstTrimCorrection.toFixed(2));

};

export const calculateSecondTrimCorrection = (trimCorrected, mtcPlus50, mtcMinus50, lbp) => {
    let secondTrimCorrection = 0;
    const trimCorrectedValue = trimCorrected;
    const mtcPlus50Value = mtcPlus50;
    const mtcMinus50Value = mtcMinus50;

    const mtcValue = mtcPlus50Value - mtcMinus50Value;
    const lbpValue = lbp;

    secondTrimCorrection =
        (Number(trimCorrectedValue) *
            Number(trimCorrectedValue) * Number(mtcValue) * 50) / Number(lbpValue);

        console.log("secondTrimCorrection :", secondTrimCorrection)
    return (secondTrimCorrection.toFixed(2));

};

export const calculateDisplacementTrimCorrected = (displacement, firstTrimCorrection, secondTrimCorrection) => {
    let displacementTrimCorrected = 0;
    const displacementValue = displacement;
    const firstTrimCorrectionValue = firstTrimCorrection;
    const secondTrimCorrectionValue = secondTrimCorrection;

    displacementTrimCorrected =
        Number(displacementValue) +
        Number(firstTrimCorrectionValue) + Number(secondTrimCorrectionValue);

        console.log("displacementTrimCorrected:", displacementTrimCorrected)
    return (displacementTrimCorrected.toFixed(2));

};

export const calculateDisplacementDstyCorrected = (density, displacementTrimCorrected) => {
    let displacementDstyCorrected = 0;
    const densityValue = density;
    const displacementTrimCorrectedValue = displacementTrimCorrected;

    displacementDstyCorrected =
        (Number(displacementTrimCorrectedValue) * Number(densityValue)) / 1.025;

        console.log("displacementDstyCorrected:", displacementDstyCorrected)
    return (displacementDstyCorrected.toFixed(2));

};

export const calculateTotal = (ballast, freshWater, fuel, diesel, lubOil, others) => {
    let total = 0;
    const ballastValue = ballast;
    const freshWaterValue = freshWater;
    const fuelValue = fuel;
    const dieselValue = diesel;
    const lubOilValue = lubOil;
    const othersValue = others;

    total = Number(ballastValue) + Number(freshWaterValue) + Number(fuelValue) + Number(dieselValue) + Number(lubOilValue) + Number(othersValue);
    console.log('Total deductibles :', total)
    return (total.toFixed(2));
};

export const calculateNetLight = (total, displacementDstyCorrected) => {
    let netLight = 0;
    const totalValue = total;
    const displacementDstyCorrectedValue = displacementDstyCorrected;

    netLight = Number(displacementDstyCorrectedValue) - Number(totalValue);

    console.log("Net light :", netLight)
    return (netLight.toFixed(2));
};

export const calculateConstant = (netLight, lightship) => {
    let constant = 0;
    const netLightValue = netLight;
    const lightshipValue = lightship;

    constant = Number(netLightValue) - Number(lightshipValue);
    console.log("Constant Calculée :", constant)
    return (constant.toFixed(2));
};



