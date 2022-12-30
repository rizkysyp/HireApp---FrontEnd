import axios from "axios";
export const loginPerekrut = (data, navigate) => async (dispact) => {
  try {
    const result = await axios.post(
      process.env.URL_ROUTE + `/users/login`,
      data
    );
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("Token", user.token);
    localStorage.setItem("Id", user.id);
    dispact({ type: "USER_LOGIN_SUCCESS", payload: user });
    navigate("/landingPage");
    console.log("Login success");
  } catch (e) {
    console.log("Login fail");
    console.log(e);
  }
};
