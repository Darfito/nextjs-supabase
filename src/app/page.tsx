import { supabase, supabaseAdmin } from "@/lib/supabase";
import Image from "next/image";

export default function Home() {
  const setNewView = async () => {
    const {data, error} = await supabaseAdmin
      .from('views')
      .insert({name: 'Mario Bros'})

      if (data) console.log(data)
      if (error) console.log(error)
  }

  setNewView()

  return (
    <div>Hello</div>
  );
}
