import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-4 h-screen items-center justify-center">
      <button className="  text-white px-2 py-4 rounded-lg bg-blue-600">

     <Link href='/login'>Go to Login Page </Link>
      </button>
      <button className="  text-white px-2 py-4 rounded-lg bg-blue-600">

     <Link href='/reset-password'>Link to Password Reset page </Link>
      </button>
      <button className="  text-white px-2 py-4 rounded-lg bg-blue-600">

     <Link href='/control-tower'>Link to Control Tower  </Link>
      </button>
      <button className="  text-white px-2 py-4 rounded-lg bg-blue-600">

     <Link href='/forgot-password'>Link to Forgot Password  </Link>
      </button>
      <button className="  text-white px-2 py-4 rounded-lg bg-blue-600">

     <Link href='/cash-request'>Link to Cash Request  </Link>
      </button>
    </div>
  );
}
