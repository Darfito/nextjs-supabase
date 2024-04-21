"use client";

import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { type } from "os";
import { useState } from "react";

export default function Register() {
  // interface dataUser {
  //   email: string;
  //   password: string;
  // }

  const [data, setData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const register = async () => {
    try {
      const { data: dataUser, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: "http://localhost:3000/",
        },
      });

      if (data) console.log(data);
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
          onClick={register}
        >
          Register
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded my-4 ml-4"
        >
          <Link href={"/"}>Login</Link>
        </button>
      </div>
    </div>
  );
}
