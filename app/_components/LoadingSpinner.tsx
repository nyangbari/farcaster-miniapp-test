import { UI_MESSAGES } from "@/app/_lib/constants";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4">{UI_MESSAGES.loading}</p>
      </div>
    </div>
  );
}
