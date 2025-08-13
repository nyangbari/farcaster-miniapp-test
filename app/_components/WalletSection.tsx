import { UI_MESSAGES } from '@/app/_lib/constants';

interface WalletSectionProps {
  isConnected: boolean;
  address: string | undefined;
  onConnect: () => void;
  onDisconnect: () => void;
}

export default function WalletSection({ 
  isConnected, 
  address, 
  onConnect, 
  onDisconnect 
}: WalletSectionProps) {
  return (
    <div className="text-center">
      <h2 className="text-lg font-semibold mb-3">Wallet Connection</h2>
      {isConnected ? (
        <div>
          <p className="text-green-600 mb-2">{UI_MESSAGES.walletConnected}</p>
          <p className="text-sm text-gray-500 mb-3">
            Address: {address?.slice(0, 6)}...{address?.slice(-4)}
          </p>
          <button
            onClick={onDisconnect}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Disconnect Wallet
          </button>
        </div>
      ) : (
        <button
          onClick={onConnect}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}