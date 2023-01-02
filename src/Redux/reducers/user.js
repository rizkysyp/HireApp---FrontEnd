const initialState = {
  user: {
    id: "",
    name: "",
    password: "",
    email: "",
    phonenumber: "",
    profile: "",
    skill: "",
    auth: "",
    image: "",
    created_on: "",
    otp: "",
  },
};

const userReducer = (state = initialState, action) => {
  if (action.type === "USER_LOGIN_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "USER_LOGIN_SUCCESS") {
    return {
      ...state,
      user: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};
export default userReducer;
