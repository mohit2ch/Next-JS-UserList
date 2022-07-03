import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function NotFound() {
  const router = useRouter();
  useEffect(function () {
    setTimeout(function () {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="content">
      <h1>Link Not Found</h1>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
}
