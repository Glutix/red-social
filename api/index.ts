import server from "./src/app";
import database from "./src/db";

const PORT = process.env.PORT || 3002;

database.sync({ force: false });

server.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}...`);
});
