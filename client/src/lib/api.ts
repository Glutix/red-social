import { RegisterProps, UserInfo } from "@/lib/types/types";
const URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchLoginUser = async (email: string, password: string) => {
  try {
    const res = await fetch(`${URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    return data;
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
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllUsers = async (token: string | null) => {
  try {
    if (token === null) {
      throw new Error("token is required");
    }

    const data = await fetch("http://localhost:3001/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const users: UserInfo = await data.json();
    return users;
  } catch (error) {
    console.log(error);
  }
};
