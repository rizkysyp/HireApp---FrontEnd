import axios from "axios";
import swal from "sweetalert";

export const login = (data, navigate) => async (dispact) => {
  try {
    const result = await axios.post(
      `https://hireapp-be-production-e91c.up.railway.app/users/login`,

      data
    );
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("Token", user.token);
    localStorage.setItem("role", user.role);
    dispact({ type: "USER_LOGIN_SUCCESS", payload: user });
    console.log("Login success");
    swal({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
    }).then(() => {
      if (user.role === "employee") {
        console.log("user employee (pekerja)");
        navigate("/landingPage");
      } else {
        console.log("user company (perekrut)");
        navigate("/landingPage");
      }
    });
  } catch (e) {
    console.log("Login fail");
    console.log(e);
  }
};
