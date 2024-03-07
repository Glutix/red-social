const Home = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJRCI6MiwiZmlyc3ROYW1lIjoiUEVQSVRPIiwibGFzdE5hbWUiOiJQRVJFWiIsImVtYWlsIjoicGVwaXRvMUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQzcDU4eVc2a3Y4R3JPcXFxZ0Y2NUl1dnZlQkF1RHNSZkdjMEJ1YVJiWjNHQ0RtcVphUDNZeSIsImltYWdlIjoiaW1hZ2UxIiwiYmlydGhkYXRlIjoiMTk5Ny0wMS0yMSIsImRlc2NyaXB0aW9uIjoiaG9sYSwgbWUgZ3VzdGEgZWwgYW5pbWUgeGQiLCJpc0RlbGV0ZWQiOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDI0LTAyLTEyVDE4OjE5OjUwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTAyLTEyVDE4OjE5OjUwLjAwMFoifSwiaWF0IjoxNzA5MjU1NzU4LCJleHAiOjE3MDkyNzczNTh9.mFAbs8gjNFqWIOGcT_kBvfzXEjH0PzSeP5sSvDx9uSE";

  const users = await fetch("http://localhost:3001/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

  console.log(users);

  return (
    <>
      {users.map((user: any) => {
        return (
          <ul key={user.id}>
            <li>{user.userID}</li>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.description}</li>
          </ul>
        );
      })}
    </>
  );
};

export default Home;
