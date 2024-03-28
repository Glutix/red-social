import style from "./Explorer.module.css";
import { fetchAllUsers } from "@/lib/api";

const Explorer = async () => {
  const users = await fetchAllUsers();
  return (
    <main className={style.main}>
      <div className={style.container}>
        <input
          className={style.input}
          type="text"
          placeholder="Que estas pensando?"
        />
        <button className={style.btn}>Publicar</button>
      </div>

      <pre>{JSON.stringify(users, null, 2)}</pre>
    </main>
  );
};

export default Explorer;
