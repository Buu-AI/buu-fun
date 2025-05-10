export type InvoiceCreatedEvent = {
  event: "invoice_created";
  invoiceId: string;
  paymentUri: string;
  paymentMethod: "solana" | string;
  paymentAmount: number; // in lamports
  paymentCurrency: "SOL" | string;
  paymentAddress: string;
};

export type InvoiceIntentEvent = {
  event: "payment_intent";
  invoiceId: string;
  paymentUri: string;
  paymentMethod: "solana" | string;
  paymentAmount: number; // in lamports
  paymentCurrency: "SOL" | string;
  paymentAddress: string;
};

export type BitRefillEvents = InvoiceCreatedEvent | InvoiceIntentEvent
