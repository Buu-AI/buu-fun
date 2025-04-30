import { BooleanKeys } from "@/types/utils";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export const BuuPricingTime = [
  "ALL",
  "LAST_DAY",
  "LAST_HOUR",
  "LAST_MONTH",
  "LAST_THREE_HOURS",
  "LAST_WEEK",
  "LAST_YEAR",
] as const;
export type TBuuPricingTime = (typeof BuuPricingTime)[number];

type BuuPricingState = {
  amountToStake: number;
  buuPricingHistoryTime: TBuuPricingTime;
  streamflowDialogOpen: boolean;
  buyBuuDialogOpen: boolean;
  unclaimedRewardsModalOpen: boolean;
  roiStakingDialogOpen: boolean;
};

const initialState: BuuPricingState = {
  buuPricingHistoryTime: "LAST_MONTH",
  amountToStake: 0,
  streamflowDialogOpen: false,
  buyBuuDialogOpen: false,
  unclaimedRewardsModalOpen: false,
  roiStakingDialogOpen: false,
};

const BuuPricingSlice = createSlice({
  name: "BuuPricing",
  initialState,
  reducers: {
    setBooleanToggler(
      state,
      action: PayloadAction<{
        key: BooleanKeys<BuuPricingState>;
        value: boolean;
      }>,
    ) {
      state[action.payload.key] = action.payload.value;
    },
    setSelectedAmountToStake(state, action: PayloadAction<number>) {
      state.amountToStake = action.payload;
    },
    setBuuPricingHour(state, action: PayloadAction<TBuuPricingTime>) {
      state.buuPricingHistoryTime = action.payload;
    },
    setStreamflowDialogOpen(state, action: PayloadAction<boolean>) {
      state.streamflowDialogOpen = action.payload;
    },
    setBuyBuuDialogOpen(state, action: PayloadAction<boolean>) {
      state.buyBuuDialogOpen = action.payload;
    },
    setTogglers(
      state,
      action: PayloadAction<{
        value: boolean;
        key: BooleanKeys<BuuPricingState>;
      }>
    ) {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const {
  setBuuPricingHour,
  setSelectedAmountToStake,
  setBuyBuuDialogOpen,
  setStreamflowDialogOpen,
  setTogglers,
  setBooleanToggler,
} = BuuPricingSlice.actions;

export default BuuPricingSlice.reducer;
