import { RegisterProps } from "@/lib/types/IssuesAPI";

export const fetchLoginUser = async (email: string, password: string) => {
  try {
    const URL = process.env.NEXT_PUBLIC_API_URL;
    console.log(URL);
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
    const URL = process.env.NEXT_PUBLIC_API_URL;
    console.log(URL);
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
