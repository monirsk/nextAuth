"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async (event: any) => {
    event.preventDefault();
  };

  const resetForm = () => {
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="grid grid-cols-12 mt-10">
      <div className="col-span-3 col-start-5 bg-signupColor p-4 rounded-2xl shadow shadow-blue-900">
        <div className="">
          <h1 className="text-3xl text-center text-white">Login</h1>
          <form action="" className="mt-5" onSubmit={onLogin}>
            {/* email */}
            <div className="mt-3">
              <label
                htmlFor="user_email"
                className="block text-sm mb-2 font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="user_email"
                className="p-2 w-full rounded-2xl outline-none focus:ring-2"
                placeholder="Enter your email"
                name="user_email"
                onChange={(event) => {
                  setUser({ ...user, email: event.target.value });
                }}
                value={user.email}
              />
            </div>

            {/* password */}
            <div className="mt-3">
              <label
                htmlFor="user_password"
                className="block text-sm mb-2 font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="user_password"
                className="p-2 w-full rounded-2xl outline-none focus:ring-2"
                placeholder="Enter your password"
                name="user_password"
                onChange={(event) => {
                  setUser({ ...user, password: event.target.value });
                }}
                value={user.password}
              />
            </div>

            <div className="mt-3 flex justify-center gap-2">
              <button
                type="submit"
                className="bg-primary py-2 px-3 rounded-lg hover:bg-blue-900 text-white "
              >
                Signup
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-orange-700 py-2 px-3 rounded-lg hover:bg-orange-600 text-white"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
