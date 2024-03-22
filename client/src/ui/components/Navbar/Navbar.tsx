import style from "../Navbar.module.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <section className={style.section}>
        <Image src="/home.svg" alt="logo" width={30} height={30} />
        <span>Inicio</span>
      </section>

      <section className={style.section}>
        <Image src="/search.svg" alt="logo" width={30} height={30} />
        <span>Buscar</span>
      </section>

      <section className={style.section}>
        <Image src="/notification.svg" alt="logo" width={30} height={30} />
        <span>Notificaciones</span>
      </section>

      <section className={style.section}>
        <Image src="/message.svg" alt="logo" width={30} height={30} />
        <span>Mensajes</span>
      </section>

      <section className={style.section}>
        <Image src="/profile.svg" alt="logo" width={30} height={30} />
        <span>Perfil</span>
      </section>

      <section className={style.section}>
        <Image src="/menu.svg" alt="logo" width={30} height={30} />
        <span>Mas</span>
      </section>
    </nav>
  );
};

export default Navbar;
