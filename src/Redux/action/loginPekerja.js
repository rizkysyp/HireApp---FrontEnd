import axios from "axios";
export const loginPekerja = (data, navigate) => async (dispact) => {
  try {
    const result = await axios.post(
      `https://hireapp-be-production-e91c.up.railway.app/users/login`,

      data
    );
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("Token", user.token);
    // localStorage.setItem("Id", user.id);
    dispact({ type: "USER_LOGIN_SUCCESS", payload: user });
    navigate("/landingPage");
    console.log("Login success");
  } catch (e) {
    console.log("Login fail");
    console.log(e);
  }
};
