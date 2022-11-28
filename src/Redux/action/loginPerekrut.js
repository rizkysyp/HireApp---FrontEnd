import axios from "axios";
import Swal from "sweetalert2";

export const loginPerekrut = (data, navigate) => async (dispact) => {
  try {
    const result = await axios.post(
      " https://rich-gold-gorilla-wear.cyclic.app/users/login",
      data
    );
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("Token", user.token);
    dispact({ type: "USER_LOGIN_SUCCESS", payload: user });
    navigate("/landingPage");
    console.log("Login success");
  } catch (e) {
    if (e.response.status === 402) {
      Swal.fire({
        title: "Error",
        type: "Error",
        icon: "warning",
        text: "Akun anda belum terverifikasi, silahkan check email anda",
      });
    } else if (e.response.status === 404) {
      Swal.fire({
        title: "Error",
        type: "Error",
        icon: "warning",
        text: "Password atau email yang anda masukan salah",
      });
    }
    console.log("Login fail");
    console.log(e);
  }
};
