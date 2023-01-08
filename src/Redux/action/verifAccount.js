import axios from "axios";
import swal from "sweetalert";

export const VerifAccount = (data, navigate) => async (dispact) => {
  try {
    const result = await axios.post(
      "https://hireapp-be-production-e91c.up.railway.app/users/verification",
      data
    );
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("Token", user.token);
    dispact({ type: "USER_LOGIN_SUCCESS", payload: user });
    // navigate("/landingPage");

    swal({
      title: "Good job!",
      text: `${result.data.message}`,
      icon: "success",
    });
    navigate("/loginHireApp");
    console.log("Login success");
  } catch (e) {
    console.log("Login fail");
    console.log(e);
  }
};
