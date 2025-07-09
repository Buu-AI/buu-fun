const NEXT_PUBLIC_SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4000";

const NEXT_PUBLIC_PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

const SERVER_URL = NEXT_PUBLIC_SERVER_URL;
const EDITOR_URL = process.env?.EDITOR_URL || "http://localhost:1234";
const PRIVY_APP_ID = NEXT_PUBLIC_PRIVY_APP_ID;

export { SERVER_URL, PRIVY_APP_ID, EDITOR_URL };
