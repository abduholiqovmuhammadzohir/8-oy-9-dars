const initialState = {
    token: localStorage.getItem("token") || null,
    role: localStorage.getItem("role") || null,
  };
  
  const userTokenReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_TOKEN":
        return { ...state, token: action.payload };
      case "SET_ROLE":
        return { ...state, role: action.payload };
      default:
        return state;
    }
  };
  
  export const setToken = (token) => ({ type: "SET_TOKEN", payload: token });
  export const setRole = (role) => ({ type: "SET_ROLE", payload: role });
  
  export default userTokenReducer;
  