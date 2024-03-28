import style from "./Navbar.module.css";
import SearchIcon from "@/icons/SearchIcon";
import HomeIcon from "@/icons/HomeIcon";
import NotificationIcon from "@/icons/NotificationIcon";
import MenuIcon from "@/icons/MenuIcon";
import ProfileIcon from "@/icons/ProfileIcon";
import MessageIcon from "@/icons/MessageIcon";

const Navbar = () => {
  const menuItem = [
    {
      name: "Inicio",
      icon: <HomeIcon className={style.icon} />,
    },
    {
      name: "Buscar",
      icon: <SearchIcon className={style.icon} />,
    },
    {
      name: "Mensajes",
      icon: <MessageIcon className={style.icon} />,
    },
    {
      name: "Notificacion",
      icon: <NotificationIcon className={style.icon} />,
    },
    {
      name: "Perfil",
      icon: <ProfileIcon className={style.icon} />,
    },
    {
      name: "Mas",
      icon: <MenuIcon className={style.icon} />,
    },
  ];

  return (
    <nav className={style.navbar}>
      {menuItem.map(({ name, icon }, index) => {
        return (
          <section className={style.section} key={index}>
            {icon}
            <span>{name}</span>
          </section>
        );
      })}
    </nav>
  );
};

export default Navbar;
