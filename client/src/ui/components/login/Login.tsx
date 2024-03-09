"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import style from "./Login.module.css";
import { fetchLoginUser } from "@/lib/api";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userCredentials = await fetchLoginUser(input.email, input.password);
    if (userCredentials.token) {
      alert("logiaste uwu");
    } else {
      alert("No logiaste");
    }
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const currentField = event.target.name;
    const currentValue = event.target.value;

    setInput({ ...input, [currentField]: currentValue });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h2>Bienvenidos</h2>
      <input
        className={style.input}
        type="email"
        placeholder="Correo electronico"
        onChange={handleInput}
        name="email"
        value={input.email}
      />

      <input
        className={style.input}
        type="password"
        placeholder="Contraseña"
        onChange={handleInput}
        name="password"
        value={input.password}
      />
      <section className={style.register}>
        <a href="/register">Registrate</a>
        <a href="">Olvide mi contraseña</a>
      </section>
      <button className={style.button} type="submit">
        Iniciar sesion
      </button>
    </form>
  );
};

export default Login;
