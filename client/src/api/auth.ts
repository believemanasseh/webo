import { BASE_URL } from ".";

type Login = {
  email?: string | undefined;
  handle?: string | null | undefined;
  password?: string | undefined;
};

type SignUp = {
  email?: string | undefined;
  dateOfBirth?: string | undefined;
} & Login;

export async function login(payload: Login) {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "content-type": "application/json" },
    });
    return response.json();
  } catch (err) {
    console.log(err, "ERR");
  }
}

export async function signUp(payload: SignUp) {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "content-type": "application/json" },
    });
    return response.json();
  } catch (err) {
    console.log(err, "err");
  }
}
