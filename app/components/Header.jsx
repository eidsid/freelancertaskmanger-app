"use client";
import { auth, logout } from "@/firebase";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [USER, setUSER] = useState();
  useEffect(() => {
    const user = auth?.currentUser?.uid;
    if (user) setUSER(auth?.currentUser?.uid);
  }, [auth?.currentUser?.uid]);
  return (
    <div>
      <nav
        className="navbar bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div className="container">
          <Link href={"/"} className="navbar-brand">
            Task Management
          </Link>
          {USER ? (
            <button
              className=" bg-red-400 p-2  rounded-sm text-white"
              onClick={() => logout(auth)}
            >
              LogOut
            </button>
          ) : (
            <Link
              href={"/login"}
              className="btn btn-outline-success"
              type="submit"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
