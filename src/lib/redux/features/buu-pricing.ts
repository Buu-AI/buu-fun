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
  buuPricingHistoryTime: TBuuPricingTime;
};

const initialState: BuuPricingState = {
  buuPricingHistoryTime: "LAST_HOUR",
};

const BuuPricingSlice = createSlice({
  name: "BuuPricing",
  initialState,
  reducers: {
    setBuuPricingHour(state, action: PayloadAction<TBuuPricingTime>) {
      state.buuPricingHistoryTime = action.payload;
    },
  },
});

export const { setBuuPricingHour } = BuuPricingSlice.actions;

export default BuuPricingSlice.reducer;
