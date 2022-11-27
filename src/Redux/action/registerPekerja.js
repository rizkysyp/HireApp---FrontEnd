import axios from "axios";
export const register = (data, navigate) => async (dispact, req, res, next) => {
  try {
    const result = await axios.post(
      "https://rich-gold-gorilla-wear.cyclic.app//register/pekerja",
      data
    );
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("Token ", user.token);
    dispact({ type: "USER_REGISTER_SUCCESS", payload: user });
    navigate("/loginPekerja");
    console.log("user register success");
  } catch (err) {
    console.log("user register fail");
    console.log(err);
  }
};
