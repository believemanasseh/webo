import { BASE_URL } from ".";

type Login = {
  username: string;
  password: string;
};

type SignUp = {
  email: string;
} & Login;

export async function login(body: Login) {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function signUp(body: SignUp) {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
