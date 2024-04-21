"use client";

import { supabase } from "@/lib/supabase";
import Link from "next/link";
import router, { Router } from "next/router";
import { type } from "os";
import { useState } from "react";

export default function Login() {

  // interface dataUser {
  //   email: string,
  //   password: string,
  // }

    const [data, setData] = useState<{
        email: string,
        password: string,
    }>({
        email: "",
        password: "",
    })
  const login = async () => {
    try {
      const { data: dataUser, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (dataUser){
        console.log(dataUser);
        router.refresh()
      };
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto w-[400px]">
      <div className="grid">
        <label>Email</label>
        <input
          className="text-black"
          type="text"
          name="email"
          value={data?.email}
          onChange={handleChange}
        />
      </div>
      <div className="grid">
        <label>Password</label>
        <input
          className="text-black"
          type="password"
          name="password"
          value={data?.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded my-4"
          onClick={login}
        >
          Login
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded my-4 ml-4"
        >
          <Link href={"/register"}>Register</Link>
        </button>

      </div>
    </div>
  );
}
