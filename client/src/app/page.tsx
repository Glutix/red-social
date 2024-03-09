import style from "./Home.module.css";
import Login from "@/ui/components/login/Login";

export default function Home() {
  return (
    <main className={style.container}>
      <Login />
      <section className={style.brand}>
        <h1 className={style.title}>Red Social</h1>
        <h2 className={style.slogan}>
          Una red social que te permite comunicarte con tus familiares y amigos.
        </h2>
      </section>
    </main>
  );
}
