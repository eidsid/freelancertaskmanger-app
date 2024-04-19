"use client";
import Link from "next/link";
import { auth, createUser } from "@/firebase";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  if (auth?.currentUser?.uid) router.push("/");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    try {
      await createUser(auth, email.value, password.value);
      router.push("/");
    } catch (error) {}
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        {/* <div className="mb-3">
          <label htmlFor="exampleInputUserName1" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUserName1"
            aria-describedby="emailHelp"
            name="username"
          />
        </div> */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className="my-3">
          <Link href={"/login"} className="my-3">
            existing user? Login
          </Link>
        </div>
      </form>
    </div>
  );
}
