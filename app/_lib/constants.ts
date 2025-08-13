export const APP_CONFIG = {
  title: "Nyangbari Test MiniApp",
  description: "Test Farcaster MiniApp with wallet and auth",
  image: "/hotteok.jpg",
} as const;

export const WAGMI_CONFIG = {
  chains: ["mainnet", "base"] as const,
} as const;

export const UI_MESSAGES = {
  loading: "Loading Farcaster MiniApp...",
  authSuccess: "✅ User Authenticated!",
  walletConnected: "✅ Wallet Connected!",
  miniAppMode: "📱 MiniApp Mode",
  webMode: "🖥️ Web Mode",
  errors: {
    notInFarcaster: "This feature only works within the Farcaster app",
    authFailed: "Failed to authenticate user",
    sdkInitFailed: "Failed to initialize Farcaster SDK",
    jwtDecodeFailed: "Error decoding JWT",
    profileFetchFailed: "Error fetching user profile",
    apiFailed: "API request failed",
    noFidFound: "No FID found in token payload",
  },
} as const;
