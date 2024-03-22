import { fetchAllUsers } from "@/lib/api";
import style from "./Home.module.css";
import Navbar from "@/ui/components/Navbar/Navbar";
import Explorer from "@/ui/components/Explorer/Explorer";

const Home = async () => {
  const users = await fetchAllUsers();
  return (
    <main className={style.main}>
      <aside className={style.asideLeft}>
        <h1>Red Social</h1>
        <Navbar />
      </aside>

      <Explorer />

      <aside className={style.asideRight}>Aside Right</aside>
    </main>
  );
};

export default Home;
