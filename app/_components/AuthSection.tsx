import { User } from '@/app/_types';
import { UI_MESSAGES } from '@/app/_lib/constants';

interface AuthSectionProps {
  user: User | null;
  onAuthenticate: () => void;
}

export default function AuthSection({ user, onAuthenticate }: AuthSectionProps) {
  return (
    <div className="text-center">
      <h2 className="text-lg font-semibold mb-3">
        Farcaster Authentication
      </h2>
      {user ? (
        <div>
          <p className="text-green-600 mb-2">{UI_MESSAGES.authSuccess}</p>
          {user.username && (
            <p className="text-gray-600 mb-2">@{user.username}</p>
          )}
          {user.fid && (
            <p className="text-sm text-gray-500 mb-2">FID: {user.fid}</p>
          )}
          <details className="text-left">
            <summary className="cursor-pointer text-sm text-blue-600 hover:text-blue-800">
              View Raw Data
            </summary>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto max-w-sm mx-auto text-black mt-2">
              {JSON.stringify(user, null, 2)}
            </pre>
          </details>
        </div>
      ) : (
        <button
          onClick={onAuthenticate}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Authenticate User
        </button>
      )}
    </div>
  );
}