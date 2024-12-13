"use client"

import { supabase } from "@/supabase/supabesClient";
import { useRouter } from "next/router"
import { useEffect } from "react";

export default function LoginPage (){
  const router = useRouter();

  useEffect(()=>{
    const checkAuth = async () => {
      const {data} = await supabase.auth.getUser();
      if(!data.user){
        router.push("/auth/login");
      }
      router.push("/dashboard"); 
  };

  checkAuth();

},[router]);

return <p>Cargando...</p>
}