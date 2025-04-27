export type TCalculateROI = {
  apr: number; // e.g. 20 for 20% APR
  amountStaked: number; // e.g. 500
  compoundFrequencyDays: number; // e.g. 1, 7, 14, 30
  stakingPeriodDays: number; // e.g. 90 for 3 months
  creditsPercentage?: number; // default 30%
  useCompounding: boolean; // whether to compound or use simple interest
};

export function calculateROI({
  apr,
  amountStaked,
  compoundFrequencyDays,
  stakingPeriodDays,
  creditsPercentage = 0.3,
  useCompounding = true,
}: TCalculateROI) {
  const years = stakingPeriodDays / 365;
  let stakingRewards: number;

  if (useCompounding) {
    const periodsPerYear = 365 / compoundFrequencyDays;
    const ratePerPeriod = apr / 100 / periodsPerYear;
    const numberOfPeriods = stakingPeriodDays / compoundFrequencyDays;
    stakingRewards =
      amountStaked * (Math.pow(1 + ratePerPeriod, numberOfPeriods) - 1);
  } else {
    stakingRewards = amountStaked * (apr / 100) * years;
  }

  const creditsValue = amountStaked * creditsPercentage;
  return {
    stakingRewards,
    creditsValue,
    totalROI: stakingRewards + creditsValue,
  };
}
