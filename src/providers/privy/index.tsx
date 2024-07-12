"use client";

import { PrivyProvider as Provider } from "@privy-io/react-auth";

export default function PrivyProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider
      appId={process.env.NEXT_PUBLIC_APP_ID!}
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
          logo: "https://ibb.co/7zGhvRZ",
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      {children}
    </Provider>
  );
}
