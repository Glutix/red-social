import style from "./Explorer.module.css";

const Explorer = () => {
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
    </main>
  );
};

export default Explorer;
