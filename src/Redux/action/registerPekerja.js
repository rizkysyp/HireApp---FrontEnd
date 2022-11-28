import axios from "axios";
import Swal from "sweetalert2";

export const register = (data, navigate) => async (dispact, req, res, next) => {
  try {
    const result = await axios.post(
      "https://rich-gold-gorilla-wear.cyclic.app/register/pekerja",
      data
    );
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("Token ", user.token);
    dispact({ type: "USER_REGISTER_SUCCESS", payload: user });
    Swal.fire({
      title: "Success",
      type: "success",
      icon: "success",
      text: "Akun Anda Berhasil Dibuat, Silahkan Check email anda untuk verifikasi",
    });
    navigate("/loginPekerja");
    console.log("user register success");
  } catch (err) {
    if (err.response.status === 404) {
      Swal.fire({
        title: "Error",
        type: "Error",
        icon: "warning",
        text: "Email yang anda masukan sudah pernah register",
      });
    } else if (err.response.status === 417) {
      Swal.fire({
        title: "Error",
        type: "Error",
        icon: "warning",
        text: "Password dan Konfirmasi Password tidak sama",
      });
    }
    console.log("user register fail");
    console.log(err);
  }
};
