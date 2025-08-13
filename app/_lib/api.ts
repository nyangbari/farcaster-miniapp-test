import { User } from "@/app/_types";
import { decodeJWT } from "./jwt";
import { UI_MESSAGES } from "@/app/_lib/constants";

export const fetchUserProfile = async (
  token: string
): Promise<Partial<User>> => {
  try {
    const payload = decodeJWT(token);
    console.log("Token payload:", payload);

    const fid = payload?.sub || payload?.fid;
    if (fid) {
      const response = await fetch(`/api/userdata?fid=${fid}`);

      if (response.ok) {
        const data = await response.json();
        console.log("API response:", data);

        const username = data.proofs?.[0]?.name;
        return {
          fid: fid,
          username: username,
          profile: data,
        };
      } else {
        console.error(
          UI_MESSAGES.errors.apiFailed,
          response.status,
          response.statusText
        );
      }
    } else {
      console.error(UI_MESSAGES.errors.noFidFound);
    }

    return payload || {};
  } catch (error) {
    console.error(UI_MESSAGES.errors.profileFetchFailed, error);
    return {};
  }
};
