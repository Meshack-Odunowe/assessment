import Link from "next/link";
import LoginForm from "./_components/login";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <button className="  text-white px-2 py-4 rounded-lg bg-blue-600">

     <Link href='/login'>Go to Login Page </Link>
      </button>
    </div>
  );
}
