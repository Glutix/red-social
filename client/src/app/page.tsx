import style from "./Home.module.css";
import Navbar from "@/ui/components/Navbar/Navbar";
import Explorer from "@/ui/components/Explorer/Explorer";
import { aboreto } from "@/ui/fonts/fonts";

const Home = async () => {
  return (
    <main className={style.main}>
      <aside className={style.asideLeft}>
        <section className={style.logo}>
          <h1 className={`${style.title} ${aboreto.className}`}>Gods</h1>
        </section>
        <Navbar />
      </aside>

      <Explorer />

      <aside className={style.asideRight}>Aside Right</aside>
    </main>
  );
};

export default Home;
