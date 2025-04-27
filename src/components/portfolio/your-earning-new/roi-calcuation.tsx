type CalculateStakingROIParams = {
  principalTokens: number; // amount of $BUU tokens staked
  tokenPrice: number; // current price of 1 token in USD
  aprPercent: number; // annual percentage rate, e.g., 20 for 20%
  stakeDays: number; // how many days the user stakes
  compoundEveryDays: number; // how often to compound rewards
};

export function calculateStakingROI({
  principalTokens,
  tokenPrice,
  aprPercent,
  stakeDays,
  compoundEveryDays,
}: CalculateStakingROIParams) {
  const aprDecimal = aprPercent / 100;
  const timesCompounded = Math.floor(stakeDays / compoundEveryDays);
  return (
    principalTokens *
    Math.pow(1 + aprDecimal / timesCompounded, timesCompounded * stakeDays)
  );

  const principalUSD = principalTokens * tokenPrice;

  const years = stakeDays / 365;

  const amount =
    principalUSD *
    Math.pow(1 + aprDecimal / (365 / compoundEveryDays), timesCompounded);

  const earned = amount - principalUSD;

  return {
    earnedUSD: earned,
    earnedTokens: earned / tokenPrice,
    finalValueUSD: amount,
    aprPercent: aprPercent,
    roiPercent: (earned / principalUSD) * 100,
  };
}

/**
 * Interface for ROI calculator input parameters
 */
export interface ROICalculatorParams {
  stakedAmount: number; // Amount user wants to stake
  stakingPeriodDays: number; // Staking duration in days (1, 7, 30, 365)
  aprRewardsPercentage: number; // APR rewards percentage
  aprCreditsPercentage: number; // APR credits percentage
  tokenPrice: number; // Current price of the token
  isCompounding?: boolean; // Whether compounding is enabled
  compoundingPeriodDays?: number; // Frequency of compounding in days (1, 7, 14, 30)
}
/**
 * Interface for formatted ROI calculator results
 */
interface FormattedROIResults {
    stakedAmount: string;
    finalValue: string;
    roiPercentage: string;
    aprStakingRewards: string;
    creditsValue: string;
    aprRewardsPercentage: string;
    aprCreditsPercentage: string;
  }
  
/**
 * Interface for ROI calculator results
 */
interface ROICalculatorResults {
  stakedAmount: number;
  finalROI: number;
  roiPercentage: number;
  aprStakingRewards: number;
  creditsValue: number;
  aprRewardsPercentage: number;
  aprCreditsPercentage: number;
}


/**
 * Calculate ROI for staked tokens
 * @param params - ROI calculator parameters
 * @returns Calculated ROI values
 */

export function calculateROI(
  params: ROICalculatorParams
): ROICalculatorResults {
  const {
    stakedAmount,
    stakingPeriodDays,
    aprRewardsPercentage,
    aprCreditsPercentage,
    tokenPrice,
    isCompounding = false,
    compoundingPeriodDays = 0,
  } = params;

  // Convert percentages to decimals
  const aprRewardsDecimal = aprRewardsPercentage / 100;
  const aprCreditsDecimal = aprCreditsPercentage / 100;

  // Calculate APR values in dollar terms
  const aprStakingRewards = stakedAmount * aprRewardsDecimal;
  const creditsValue = stakedAmount * aprCreditsDecimal * tokenPrice;

  let finalROI: number;
  let roiPercentage: number;

  if (!isCompounding) {
    // Simple interest calculation
    const rewards =
      stakedAmount * aprRewardsDecimal * (stakingPeriodDays / 365);
    finalROI = stakedAmount + rewards;
    roiPercentage = (rewards / stakedAmount) * 100;
  } else {
    // Compound interest calculation
    const periodsPerYear = 365 / compoundingPeriodDays!;
    const compoundingPeriodsForStakingDuration =
      stakingPeriodDays / compoundingPeriodDays!;

    // Compound interest formula: P(1 + r/n)^(nt)
    // Where P = principal, r = rate, n = compounds per period, t = time
    const rate = aprRewardsDecimal / periodsPerYear;
    finalROI =
      stakedAmount * Math.pow(1 + rate, compoundingPeriodsForStakingDuration);
    roiPercentage = ((finalROI - stakedAmount) / stakedAmount) * 100;
  }

  return {
    stakedAmount,
    finalROI,
    roiPercentage,
    aprStakingRewards,
    creditsValue,
    aprRewardsPercentage,
    aprCreditsPercentage,
  };
}

/**
 * Format calculation results for display
 * @param results - Results from calculateROI function
 * @returns Formatted results for display
 */
function formatROIResults(results: ROICalculatorResults): FormattedROIResults {
  return {
    stakedAmount: `$${results.stakedAmount.toFixed(2)}`,
    finalValue: `$${results.finalROI.toFixed(2)}`,
    roiPercentage: `${results.roiPercentage.toFixed(2)}%`,
    aprStakingRewards: `$${results.aprStakingRewards.toFixed(2)}`,
    creditsValue: `$${results.creditsValue.toFixed(2)}`,
    aprRewardsPercentage: `${results.aprRewardsPercentage}%`,
    aprCreditsPercentage: `${results.aprCreditsPercentage}%`,
  };
}

/**
 * Example usage
 */
function exampleCalculation(): FormattedROIResults {
  const params: ROICalculatorParams = {
    stakedAmount: 100, // $100 initial stake
    stakingPeriodDays: 30, // 30 days staking period
    aprRewardsPercentage: 20, // 20% APR rewards
    aprCreditsPercentage: 3, // 3% APR credits
    tokenPrice: 1.75, // $1.75 token price
    isCompounding: true, // Compounding enabled
    compoundingPeriodDays: 7, // Compound every 7 days
  };

  const results = calculateROI(params);
  return formatROIResults(results);
}

// Usage example:
// const exampleResults = exampleCalculation();
// console.log(exampleResults);
