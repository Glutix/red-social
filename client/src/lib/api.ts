import { RegisterProps, UserInfo } from "@/lib/types/types";
const URL = process.env.NEXT_PUBLIC_API_URL;
import { UserLogin } from "@/lib/types/types";

export const fetchLoginUser = async (userInput: UserLogin) => {
  try {
    const response = await fetch(`${URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
      credentials: "include",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchRegisterUser = async (dataUser: RegisterProps) => {
  try {
    const res = await fetch(`${URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser),
      credentials: "include",
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllUsers = async () => {
  try {
    const data = await fetch("http://localhost:3001/users", {
      method: "GET",
      credentials: "include",
    });
    const users: UserInfo = await data.json();
    return users;
  } catch (error) {
    console.log(error);
  }
};
