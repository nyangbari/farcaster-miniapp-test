import UserAuthorization from "./_components/UserAuthorization";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <UserAuthorization />
    </div>
  );
}
