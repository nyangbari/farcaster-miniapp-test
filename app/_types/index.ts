export interface UserProfile {
  timestamp: number;
  name: string;
  owner: string;
  signature: string;
  fid: number;
  type: string;
}

export interface User {
  token: string;
  fid?: number;
  username?: string;
  displayName?: string;
  pfpUrl?: string;
  bio?: string;
  profile?: {
    proofs?: UserProfile[];
  };
}

export interface JWTPayload {
  sub?: number;
  fid?: number;
  [key: string]: unknown;
}

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
}
