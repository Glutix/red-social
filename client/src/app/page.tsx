import { fetchAllUsers } from "@/lib/api";
import { UserProps } from "@/lib/types/types";

const Home = async () => {
  const users = await fetchAllUsers();
  return (
    <main>
      <h1>Probando cositas</h1>

      {users?.map((user: UserProps, index) => {
        return <pre key={index}>{JSON.stringify(user, null, 2)}</pre>;
      })}
    </main>
  );
};

export default Home;
