import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="bg-purple-1">wserger</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
