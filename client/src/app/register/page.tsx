"use client";
import style from "./Register.module.css";
import { ChangeEvent, useState, FormEvent } from "react";
import { fetchRegisterUser } from "@/lib/api";

const Register = () => {
  const [dataUser, setDataUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthdate: "",
    image: "",
    description: "",
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const currentField = event.target.name;
    const currentValue = event.target.value;
    setDataUser({ ...dataUser, [currentField]: currentValue });
  };

  const handleSumbit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await fetchRegisterUser(dataUser);
    console.log(result);
    if (result.message) {
      setDataUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        birthdate: "",
        image: "",
        description: "",
      });
    }
  };

  return (
    <main className={style.main}>
      <form className={style.form} onSubmit={handleSumbit}>
        <section className={style.fullName}>
          <input
            className={style.input}
            type="text"
            placeholder="Nombre"
            name="firstName"
            value={dataUser.firstName}
            onChange={handleInput}
          />
          <input
            className={style.input}
            type="text"
            placeholder="Apellido"
            name="lastName"
            value={dataUser.lastName}
            onChange={handleInput}
          />
        </section>

        <input
          className={style.input}
          type="email"
          placeholder="Correo electronico"
          name="email"
          value={dataUser.email}
          onChange={handleInput}
        />

        <input
          className={style.input}
          type="password"
          placeholder="Contraseña"
          name="password"
          value={dataUser.password}
          onChange={handleInput}
        />

        <section className={style.date}>
          <span>Fecha de nacimiento: </span>
          <input
            className={style.input}
            type="date"
            name="birthdate"
            value={dataUser.birthdate}
            onChange={handleInput}
          />
        </section>

        <input
          type="file"
          accept=".jpg,.png, .jpeg"
          name="image"
          value={dataUser.image}
          onChange={handleInput}
        />

        <input
          className={style.input && style.description}
          type="text"
          placeholder="Descripcion"
          name="description"
          maxLength={45}
          value={dataUser.description}
          onChange={handleInput}
        />

        <button className={style.button}>Registrarse</button>
      </form>
    </main>
  );
};

export default Register;
