import style from "./Register.module.css";

const Register = () => {
  return (
    <main className={style.main}>
      <form className={style.form} action="">
        <input className={style.input} type="text" placeholder="Nombre" />
        <input className={style.input} type="text" placeholder="Apellido" />
        <input
          className={style.input}
          type="email"
          placeholder="Correo electronico"
        />
        <input
          className={style.input}
          type="password"
          placeholder="Contraseña"
        />

        <button className={style.button}>Registrarse</button>
      </form>
    </main>
  );
};

export default Register;
