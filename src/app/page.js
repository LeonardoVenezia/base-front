import Link from "next/link";

export default async function Home() {
  return (
    <main className="min-h-screen items-center justify-between p-24">
      <Link className="font-medium mt-2 text-blue-600 hover:underline" href="/login">
        Login
      </Link>
    </main>
  );
}
