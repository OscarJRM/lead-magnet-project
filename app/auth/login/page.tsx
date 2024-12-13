"use client";

import { useState } from "react";
import { supabase } from "@/supabase/supabesClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard"); // Redirige al dashboard tras iniciar sesión
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center">Iniciar Sesión</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Correo Electrónico</span>
            </label>
            <input
              type="email"
              placeholder="example@example.com"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Contraseña</span>
            </label>
            <input
              type="password"
              placeholder="********"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={handleLogin}>
              Iniciar Sesión
            </button>
          </div>
          <p className="text-center mt-4">
            ¿No tienes cuenta?{" "}
            <a href="/auth/register" className="text-blue-500">
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
