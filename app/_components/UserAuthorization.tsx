"use client";

import { useEffect, useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { User } from "@/app/_types";
import { UI_MESSAGES } from "@/app/_lib/constants";
import { fetchUserProfile } from "@/app/_lib/api";
import LoadingSpinner from "@/app/_components/LoadingSpinner";
import AppHeader from "@/app/_components/AppHeader";
import AuthSection from "@/app/_components/AuthSection";
import WalletSection from "@/app/_components/WalletSection";

export default function UserAuthorization() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isInMiniApp, setIsInMiniApp] = useState(false);
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    const initSDK = async () => {
      try {
        const inMiniApp = await sdk.isInMiniApp();
        setIsInMiniApp(inMiniApp);
        setIsSDKLoaded(true);

        await sdk.actions.ready();
      } catch (error) {
        console.error(UI_MESSAGES.errors.sdkInitFailed, error);
        setIsSDKLoaded(true);
        try {
          await sdk.actions.ready();
        } catch (readyError) {
          console.error("Failed to call sdk.actions.ready():", readyError);
        }
      }
    };

    initSDK();
  }, []);

  const authenticateUser = async () => {
    try {
      if (!isInMiniApp) {
        alert(UI_MESSAGES.errors.notInFarcaster);
        return;
      }
      const { token } = await sdk.quickAuth.getToken();

      const userData = await fetchUserProfile(token);
      setUser({ token, ...userData });
    } catch (error) {
      console.error(UI_MESSAGES.errors.authFailed, error);
    }
  };

  if (!isSDKLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <AppHeader isInMiniApp={isInMiniApp} />

      <div className="space-y-6">
        <AuthSection user={user} onAuthenticate={authenticateUser} />

        <WalletSection
          isConnected={isConnected}
          address={address}
          onConnect={() => connect({ connector: connectors[0] })}
          onDisconnect={() => disconnect()}
        />
      </div>
    </>
  );
}
