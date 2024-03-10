"use client";
import { fetchAllUsers } from "@/lib/api";
import style from "./Home.module.css";
import { UserInfo, UserProps } from "@/lib/types/types";
import { useEffect, useState } from "react";
const Home = () => {
  const [users, setUsers] = useState<UserInfo>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    }

    fetchAllUsers(token)
      .then((res) => {
        if (res) {
          setUsers(res);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isLoading]);

  return (
    <main>
      <h1>Probando cositas</h1>

      {users.map((user: UserProps) => {
        return (
          <ul key={user.userID}>
            <li>ID: {user.userID}</li>
            <li>Nombre: {user.firstName}</li>
            <li>Apellido: {user.lastName}</li>
            <li>Fecha de nacimiento: {user.birthdate}</li>
            <li>Descripcion: {user.description}</li>
            <li>Creacion de cuenta: {user.createdAt}</li>
            <br />
          </ul>
        );
      })}
    </main>
  );
};

export default Home;
