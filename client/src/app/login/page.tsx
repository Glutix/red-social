"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import style from "./Login.module.css";
import { fetchLoginUser } from "@/lib/api";
import { useRouter } from "next/navigation";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errors, setEerrors] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const response = await fetchLoginUser(input);
      if (response.message) {
        router.push("/");
      } else {
        setEerrors([...response]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const currentField = event.target.name;
    const currentValue = event.target.value;

    setInput({ ...input, [currentField]: currentValue });
  };

  return (
    <main className={style.main}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h2>Bienvenidos</h2>

        <section className={style.section}>
          <input
            className={style.input}
            type="email"
            placeholder="Correo electronico"
            onChange={handleInput}
            name="email"
            value={input.email}
          />
          {errors.map((error: any, index) => {
            if (error.path?.includes("email")) {
              return (
                <p key={index} className={style.error}>
                  ❌{error.message}
                </p>
              );
            } else {
              return null;
            }
          })}
        </section>

        <section className={style.section}>
          <input
            className={style.input}
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
            name="password"
            value={input.password}
          />
          {errors?.map((error: any, index) => {
            if (error.path?.includes("password")) {
              return (
                <p key={index} className={style.error}>
                  ❌{error.message}
                </p>
              );
            } else {
              return null;
            }
          })}
        </section>

        <section className={style.register}>
          <a href="/register">Registrate</a>
          <a href="">Olvide mi contraseña</a>
        </section>
        <button className={style.button} type="submit">
          Iniciar sesion
        </button>
      </form>

      <div className={style.brand}>
        <h1>Red Social</h1>
        <p>Una red social para conectar con tus amigos y familiares</p>
      </div>
    </main>
  );
};

export default Login;
