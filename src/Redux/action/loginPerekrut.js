import axios from "axios";
export const loginPerekrut = (data, navigate) => async (dispact) => {
  try {
    const result = await axios.post("http://localhost:3002/users/login", data);
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("Token", user.token);
    dispact({ type: "USER_LOGIN_SUCCESS", payload: user });
    navigate("/landingPage");
    console.log("Login success");
  } catch (e) {
    console.log("Login fail");
    console.log(e);
  }
};
